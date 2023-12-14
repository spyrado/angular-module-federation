const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "carts",
  // Aqui estou expondo para outros modulos o meu componente carts
  exposes: {
    "./Module": "./projects/carts-app/src/app/carts/carts.module.ts",
  },
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
