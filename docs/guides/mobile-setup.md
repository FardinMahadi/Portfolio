# Mobile App Setup Guide

This guide covers setting up and working with the mobile app version of the portfolio using Ionic Framework and Capacitor.

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Module Structure](#module-structure)
- [Development Workflow](#development-workflow)
- [Building and Deployment](#building-and-deployment)
- [Native Features](#native-features)
- [Troubleshooting](#troubleshooting)

---

## Overview

The portfolio supports both web and mobile platforms through:

- **Ionic React** - Mobile UI components
- **Capacitor** - Native platform bridge
- **Next.js 15** - Web framework with static export support

### Goals

- Cross-platform mobile app (iOS and Android)
- Maintain existing web functionality
- Single codebase for web, iOS, and Android
- Native device capabilities

---

## Architecture

### Hybrid Strategy

- **Web-First, Mobile-Enhanced**: Next.js App Router for web compatibility
- **Progressive Enhancement**: Ionic components conditionally based on platform
- **Maintain Design System**: Existing Tailwind components with mobile enhancements
- **Single Codebase**: One codebase for all platforms

### Module Organization

All mobile-specific code is organized in `src/mobile/` for clear separation:

```
src/mobile/
├── components/          # Mobile-specific React components
│   ├── IonicApp.tsx     # Main Ionic app wrapper
│   └── MobileNavigation.tsx  # Mobile navigation component
├── hooks/               # Mobile-specific React hooks
│   ├── usePlatform.ts   # Platform detection hook
│   ├── useHaptics.ts    # Haptic feedback hook
│   └── useKeyboard.ts   # Keyboard handling hook
├── lib/                 # Mobile utilities and helpers
│   └── platform.ts      # Platform detection utilities
├── styles/              # Mobile-specific styles
│   └── mobile.css       # Mobile CSS and Ionic theme variables
├── index.ts             # Centralized exports
└── README.md            # Module documentation (technical reference)
```

For detailed module documentation, see [`src/mobile/README.md`](../../src/mobile/README.md).

---

## Prerequisites

### Required

- Node.js 18+ (recommended: 20+)
- pnpm (package manager)
- Git

### For iOS Development

- macOS
- Xcode 14+
- CocoaPods

### For Android Development

- Android Studio
- Android SDK
- Java Development Kit (JDK)

---

## Installation

### Step 1: Install Dependencies

**Ionic React Packages:**

```bash
pnpm add @ionic/react ionicons
```

**Capacitor Core Packages:**

```bash
pnpm add @capacitor/core @capacitor/cli
pnpm add -D @capacitor/ios @capacitor/android
```

**Capacitor Plugins:**

```bash
pnpm add @capacitor/app @capacitor/haptics @capacitor/status-bar @capacitor/splash-screen @capacitor/keyboard
```

### Step 2: Initialize Capacitor (if not already done)

```bash
npx cap init
```

---

## Configuration

### Capacitor Config

File: `capacitor.config.ts`

```typescript
import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.fardinmahadi.portfolio",
  appName: "FardinMahadi Portfolio",
  webDir: "out", // Next.js static export directory
  server: {
    // Uncomment for development with live reload:
    // url: 'http://localhost:3000',
    // cleartext: true
    androidScheme: "https",
    iosScheme: "https",
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      launchAutoHide: true,
    },
    StatusBar: {
      style: "dark",
    },
  },
};

export default config;
```

### Next.js Config

The project is configured to support both web and mobile builds:

- **Web build**: Standard Next.js standalone output
- **Mobile build**: Static export (`output: 'export'`) when `BUILD_MOBILE=true`

### Package.json Scripts

```json
{
  "scripts": {
    "build:mobile": "BUILD_MOBILE=true next build",
    "cap:sync": "cap sync",
    "cap:ios": "cap open ios",
    "cap:android": "cap open android",
    "cap:run:ios": "cap run ios",
    "cap:run:android": "cap run android"
  }
}
```

---

## Module Structure

### Importing Mobile Features

All mobile features can be imported from the main mobile module:

```typescript
// Import components
import { IonicApp, MobileNavigation } from "@/mobile";

// Import hooks
import { usePlatform, useHaptics, useKeyboard } from "@/mobile";

// Import platform utilities
import { getPlatform, isNativePlatform, isMobilePlatform } from "@/mobile";
```

### Platform Detection

```typescript
import { usePlatform } from "@/mobile";

function MyComponent() {
  const { isNative, isIOS, isAndroid, isWeb } = usePlatform();

  if (isNative) {
    // Native-specific code
  }

  return <div>...</div>;
}
```

### Haptic Feedback

```typescript
import { useHaptics } from "@/mobile";

function MyButton() {
  const { impact } = useHaptics();

  const handleClick = () => {
    impact(); // Triggers haptic feedback on native
    // ... rest of click handler
  };

  return <button onClick={handleClick}>Click me</button>;
}
```

### Keyboard Handling

```typescript
import { useKeyboard } from "@/mobile";

function MyForm() {
  const { isVisible, keyboardHeight } = useKeyboard();

  return (
    <div style={{ paddingBottom: isVisible ? keyboardHeight : 0 }}>
      {/* Form content */}
    </div>
  );
}
```

For complete API documentation, see [`src/mobile/README.md`](../../src/mobile/README.md).

---

## Development Workflow

### Development with Live Reload

1. **Start Next.js dev server:**

   ```bash
   pnpm dev
   ```

2. **Configure Capacitor for live reload:**
   In `capacitor.config.ts`, uncomment the server URL:

   ```typescript
   server: {
     url: 'http://localhost:3000',
     cleartext: true
   }
   ```

3. **Sync with native projects:**

   ```bash
   pnpm cap:sync
   ```

4. **Open in native IDE:**

   ```bash
   # iOS (macOS only)
   pnpm cap:ios

   # Android
   pnpm cap:android
   ```

5. **Run on device/emulator:**

   ```bash
   # iOS
   pnpm cap:run:ios

   # Android
   pnpm cap:run:android
   ```

Changes will hot-reload in the app automatically.

### Production Build Workflow

1. **Build for mobile:**

   ```bash
   pnpm build:mobile
   ```

   This creates a static export in the `out/` directory.

2. **Sync to native projects:**

   ```bash
   pnpm cap:sync
   ```

   This copies the built web app to the native projects.

3. **Build and deploy:**
   - Open in Xcode/Android Studio
   - Configure app icons and splash screens
   - Build and deploy from the native IDE

---

## Building and Deployment

### Build Commands

```bash
# Build for mobile (static export)
pnpm build:mobile

# Sync web app to native projects
pnpm cap:sync

# Open native projects
pnpm cap:ios        # iOS (macOS only)
pnpm cap:android    # Android
```

### Native Project Configuration

#### iOS Configuration

1. **Open in Xcode:**

   ```bash
   pnpm cap:ios
   ```

2. **Configure:**
   - App icons in `ios/App/App/Assets.xcassets/AppIcon.appiconset/`
   - Splash screens
   - Signing and provisioning in Xcode project settings
   - Info.plist settings

3. **Build and deploy:**
   - Select device/simulator
   - Build (Cmd+B)
   - Run (Cmd+R) or Archive for App Store

#### Android Configuration

1. **Open in Android Studio:**

   ```bash
   pnpm cap:android
   ```

2. **Configure:**
   - App icons in `android/app/src/main/res/`
   - Splash screens
   - AndroidManifest.xml settings
   - build.gradle settings

3. **Build and deploy:**
   - Select device/emulator
   - Build (Ctrl+F9)
   - Run (Shift+F10) or Build → Generate Signed Bundle/APK

---

## Native Features

### Implemented Features

- ✅ **Platform Detection**: Automatic iOS/Android/Web detection
- ✅ **Haptic Feedback**: Available via `useHaptics` hook
- ✅ **Status Bar**: Configured and styled
- ✅ **Splash Screen**: Configured with brand colors
- ✅ **Keyboard Handling**: Automatic keyboard management via `useKeyboard` hook
- ✅ **Deep Linking**: Ready for URL scheme handling
- ✅ **Back Button**: Android back button handling

### Mobile Optimizations

- ✅ Safe area insets for notched devices
- ✅ Touch target sizes (minimum 44x44px)
- ✅ Mobile-specific CSS variables
- ✅ Platform-specific styling

### Using Native Features

See the [Module Structure](#module-structure) section for code examples.

For detailed API documentation, see [`src/mobile/README.md`](../../src/mobile/README.md).

---

## Troubleshooting

### Build fails with "output: export"

**Solutions:**

1. Ensure all pages are compatible with static export
2. Check for any server-side only features
3. Verify API routes are not used in mobile build

### Capacitor sync fails

**Solutions:**

1. Verify native platforms are installed:
   ```bash
   pnpm add -D @capacitor/ios @capacitor/android
   ```
2. Run `npx cap sync` manually if needed
3. Check for path conflicts

### Styles not loading

**Solutions:**

1. Verify `mobile.css` is imported in `src/app/layout.tsx`
2. Check Ionic CSS imports in `src/mobile/styles/mobile.css`
3. Clear Next.js cache: `rm -rf .next`

### Platform detection not working

**Solutions:**

1. Ensure `@capacitor/core` is installed
2. Verify code runs on client side (use `'use client'` directive)
3. Check platform detection utilities in `src/mobile/lib/platform.ts`

### Live reload not working

**Solutions:**

1. Verify `capacitor.config.ts` has server URL configured
2. Ensure dev server is running on the configured port
3. Check network connectivity between device and development machine
4. For iOS, ensure cleartext is enabled for HTTP connections

### Native plugins not working

**Solutions:**

1. Sync plugins: `pnpm cap:sync`
2. Rebuild native projects
3. Check plugin configuration in `capacitor.config.ts`
4. Verify plugin packages are installed

---

## Configuration Details

### Capacitor Config

- **App ID**: `com.fardinmahadi.portfolio`
- **App Name**: `FardinMahadi Portfolio`
- **Web Directory**: `out` (Next.js static export)
- **Theme Color**: `#06b6d4` (cyan)

### Next.js Config

- Supports both web (`standalone`) and mobile (`export`) builds
- Use `BUILD_MOBILE=true` environment variable for mobile builds

---

## Testing Checklist

Before deploying, test:

- [ ] Navigation works on both platforms
- [ ] Haptic feedback triggers on interactions
- [ ] Status bar styling is correct
- [ ] Splash screen displays properly
- [ ] Keyboard handling works correctly
- [ ] Deep linking functions (if implemented)
- [ ] App icons and splash screens are set
- [ ] Performance on lower-end devices
- [ ] Safe area insets on notched devices
- [ ] Back button works on Android
- [ ] Live reload works during development

---

## Best Practices

1. **Keep mobile code separate**: All mobile code should be in `src/mobile/`
2. **Use platform detection**: Always check platform before using native features
3. **Graceful degradation**: Mobile features should fail silently on web
4. **Import from index**: Use `@/mobile` imports for consistency
5. **Test on real devices**: Emulators don't always reflect real device behavior
6. **Optimize for mobile**: Consider performance and battery impact

---

## Resources

- [Ionic Framework Documentation](https://ionicframework.com/docs)
- [Capacitor Documentation](https://capacitorjs.com/docs)
- [Ionic React Documentation](https://ionicframework.com/docs/react)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Module Documentation](../../src/mobile/README.md) - Technical reference for mobile module

---

## Notes

- The integration maintains backward compatibility with the web version
- All existing functionality continues to work
- Mobile enhancements are additive, not replacing existing features
- The approach allows for gradual migration and testing
- All mobile code is organized in `src/mobile/` folder for easy maintenance
- Import mobile features using `@/mobile` for consistency

---

**Related Documentation:**

- [Development Workflow](../getting-started/development-workflow.md)
- [Deployment Guide](./deployment.md)
- [Troubleshooting Guide](./troubleshooting.md)
- [Mobile Module README](../../src/mobile/README.md) - Technical API reference
