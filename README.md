# Green Village Anuradhapura

Eight static Next.js pages for the homestay, local experiences and photo gallery.
The published site serves HTML, CSS, JavaScript, fonts and images. It has no application
server, database, Server Actions, upload endpoint or image optimization proxy.
Booking links continue to open Airbnb. Sites manages its own access controls.

## Local use (Node.js 22.13+)

- `npm ci` installs the locked dependencies.
- `npm run dev` starts a loopback-only editing server with Webpack and native file watching.
- `npm run build` exports the pages to `out/` and applies the static security policy.
- `npm start` previews the last build at `http://127.0.0.1:3000` without compilation or file watchers.
- `npm run check` runs type checks, lint, the production build and tests.
- `npm run audit` checks current dependency advisories.

For browsing on a laptop, prefer the published site or `npm start`. Use the development
server only while editing and press Ctrl+C when finished. Build parallelism is limited
to two workers. `PORT=3002 npm start` selects another preview port.

## Structure

- `app/layout.tsx`: one shared header and footer for every route.
- `app/_components/`: shared site layout.
- `app/components.tsx`: shared page sections and gallery wrapper.
- `app/_data/site.ts`: navigation, experiences and review copy.
- `app/gallery-data.ts`: photo catalogue; keep original image files in `public/images/`.
- `app/_styles/`: plain CSS reset and site styles; no Tailwind scanning step.
- `scripts/`: static export security policy and lightweight local preview.
- `tests/`: exported pages, assets, gallery and security regression checks.

## Deployment and security

Run `npm run build` before deployment. Publish **only `out/`**, never the repository,
`.next/`, environment files or dependencies. `.openai/hosting.json` retains the existing
Sites project; `vercel.json` supports the same static output on Vercel.

The export moves Next.js inline executable scripts to same-origin files with content
hashes. CSP blocks inline script execution, eval, third-party scripts, objects and forms.
Inline styles remain allowed for existing gallery CSS custom properties. Security headers
also disable framing, MIME sniffing and unused camera, microphone and location permissions.
CSP is included in HTML as well as hosting headers. HSTS applies when served over HTTPS.

Do not add secrets to browser code. Keep the lockfile current and re-run the audit after
updates. Static hosting reduces server attack surface; it does not replace hosting-account
security, dependency maintenance or external penetration testing.

## Cloudflare Workers

The existing `green-village` Worker serves the static export using `wrangler.jsonc`.
Connect `Sandalu-Xe/Green-Village`, select production branch `main`, use
`npm run build` as the build command and `npx wrangler deploy` as the deploy command.
The configuration points to `out/` and serves the exported 404 page for unknown routes.
No OpenNext adapter or server-side Next.js bundle is required.
