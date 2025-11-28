# Active Context: MaxAdjust PWA Development

## Current Date: November 28, 2025

## Current Work Focus
PWA implementation is complete and verified in development. Currently resolving a production build issue related to `content-collections` to ensure successful deployment.

## Recent Changes
- ✅ Implemented PWA support using `@ducanh2912/next-pwa`
- ✅ Configured `manifest.ts` for dynamic web manifest generation
- ✅ Fixed type errors in `manifest.ts` and updated `tsconfig.json`
- ✅ Verified Service Worker and Manifest functionality in development mode
- ✅ Migrated to pnpm package manager (Windows-safe config)
- ✅ Implemented mobile-first design system (Primary Blue #2196F3)

## Next Steps
1. **Fix Build Error**: Resolve `readlink` error associated with `content-collections` during production build
2. **Verify Production PWA**: Ensure Service Worker registers correctly in the production build
3. **Update Service Pages**: Apply mobile-first design templates to all service pages
4. **Performance Optimization**: Implement image lazy loading and audit bundle size

## Active Decisions & Considerations

### PWA Implementation
- **Library**: Chose `@ducanh2912/next-pwa` for better Next.js 13+ support.
- **Strategy**: Service Worker is disabled in development (`disable: process.env.NODE_ENV === "development"`) to prevent caching issues during iteration.
- **Manifest**: Generated dynamically via `src/app/manifest.ts` to utilize project branding constants.

### Implemented Design System
- **Colors**: Primary Blue #2196F3, Danger Red #F44336, Success Green #4CAF50
- **Typography**: System fonts for clean, native feel
- **Spacing**: 4, 8, 12, 16, 24, 32, 48, 64px scale

## Current Blockers
- **Production Build Failure**: `pnpm build` fails with a `readlink` error, likely stemming from `content-collections` or a file system anomaly in the `src` directory.

## Session Notes
Successfully implemented PWA features (manifest, icons, service worker config). Verified functionality in dev mode. Encountered a persistent build error during `pnpm build` which seems unrelated to the PWA changes (persisted even when PWA config was reverted). Next priority is debugging the build process.
