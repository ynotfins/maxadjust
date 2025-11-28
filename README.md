# MaxAdjust Mobile-First PWA

A Progressive Web App for MaxAdjust public insurance adjusters, built with Next.js and optimized for mobile-first experience.

## Getting Started

This project uses pnpm as the package manager. First, install dependencies:

```bash
pnpm install
```

Then run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## PWA Features

This project is a Progressive Web App (PWA) powered by `@ducanh2912/next-pwa`.

- **Offline Support**: Works offline using a service worker (enabled in production).
- **Installable**: Can be installed on mobile devices and desktops.
- **Manifest**: Dynamic manifest generation via `src/app/manifest.ts`.

To test PWA features in development, you can temporarily enable the service worker in `next.config.ts` by setting `disable: false`.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
