# Memorie Website

Memorie Website is the public home for Memorie: a warm, privacy-first memory app designed to help families keep meaningful stories alive.

This project includes:
- A conversion-focused landing page
- Legal pages: Terms of Service and Privacy Policy
- A Support page
- Static export setup ready for Cloudflare Pages

## Why Memorie

Memorie helps two core user groups:
- Parents who want to preserve their children’s artwork, letters, and keepsakes in a tidy, meaningful archive
- Young adults who want to revisit beautiful childhood memories with family, with a long-term vision toward immersive and VR-ready memory experiences

## Tech Stack

- Next.js (App Router)
- TypeScript
- CSS Modules + global design tokens
- Static export (`next export` via `output: "export"`)

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
```

Static files are generated in the `out` directory.

## Deploy to Cloudflare Pages

Use these settings in Cloudflare Pages:

- Framework preset: `Next.js (static export)` or `None` (manual)
- Build command: `npm run build`
- Build output directory: `out`
- Node.js version: `20` (recommended)

If you use environment variables later, define them in Cloudflare Pages project settings.

## Project Structure

```text
app/
  components/      # Landing page UI sections
  privacy/         # Privacy page
  support/         # Support page
  terms/           # Terms page
public/
  images/          # Static assets
```

## Support

We welcome questions, ideas, and feedback.

- GitHub Discussions: enable in this repository and use it as the primary public support channel
- Email: `rifqi.efforts@gmail.com`

## Content and Legal Note

Legal text in this repository is a product baseline and should be reviewed by a qualified legal professional before release in production.

## Contributing

Contributions are welcome. If you want to suggest copy, UX improvements, or accessibility fixes:

1. Open a Discussion for early feedback
2. Open an Issue for bugs or feature requests
3. Submit a Pull Request with clear context and screenshots

## License

Choose and add a license file that matches your intended open-source usage.
