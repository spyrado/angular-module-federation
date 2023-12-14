const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "orders",
  // Aqui estou expondo para outros modulos o meu componente orders
  exposes: {
    "./Module": "./projects/orders-app/src/app/orders/orders.module.ts",
  },
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
