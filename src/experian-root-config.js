import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: (location) => location.pathname === "/",
// });

registerApplication({
  name: "@experian/exp-navbar-mf",
  app: () => System.import("@experian/exp-navbar-mf"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@experian/exp-footer-mf",
  app: () =>
    System.import("@experian/exp-footer-mf"),
    activeWhen: ["/footer"],
});

registerApplication({
  name: "@experian/exp-shell-mf",
  app: () =>
    System.import("@experian/exp-shell-mf"),
    activeWhen: ["/catalog"], 
});


// registerApplication({
//   name: "@experian/exp-checkout-mf",
//   app: () =>
//     System.import("@experian/exp-checkout-mf"),
//     activeWhen: ["/checkout"],
// });

registerApplication({
  name: "@experian/exp-cart-mf",
  app: () =>
    System.import("@experian/exp-cart-mf"),
    activeWhen: ["/cart"],
});

registerApplication({
  name: "@experian/exp-catalog-mf",
  app: () =>
    System.import("@experian/exp-catalog-mf"),
    activeWhen: ["/catalog"],
});

start({
  urlRerouteOnly: true,
});
