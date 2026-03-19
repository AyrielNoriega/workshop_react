import { createBrowserRouter } from "react-router";

import { AdminPage } from "@/admin/AdminPage";
import { HeroPage } from "@/heroes/pages/hero/HeroPage";
import { HomePage } from "@/heroes/pages/home/HomePage";
import { SearchPage } from "@/heroes/search/SearchPage";


export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/hero/:id',
    element: <HeroPage />,
  },
  {
    path: '/admin',
    element: <AdminPage />,
  },
  {
    path: '/search',
    element: <SearchPage />,
  },
]);
