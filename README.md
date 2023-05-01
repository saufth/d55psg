# D55PSG official website

D55PSG official website built in [NextJS](https://nextjs.org/) and [Typescript](https://www.typescriptlang.org/) with [Zustand](https://zustand-demo.pmnd.rs/) for global state, [TailwindCSS](https://tailwindcss.com/) for styling and [Framer Motion](https://www.framer.com/motion/) for animations.

## Technologies

- [Node.js](https://nodejs.org/) v18.13.0
- [NextJS](https://nextjs.org/) v13.2.4
- [React.js](https://reactjs.org/) v18.2.0
- [Typescript](https://www.typescriptlang.org/) v4.9.4
- [TailwindCSS](https://tailwindcss.com/) v3.2.7
- [Framer Motion](https://www.framer.com/motion/) v10.8.5
- [Zustand](https://zustand-demo.pmnd.rs/) v4.3.6
- [StandardJS](https://standardjs.com/) v17.0.0

## ESLint

Using NextJS ESLint with [StandardJS](https://standardjs.com/), is necessary the following configuration for eslintrc file to ensure ESLint works propertly with React components:

```
"extends": [
  "next/core-web-vitals",
  "./node_modules/standard/eslintrc.json"
]
```

## Folder Structure

I'm using the <ins>src</ins> folder for keep code at a different level than configurations and miscellaneous files.

This is the structure I use for my NextJS projects:

<img src="/public/images/structure/onion-shape.jpg" alt="Onion-shape structure" />

We can express the above image with the following structure:

```
- src
  - components/app    (app)
  - core              (core)
  - components        (domain)
  - modules           (domain)
  - pages             (pages)
```

### App

Contains components that is being used by the special <code>pages/_app.tsx</code> NextJS file, like:

- Layouts
- The store of the global state
- Scripts
- And more...

We could develop our folder structure in this way:

```
- src
  - components/app
    - AppLayout.tsx
    - AppProvider.tsx
    - GoogleSeacrchScript.tsx
    - ...
```

I prefer keep the components on a single folder, using the vertical slice philosofy, the <ins>app</ins> components can contain and export configuration data. Some configuration data are in the <code>modules/app</code> folder, this folder is part of the <ins>domain</ins> layer and its used for <ins>domain</ins> and <ins>pages</ins> layers.

### Core

This layer is used to place all unrelated to our <ins>domain</ins>

The <ins>core</ins> and the <ins>domain</ins> of a project, in my view, should be kept well separate.

Hard rule: **the <ins>core</ins> layer can never import anything from the <ins>domain</ins> layer**.

If something within the <ins>core</ins> layer needs something from the <ins>domain</ins>, it probably does not belong to the <ins>core</ins> layer.

For example:

- The database connector
- The utils for authentification
- The email provider
- And more...

The <ins>core</ins> layer provides the <ins>domain</ins> with the necessary tools for the application to work, for example, authenticating, querying the DB, or sending emails. But does not know how the consumer uses these tools.

We could develop our folder structure in this way:

```
- src
  - core
    - database.ts
    - auth.ts
    - mailing.ts
    - ...
```

### Domain

The business domain is the area of control or a sphere of knowledge, such as, the group of entities, relationships, and behaviors of the business model, implemented as code.

We can express the <ins>domain</ins> layer with the following structure:

```
- src
  - components
  - modules
```
#### Modules

What should add to this folder anything about the <ins>domain</ins> that isn't a component, like:

- Custom hooks
- Configurations
- Contexts
- Queries
- And all utilities related to the domain

These utilities are typically used within components.

We could develop our folder structure in this way:

```
- src
  - modules
    - search
      - hooks
      - config
      - queries
      - ...
    - navigation
      - hooks
      - config
      - ...
```

#### Components

The components that make up our pages. Furthermore, these components are highly tied to the <ins>domain</ins>.

They're business-logic rich, and we can build them using the reusable UI components from <ins>core</ins>.

The business-logic side of things, such as queries, or functions that mutate data, are all imported from modules so that they can be reusable across components.

We could develop our folder structure in this way:

```
- src
  - components
    - input
      - core
        - Button.tsx
      - CallToAction.tsx
    - navigation
      - core
        - Link.tsx
      - Menu.tsx
```

The components folder can contain a core folder for each module, this contain small and reutilizable components used for create complex componentes out of core folders and pages, such like atomic design pattern: atoms (components/core) -> molecules (components) -> organism (pages).

### Pages

NextJS's router is file-system based, the folder <ins>pages</ins> is a Next-specific directory to place our API.

We could develop our folder structure in this way:

```
- src
  - pages
    - api
      - Search
        - [keyword].ts
    - _app.tsx
    - index.tsx
    - product
      - [id].tsx
```

### Imports between Layers

Something important to clarify is the rules I have around importing between layers.

Typically, an inner layer cannot import from an outer layer, that means that **<ins>core</ins> cannot import from the <ins>domain</ins> layer, and the latter cannot import from <ins>pages</ins>**.

**Wrong**

<img src="/public/images/structure/onion-shape-flow-wrong.jpg" alt="Onion-shape structure flow wrong" />

**Ok**

<img src="/public/images/structure/onion-shape-flow-ok.jpg" alt="Onion-shape structure flow ok" />

This rule can ensure your <ins>core</ins> is decoupled from the <ins>domain</ins> to avoid cyclical dependencies and keep your architecture untangled.

#### Linting import paths

We can ensure that we're using the rules above correctly when importing files in our application.

EsLint can help us by adding the following configuration, can automatically warn you that you're importing from the wrong paths:

```
"rules": {
  "import/no-restricted-paths": [
    "error",
    {
      "zones": [
        {
          "target": "./src/core",
          "from": "./src/components"
        },
        {
          "target": "./src/core",
          "from": "./src/modules"
        },
        {
          "target": "./src/core",
          "from": "./src/pages"
        },
        {
          "target": "./src/components",
          "from": "./src/pages"
        },
        {
          "target": "./src/modules",
          "from": "./src/components"
        },
        {
          "target": "./src/modules",
          "from": "./src/pages"
        },
        {
          "target": "./src/core",
          "from": "./src/components/app"
        },
        {
          "target": "./src/components",
          "from": "./src/components/app"
        },
        {
          "target": "./src/modules",
          "from": "./src/components/app"
        }
      ]
    }
  ]
}
```

If you need to use a components on <code>component/app</code> that are in the same folder, add the following comment above the import statement:

```
// eslint-disable-next-line import/no-restricted-paths
import GoogleSearchScript from './GoogleSearchScript'

export default AppLayout () {
  return (
    <Head>
      <GoogleSearchScript />
    </Head>
  )
}
```

## Getting started

I recommend use [pnpm](https://pnpm.io/) because it hold all the packages at a global (centralized) store and use them if needed by other projects too by creating hard links to it.

1. Clone the project

```
$ git clone https://github.com/saufth/d55psg.git/
```

2. Install the dependencies:

```
$ pnpm install (recommended)
# or
$ yarn
# or
$ npm install
```

3. Run the development server

```
pnpm dev (recommended)
# or
yarn dev
# or
npm run dev
```

Open [http://localhost:3000/](http://localhost:3000/) with your browser to see the result.

## Credits

* [Saufth](http://github.com/saufth/)
