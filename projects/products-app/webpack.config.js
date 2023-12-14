const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

const { EnvironmentPlugin } = require("webpack");

module.exports = {
  ...withModuleFederationPlugin({
    name: "products",
    // Aqui estou expondo para outros modulos o meu componente products
    exposes: {
      "./Module": "./projects/products-app/src/app/products/products.module.ts",
    },
    shared: {
      ...shareAll({
        singleton: true,
        strictVersion: true,
        requiredVersion: "auto",
      }),
    },
  }),
  plugins: [
    new EnvironmentPlugin({
      BASE_URL: "https://fakestoreapi.com/products",
    }),
  ],
  devServer: {
    webSocketServer: false,
  },
};
