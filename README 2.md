# Base React Next v2

## Prerequisites

- Node version >= `16.5`
- Yarn version >= `1.22.19`

## Preparation steps

You need to run the following step by step.

1. Generate a `.env` file

```bash
# for Unix-like OS
cp .env.example .env

# for Window OS
copy .env.example .env
```

2. Fill in the desired information in `.env` file

3. Install dependencies

```bash
yarn install
```

## Start the application in development mode

Note: you must complete the steps in the [Preparation steps](#preparation-steps) section first.

1. Run the application

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Start the application in production mode

You need to run the following step by step.

1. Build & export the application

```bash
yarn build
```

2. Install a temporary server to serve a static application

```bash
yarn global add serve
# or
npm install --global serve
```

3. Serve the application

```bash
serve -p 3000 out
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project structure

```sh
📁 .github
|
+-- 📁 workflows                    # contains GitHub Actions workflows (https://docs.github.com/en/actions/using-workflows)
|
📁 .husky                           # contains Husky configuration, use it to lint your commit messages, run tests, lint code, etc. when you commit (https://typicode.github.io/husky)
|
+-- 📄 commit-msg.sh
|
+-- 📄 common.sh
|
+-- 📄 pre-commit.sh
|
📁 .storybook                       # contains Storybook configuration, use it to configure storybook webpack, global story parameters, global story decorators, global styles, polyfill, etc. (https://storybook.js.org/)
|
+-- 📄 global.css
|
+-- 📄 main.js
|
+-- 📄 preview.js
|
📁 .vscode
|
+-- 📄 extensions.json              # contains VS Code workspace settings (https://code.visualstudio.com/docs/editor/workspaces#_singlefolder-workspace-settings)
|
+-- 📄 settings.json                # contains VS Code workspace recommended extension https://code.visualstudio.com/docs/editor/extension-marketplace#_workspace-recommended-extensions
|
📁 mocks                            # contains all mocks/ simulations used during development
|
📁 public                           # contains Next.js - static file serving (https://nextjs.org/docs/basic-features/static-file-serving)
|
📁 src
|
+-- 📁 components                   # contains shared components used across the entire application and specific page components used for specific features, inspired by "Atomic design pattern"
|   |
|   +-- 📁 atoms
|   |   |
|   |   +-- 📁 Button
|   |   |   |
|   |   |   +-- 📄 index.tsx
|   |   |   |
|   |   |   +-- 📄 Button.test.tsx
|   |   |   |
|   |   |   +-- 📄 Button.stories.tsx
|   |
|   +-- 📁 icons                    # contains all icons used across the entire application
|   |   |
|   |   +-- 📄 index.ts
|   |   |
|   |   +-- 📄 bars.svg
|   |   |
|   |   +-- 📄 lock.svg
|   |
|   +-- 📁 molecules
|   |   |
|   |   +-- 📁 Navigation
|   |   |   |
|   |   |   +-- 📄 index.tsx
|   |   |   |
|   |   |   +-- 📄 Navigation.test.tsx
|   |   |   |
|   |   |   +-- 📄 Navigation.stories.tsx
|   |
|   +-- 📁 organisms
|   |   |
|   |   +-- 📁 login
|   |   |   |
|   |   |   +-- 📄 LoginForm.tsx
|   |   |   |
|   |   |   +-- 📄 LoginForm.test.ts
|   |   |   |
|   |   |   +-- 📄 LoginForm.stories.ts
|   |   |   |
|   |   |   +-- 📄 LoginView.tsxx
|   |   |   |
|   |   |   +-- 📄 LoginView.test.tsx
|   |   |   |
|   |   |   +-- 📄 LoginView.stories.tsx
|   |   |
|   |   +-- 📁 products
|   |   |   |
|   |   |   +-- 📄 ProductCard.tsx
|   |   |   |
|   |   |   +-- 📄 ProductCard.test.tsx
|   |   |   |
|   |   |   +-- 📄 ProductCard.stories.tsx
|   |   |   |
|   |   |   +-- 📄 ProductsView.tsx
|   |   |   |
|   |   |   +-- 📄 ProductsView.test.tsx
|   |   |   |
|   |   |   +-- 📄 ProductsView.stories.tsx
|   |
|   +-- 📁 templates
|   |   |
|   |   +-- 📄 AuthenticatedLayout.tsx
|   |   |
|   |   +-- 📄 AuthenticatedLayout.test.ts
|   |   |
|   |   +-- 📄 AuthenticatedLayout.stories.ts
|
+-- 📁 constants                   # contains reuseable variables
|
+-- 📁 hooks                       # contains shared hooks used across the entire application and specific component hooks used for specific features
|   |
|   +-- 📁 login                   # contains specific component hooks used for specific features
|   |   |
|   |   +-- 📄 useLoginForm.ts
|   |   |
|   |   +-- 📄 useLoginForm.test.ts
|   |   |
|   |   +-- 📄 useLoginView.ts
|   |   |
|   |   +-- 📄 useLoginView.test.ts
|   |
|   +-- 📁 shared                   # contains shared hooks used across the entire application
|   |   |
|   |   +-- 📄 usePrevious.ts
|   |   |
|   |   +-- 📄 usePrevious.test.ts
|
+-- 📁 lib                          # contains configuration to extend third-party libraries
|   |
|   +-- 📁 ui                       # contains configuration to extend third-party UI library
|   |   |
|   |   +-- 📄 colors.ts
|   |   |
|   |   +-- 📄 components.ts
|   |   |
|   |   +-- 📄 fonts.ts
|   |   |
|   |   +-- 📄 theme.ts
|   |   |
|   |   +-- 📄 UIProvider.ts        # is the enhanced third-party UI library provider
|
+-- 📁 pages                        # contains Next.js - pages (https://nextjs.org/docs/basic-features/pages)
|   +-- 📄 _app.tsx                 # is Next.js - custom app (https://nextjs.org/docs/advanced-features/custom-app)
|   |
|   +-- 📄 _document.tsx            # is Next.js - custom document (https://nextjs.org/docs/advanced-features/custom-document)
|   |
|   +-- 📄 404.tsx                  # is a route entry point (page "/404")
|   |
|   +-- 📄 index.tsx                # is root - route entry point (page "/")
|   |
|   +-- 📄 login.tsx                # is route entry point (page "/login")
|
+-- 📁 stores                       # contains global state used across the entire application
|   |
|   +-- 📄 auth.ts
|
+-- 📁 types                       # contains shared TypeScript types
|   |
|   +-- 📄 products.ts
|
+-- 📁 types                       # contains utility functions used across the entire application
|   |
|   +-- 📄 isString.ts
|
+-- 📄 .browserslistrc             # is Browserslist configuration to share target browsers between different front-end tools (https://github.com/browserslist/browserslist#config-file)
|
+-- 📄 .commitlintrc.json          # is Commitlint configuration file (https://commitlint.js.org/)
|
+-- 📄 .editorconfig               # is Editor configuration file (https://editorconfig.org/)
|
+-- 📄 .env.example                # is a environment sample file, contains environment variables
|
+-- 📄 .eslintignore               # is Eslintignore configuration file (https://eslint.org/docs/latest/user-guide/configuring/ignoring-code#the-eslintignore-file)
|
+-- 📄 .eslintrc.js                # is Eslint configuration file (https://eslint.org/docs/latest/user-guide/configuring/)
|
+-- 📄 .gitignore                  # is Gitignore configuration file
|
+-- 📄 .lintstagedrc.json          # is Lint-staged configuration file (https://github.com/okonet/lint-staged/#configuration)
|
+-- 📄 .prettierignore             # is Prettierignore configuration file (https://prettier.io/docs/en/ignore.html)
|
+-- 📄 .prettierrc.json            # is Prettier configuration file (https://prettier.io/docs/en/configuration.html)
|
+-- 📄 .yarnrc                     # to configure additional Yarn features (https://classic.yarnpkg.com/lang/en/docs/yarnrc/)
|
+-- 📄 jest.config.js              # is Jest configuration file for Unit and Integration testing (https://jestjs.io/docs/configuration)
|
+-- 📄 next.config.js              # is Next.js configuration file (https://nextjs.org/docs/api-reference/next.config.js/introduction)
|
+-- 📄 package.json                # manifest for the project
|
+-- 📄 svgo.config.js              # is SVGO configuration file (https://github.com/svg/svgo)
|
+-- 📄 tsconfig.eslint.json        # is TypeScript configuration file for ESLint
|
+-- 📄 tsconfig.json               # is Root TypeScript configuration file
|
+-- 📄 yarn.lock                   # store exactly which versions of each dependency were installed
```

## List of techniques (dependencies) used in this project

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

- Core - [Next.js](https://nextjs.org/)

  - next
  - react
  - react-dom

- UI - [MUI](https://mui.com/)

  - @mui/material (core)
  - @emotion/react (related)
  - @emotion/styled (related)
  - @mui/x-date-pickers (related)

- Form management and validation - [React Hook Form](https://react-hook-form.com/)

  - react-hook-form (core)
  - @hookform/resolvers (related)
  - zod (related, use it to create the schema validation)

- React Hooks for Data Fetching - [SWR](https://swr.vercel.app/)

  - swr

- Global state management - [Zustand](https://github.com/pmndrs/zustand)

  - zustand
  - immer (related)

- Date and time handling - [Day.js](https://day.js.org/)

  - dayjs

- Other

  - [nprogress](https://www.npmjs.com/package/nprogress)

## Conventional Commits

https://www.conventionalcommits.org/en/v1.0.0/
