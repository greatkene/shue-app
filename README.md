# React Native Architecture Guide

Feature-first React Native architecture using:

- React Native / Expo
- TypeScript
- Zustand
- TanStack Query
- React Navigation
- Node.js 22

---

# Node Version

```bash
node -v
# v22.x
```

Recommended:

```bash
nvm use 22
```

---

# Core Principles

- Feature-first architecture
- Single screen files
- Hooks own business logic
- Screens focus on UI
- Shared code lives in `shared/`
- Keep logic close to usage
- Avoid deep nesting
- Prefer explicit TypeScript types

---

# Folder Structure

```txt
src/
├── app/
│   ├── navigation/
│   └── providers/
│
├── features/
│   ├── auth/
│   ├── marketplace/
│   ├── profile/
│   └── etc/
│
├── shared/
│   ├── ui/
│   ├── hooks/
│   ├── theme/
│   ├── utils/
│   └── lib/
│
└── assets/
```

---

# Feature Structure

Each feature follows this structure:

```txt
feature-name/
├── data/
│   ├── api/
│   └── store/
│
├── ui/
│   ├── components/
│   ├── hooks/
│   └── screens/
│
├── strings/
├── types/
└── index.ts
```

---

# Screen Architecture

## Single Screen File

```txt
screens/
└── LoginScreen.tsx
```

---

# Screen Pattern

Each screen:

1. imports a screen hook
2. calls the hook
3. renders UI

Example:

```tsx
export function LoginScreen() {
  const props = useLoginScreen();

  return (
    <Screen>
      <Text>{props.title}</Text>
    </Screen>
  );
}
```

---

# Hooks

Hooks live in:

```txt
ui/hooks/
```

Example:

```txt
useLoginScreen.ts
useProfileScreen.ts
useCreateListingScreen.ts
```

---

# What Hooks Own

Hooks contain:

- business logic
- handlers
- validation
- side effects
- derived state
- debouncing
- TanStack Query hooks
- navigation logic

---

# Hook Rules

## Keep related logic together

Avoid excessive tiny hooks.

Good:

```txt
useCreateListingScreen.ts
```

Avoid:

```txt
useFormValidation.ts
useScreenEffects.ts
useScreenInputs.ts
```

unless genuinely reusable.

---

## Split only when needed

Split hooks only if:

- hook becomes hard to maintain
- exceeds roughly 200 lines

---

# Components

Located in:

```txt
ui/components/
```

Used for reusable feature-specific UI.

Examples:

```txt
ProductCard.tsx
ProfileHeader.tsx
SettingsRow.tsx
ListingSummary.tsx
```

---

# Components Rules

- Prefer reusable UI
- Avoid business logic
- Prefer composition
- Keep components small

---

# Data Layer

Located in:

```txt
data/
```

Structure:

```txt
data/
├── api/
└── store/
```

---

# API Layer

Contains:

- fetch functions
- mutations
- query hooks
- API adapters

Example:

```txt
authApi.ts
listingMutations.ts
profileApi.ts
```

---

# Mutation Rule

Default:

```txt
authMutations.ts
listingMutations.ts
```

Split files only when:

- file becomes too large
- logic becomes complex

---

# Zustand Stores

Located in:

```txt
data/store/
```

Examples:

```txt
authStore.ts
themeStore.ts
listingDraftStore.ts
```

Rules:

- keep stores feature-scoped
- avoid massive global stores
- no UI logic inside stores

---

# Shared Folder

Reusable cross-feature code lives in:

```txt
shared/
```

Structure:

```txt
shared/
├── ui/
├── hooks/
├── utils/
├── theme/
├── lib/
└── types/
```

---

# Architecture Rules

## Features should stay isolated

Allowed:

```txt
feature -> shared
```

Avoid:

```txt
feature -> feature
```

---

# No Global Screens Folder

Avoid:

```txt
src/screens/
```

Screens belong inside features.

---

# Avoid Require Cycles

Prefer:

```ts
@/features/auth/ui/hooks/useLoginScreen
```

Avoid:

```ts
@/features/auth
```

inside the same feature.

---

# State Management

## Zustand

Used for:

- auth state
- local feature state
- drafts
- UI preferences

---

## TanStack Query

Used for:

- fetching
- caching
- syncing
- mutations

Rules:

- keep queries close to features
- avoid unnecessary repository layers

---

# Navigation

Located in:

```txt
app/navigation/
```

Example:

```txt
navigation/
├── AppStack.tsx
├── AuthStack.tsx
├── BottomTabs.tsx
├── MainRouter.tsx
└── types.ts
```

---

# Styling Rules

## Default: co-locate styles

Keep styles inside the component or screen.

---

## Extract large styles

If styles become too large:

```txt
Receipt.styles.ts
```

Keep beside the component.

---

## Shared styles

Extract only reusable primitives:

- spacing
- typography
- colors
- layout helpers

Avoid shared screen-specific styles.

---

# Strings

## Avoid giant global strings files

Prefer feature-level strings.

Example:

```txt
features/auth/strings/
features/marketplace/strings/
```

---

# String Rules

Good:

```ts
loginStrings.title
marketplaceStrings.header
```

Avoid:

```ts
title
label
text
```

---

# Path Aliases

Example:

```txt
@/app/*
@/features/*
@/shared/*
@/assets/*
```

Use aliases over deep relative imports.

---

# Example Flow

```txt
useLoginScreen.ts
        ↓
LoginScreen.tsx
        ↓
components/*
```

---

# Mental Model

```txt
Feature
 ├── Screen
 │    └── Hook
 │          ├── API
 │          ├── Store
 │          └── Logic
 │
 └── Components
```

- Hooks own behavior
- Screens own rendering
- Components own reusable UI

---

# Quick Rules Summary

## Do

- Keep hooks cohesive
- Keep features isolated
- Keep logic close to usage
- Use TypeScript properly
- Use shared only for reusable code

## Avoid

- giant global folders
- excessive tiny hooks
- feature-to-feature imports
- `as any`
- deep nesting
- business logic inside components