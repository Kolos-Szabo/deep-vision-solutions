# Fix the failing GitHub Actions deploy

## What's wrong

The workflow's install step runs `npm ci`, which requires `package-lock.json` to match `package.json` exactly. It currently doesn't:

- `@lovable.dev/vite-tanstack-config`: `package.json` wants `2.13.1`, the lockfile has `2.12.0`
- the `overrides` block (`seroval`, `seroval-plugins`) added for the security fix is missing from the lockfile

`npm ci` aborts with an `EUSAGE` lock-mismatch error, so the **build** job fails, and the **deploy** job stays *pending* forever because it waits on `needs: build`. Nothing is wrong with the blog posts themselves.

## The fix

1. Regenerate `package-lock.json` from the current `package.json` (`npm install --package-lock-only`), so it includes version `2.13.1` and the `overrides` block, and commit it.
2. Make the workflow resilient: keep `npm ci` but fall back to `npm install` if the lock is ever out of sync again, so a stale lockfile can't block a deploy.
3. Enable npm cache in the `setup-node` step for faster builds.

## After the change

Push triggers the workflow again. If it still fails, the remaining likely cause is repository settings, not code: **Settings → Pages → Build and deployment → Source** must be set to **GitHub Actions** (not "Deploy from a branch"), otherwise the deploy job errors on the environment. I'll confirm the workflow file is correct and tell you exactly what to check there.

## Technical notes

- Files touched: `package-lock.json` (regenerated), `.github/workflows/deploy.yml` (install step + cache).
- No app/source code changes; blog posts, routes and prerendering stay as-is.
- Build output stays `./dist` with `scripts/postbuild.mjs` writing `404.html` and `.nojekyll`; `public/CNAME` keeps the custom domain.
