This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, make sure you have Node.js installed on your machine. Then, navigate to your project directory in the terminal and install the necessary dependencies using npm:

```bash
yarn || npm install
```

Second, run the development server:

```bash
yarn run dev || npm run dev
```

to build the project run:

```bash
yarn run build || npm run build
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Project Structure

This project follows a structured directory layout to keep the code organized:

- `.github/workflows/` - Contains GitHub Actions workflows for CI/CD.
- `.next/` - Stores the Next.js build output (automatically generated).
- `node_modules/` - Holds all installed dependencies (will be created after `bash yarn ` add or `bash npm install `).
- `public/` - Contains static assets such as images, CSV files, and other publicly accessible resources.
  - `image/` - Stores image assets.
- `src/` - Main source code directory.
  - `app/` - Contains Next.js pages and application logic.
  - `components/` - Reusable UI components.
  - `constants/` - Stores global constants used throughout the project.
  - `hooks/` - Custom React hooks for state management and API interactions.
  - `lib/` - Contains utility functions and helper modules.
  - `styles/` - Stores global and component-specific styles.
  - `utils/` - Additional helper functions and utilities.
- `index.ts` - Entry point for TypeScript configurations.
- `.eslintrc.json` - ESLint configuration file.
- `.gitignore` - Specifies files and directories to be ignored by Git.
- `components.json` - Configuration file related to components.
- `next-env.d.ts` - TypeScript environment configuration for Next.js.
- `next.config.mjs` - Next.js configuration file.
- `package.json` & `package-lock.json` - Dependency and script management files.
- `postcss.config.mjs` - Configuration for PostCSS (used with Tailwind CSS).
- `README.md` - Documentation for the project.
- `tailwind.config.ts` - Tailwind CSS configuration file.
- `tsconfig.json` - TypeScript configuration file.

This structure ensures modularity and maintainability while keeping Next.js best practices in mind.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
