# ASTRO Portfolio

Personal portfolio built with Astro, React, and Tailwind CSS.

## Live Sections

- Home: intro, social links, tech logo wall, skills, and radar chart
- Projects: highlighted project cards with code and live links
- Contact: direct reach out section
- Footer: social links, like button, stack info, and Spotify embed

## Tech Stack

- Astro 5
- React 19
- TypeScript
- Tailwind CSS
- Firebase
- Recharts
- Lottie React
- Three.js and OGL

## Featured Projects

- Transfer Learning in Astronomy
- NEXUS Ecosystem
- Svgl.app (Contributor)
- Rifas Velez Web

You can update project cards in src/components/Projects.astro.

## Getting Started

1. Clone the repository.

```bash
git clone https://github.com/Andrada31/portfolio
cd portfolio
```

2. Install dependencies.

```bash
pnpm install
```

3. Run the development server.

```bash
pnpm dev
```

4. Open http://localhost:4321

## Scripts

```bash
pnpm dev      # Start dev server
pnpm build    # Type-check and build for production
pnpm preview  # Preview production build locally
```

## Customization

- Personal info and hero section: src/components/Home.astro
- Project list/cards: src/components/Projects.astro
- Contact section: src/components/Contact.astro
- Footer links and Spotify iframe: src/components/Footer.astro
- Main page composition: src/pages/index.astro

To change the Spotify embed, replace the iframe src in src/components/Footer.astro.

## Project Structure

```text
public/
     png/
     svg/
     transformer.json
src/
     components/
          Contact.astro
          Footer.astro
          Home.astro
          LogoWall.astro
          Nav.astro
          Projects.astro
     layouts/
          Layout.astro
     pages/
          index.astro
     React/
          AstronautCard.tsx
          DarkVeil.tsx
          LikeButton.tsx
          LiquidEther.tsx
          LottieAnimation.tsx
          ProjectCard.tsx
          RadarChartComponent.tsx
          SkillsList.tsx
```
