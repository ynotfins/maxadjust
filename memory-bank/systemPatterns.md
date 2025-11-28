# System Patterns: MaxAdjust PWA Architecture

## System Architecture Overview

### Application Structure
```
MaxAdjust PWA
├── Presentation Layer (React/Next.js)
│   ├── Mobile Components (Bottom Nav, Cards)
│   ├── Desktop Components (Top Nav)
│   └── Shared UI Components
├── Business Logic Layer
│   ├── Service Worker (Offline/PWA)
│   ├── Contact Handlers
│   └── Analytics
└── Data Layer
    ├── Static Content (MDX)
    ├── Image Assets (WebP)
    └── Local Storage (PWA)
```

## Key Technical Decisions

### Mobile-First Architecture
- **Breakpoint Strategy**: Mobile-first CSS with min-width queries
- **Component Loading**: Mobile components loaded by default
- **Desktop Enhancement**: Desktop features added progressively

### Performance Patterns
- **Code Splitting**: Separate bundles for mobile/desktop navigation
- **Image Optimization**: WebP with fallbacks, lazy loading
- **Critical CSS**: Inline styles for above-fold content
- **Service Worker**: Cache-first strategy for static assets

### Component Architecture

#### Bottom Navigation Pattern
```tsx
// Fixed bottom navigation for mobile/tablet
<MobileNavigation>
  <NavItem href="/" icon={Home} label="Home" />
  <NavItem href="/services" icon={Grid} label="Services" />
  <NavItem href="tel:8889995740" icon={Phone} label="Call" primary />
  <NavItem href="/chat" icon={MessageCircle} label="Chat" />
  <NavItem href="/menu" icon={Menu} label="More" />
</MobileNavigation>
```

#### Service Card Pattern
```tsx
// Consistent card structure across pages
<ServiceCard>
  <ServiceIcon name="water-damage" />
  <ServiceTitle>Water Damage</ServiceTitle>
  <ServiceDescription>24/7 emergency response</ServiceDescription>
  <ServiceCTA href="/water-damage">Learn More</ServiceCTA>
</ServiceCard>
```

## Design Patterns in Use

### Container Pattern
- Max-width containers with responsive padding
- Full-width on mobile, constrained on desktop
- Consistent spacing scale: 4, 8, 12, 16, 24, 32, 48, 64

### Card Pattern  
- White background with subtle shadow
- Consistent padding (16px mobile, 24px desktop)
- Full-width on mobile, grid on larger screens

### Button Pattern
- Primary: Blue (#2196F3) with white text
- Danger: Red (#F44336) for emergency CTAs
- Full-width on mobile, auto-width on desktop
- 56px height for mobile touch targets

### Navigation Pattern
- Bottom fixed navigation (mobile/tablet)
- Top sticky navigation (desktop only)
- Active state with blue color and bold text

## Component Relationships

### Page Layout Structure
```
<Layout>
  <Header /> (Desktop only)
  <main>
    <Hero />
    <Services />
    <Testimonials />
    <CTA />
  </main>
  <MobileNavigation /> (Mobile/Tablet only)
</Layout>
```

### State Management Pattern
- URL state for navigation active states
- React Context for PWA install prompt
- Local storage for user preferences
- No complex state management needed

## Critical Implementation Paths

### PWA Implementation
1. **Plugin**: `@ducanh2912/next-pwa` configured in `next.config.ts`
2. **Manifest**: Dynamic generation via `src/app/manifest.ts`
3. **Service Worker**: Auto-generated `sw.js` in `public/` (disabled in dev)
4. **Icons**: Standardized icons in `public/`
5. **Offline Support**: Cache-first strategy for static assets

### Performance Critical Path
1. Inline critical CSS
2. Preload hero images
3. Lazy load below-fold content  
4. Defer non-critical scripts

### Mobile Navigation Flow
1. Bottom nav always visible (z-index: 50)
2. Content has bottom padding (80px)
3. Smooth scroll to sections
4. No complex mega menus

## Security & Best Practices
- Content Security Policy headers
- HTTPS only (required for PWA)
- Sanitize form inputs
- Secure contact form with rate limiting
