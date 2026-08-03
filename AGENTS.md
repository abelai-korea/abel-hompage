<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Deployment

This Vercel project (`abel-hompage`) has **no GitHub integration** — `git push` to `main` does NOT trigger a deploy. `vercel project inspect abel-hompage` shows no Git section. To actually deploy to production, run `vercel --prod` (or `npx vercel --prod`) from this directory after pushing. Confirmed 2026-08-03.
