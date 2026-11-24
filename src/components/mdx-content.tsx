import type { ComponentType } from "react";
import { mdxRegistry } from "@/generated/mdx-registry";

type MdxComponent = ComponentType<Record<string, unknown>>;

type MdxContentProps = {
    service: string;
    slug: string;
    components?: Record<string, MdxComponent>;
};

/**
 * Renders a precompiled MDX document.
 *
 * MDX is compiled to static modules by `scripts/generate-mdx.mjs` because
 * Cloudflare Workers disallow runtime code generation.
 */
export function MdxContent({ service, slug, components }: MdxContentProps) {
    const Content = mdxRegistry[`${service}/${slug}`] as
        | ComponentType<{ components?: Record<string, MdxComponent> }>
        | undefined;
    if (!Content) return null;
    return <Content components={components} />;
}
