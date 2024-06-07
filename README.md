# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

  ```js
  export default {
    // other rules...
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: ['./tsconfig.json', './tsconfig.node.json'],
      tsconfigRootDir: __dirname,
    },
  }

 ## Project Start
 
    cd search-app

    npm install
    npm run dev 


## DB Json Server Start

` npx json-server mock-data.json`

## Using Environment Variables with Vite
Create a .env file in the root of your project with variables prefixed by VITE_:


  ```js
    VITE_DATA_URL=http://localhost:3000/data
    VITE_COLS_URL=http://localhost:3000/cols


