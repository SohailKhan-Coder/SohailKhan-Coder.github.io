# Sohail Khan Portfolio

## Run locally on Windows

Prerequisites: Node.js 22.12 or later (verified with Node 22.16.0 and npm 10.9.2).

This project retains its Bun lockfile. Bun is available through npm even when it is not installed globally:

```powershell
npx --yes bun install --frozen-lockfile
npm run dev
```

Open http://localhost:3000.

If Bun reports `EPERM` while creating Windows executable links, use this verified fallback:

```powershell
npm install --package-lock=false
npm run dev
```

The fallback deliberately avoids creating a competing npm lockfile. Bun's frozen install is the reproducible installation path; npm resolves the compatible ranges in package.json.

## Verify and build

```powershell
npm run lint
npm run build
npm run preview
```

`lint` checks TypeScript with tsconfig.json. `build` checks TypeScript before generating the production site in dist. Scripts invoke the installed tool entry points directly so they also work when Bun's Windows command links are unavailable.

The static portfolio does not require a Gemini API key. Existing profile pictures, project previews, sections, effects, and contact links are retained.
