// Compiles src/contents/**/*.mdx into static React components at build time.
//
// Cloudflare Workers forbid runtime code generation (`new Function` / `eval`),
// which is how @content-collections/mdx renders MDX. Precompiling keeps the
// same MDX output but ships real modules instead of code strings.

import { promises as fs } from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { compile } from "@mdx-js/mdx";

const root = process.cwd();
const contentsDir = path.join(root, "src", "contents");
const outDir = path.join(root, "src", "generated");

async function walk(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const files = await Promise.all(
        entries.map((entry) => {
            const full = path.join(dir, entry.name);
            return entry.isDirectory() ? walk(full) : [full];
        }),
    );
    return files.flat();
}

function safeName(value) {
    return value.replace(/[^a-zA-Z0-9_-]+/g, "_");
}

const files = (await walk(contentsDir))
    .filter((file) => file.endsWith(".mdx"))
    .sort();

const mdxOutDir = path.join(outDir, "mdx");
await fs.rm(mdxOutDir, { recursive: true, force: true });
await fs.mkdir(mdxOutDir, { recursive: true });

const entries = [];

for (const file of files) {
    const raw = await fs.readFile(file, "utf8");
    const { data, content } = matter(raw);
    const service = typeof data.service === "string" ? data.service : "";
    const slug = typeof data.slug === "string" ? data.slug : "";

    if (!service || !slug) {
        console.warn(`[generate-mdx] skipped (missing service/slug): ${file}`);
        continue;
    }

    const compiled = String(
        await compile(content, {
            jsx: true,
            jsxImportSource: "react",
            outputFormat: "program",
            development: false,
        }),
    );

    const name = safeName(`${service}--${slug}`);
    await fs.writeFile(
        path.join(mdxOutDir, `${name}.tsx`),
        `// @ts-nocheck\n${compiled}\n`,
        "utf8",
    );
    entries.push({ service, slug, name });
}

const registry = [
    "// @ts-nocheck",
    'import type { ComponentType } from "react";',
    ...entries.map((entry, i) => `import M${i} from "./mdx/${entry.name}.tsx";`),
    "",
    "export const mdxRegistry: Record<string, ComponentType<any>> = {",
    ...entries.map(
        (entry, i) =>
            `    ${JSON.stringify(`${entry.service}/${entry.slug}`)}: M${i},`,
    ),
    "};",
    "",
];

await fs.writeFile(
    path.join(outDir, "mdx-registry.ts"),
    registry.join("\n"),
    "utf8",
);

console.log(`[generate-mdx] compiled ${entries.length} MDX documents`);
