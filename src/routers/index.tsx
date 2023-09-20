import { RouteObject, useRoutes } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import { HOME, CONTACT } from "../data/routers";
import Contact from "../pages/contact";
import About from "../pages/education";

export default function AppRouter() {
  const routes: RouteObject[] = [
    {
      path: HOME,
      element: <MainLayout />,
      children: [
        {
          path: HOME,
          element: <About />,
        },
        {
          path: CONTACT,
          element: <Contact />,
        },
      ],
    },
  ];

  return useRoutes(routes);
}
