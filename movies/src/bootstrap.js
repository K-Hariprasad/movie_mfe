import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  createMemoryRouter,
} from "react-router-dom";
import routes from "./routes";

const mount = (el, { onNavigate, initialPath, defaultRouter }) => {
  const root = createRoot(el);
  const router =
    defaultRouter ||
    createMemoryRouter(routes, { initialEntries: [initialPath] });

  if (onNavigate) {
    router.subscribe(({ location }) => onNavigate(location));
  }

  root.render(<App router={router} />);

  return {
    onParentnavigate: ({ pathname: nextPathname }) => {
      if (router.state.location.pathname !== nextPathname) {
        router.navigate(nextPathname);
      }
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("movie_root");
  if (el) {
    mount(el, { defaultRouter: createBrowserRouter(routes) });
  }
}

export { mount };
