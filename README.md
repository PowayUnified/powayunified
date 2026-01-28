# Starlight Starter Kit: Basics

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

```
npm create astro@latest -- --template starlight
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   └── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).

## 🪩 PUSD Brand Guidelines

This document outlines the official PUSD color palette with placeholders for HEX, RGB, and CMYK values.

##### Primary Colors

| Color Name       | HEX       | RGB            | CMYK             |
|-------------------|-----------|---------------|-------------------|
| PUSD GOLD         | #f0ad4e   | rgb(243, 173, 78)    | cmyk(0%, 29%, 68%, 5%)|
| PUSD LIGHT BLUE   | #54c8eb   | rgb(84, 200, 235)    | cmyk(64%, 15%, 0%, 8%)|
| PUSD NAVY         | #003366   | rgb(0, 51, 102)    | cmyk(100%, 50%, 0%, 60%)|

##### Secondary Colors

| Color Name       | HEX       | RGB            | CMYK             |
|-------------------|-----------|---------------|-------------------|
| PUSD Alt 1        | #dce0ef   | rgb(220, 224, 239)    | cmyk(8%, 6%, 0%, 6%)|
| PUSD Alt 2        | #a5afd6   | rgb(165, 175, 214)    | cmyk(23%, 18%, 0%, 16%)|
| PUSD Alt 3        | #3a57a8   | rgb(58, 87, 168)    | cmyk(65%, 48%, 0%, 34%)|