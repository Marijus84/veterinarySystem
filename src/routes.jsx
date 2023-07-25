import { createBrowserRouter } from "react-router-dom";
import PageTemplate from "./layouts/page-template/PageTemplate";
import PetListPage from "./pages/pet-list-page/PetListPage";
import HealtLogsPage from "./pages/healt-logs-page/HealthLogsPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <PageTemplate />,
    children: [
      {
        path: "/",
        element: <PetListPage />,
      },
      {
        path: "/healtLogs/:id",
        element: <HealtLogsPage />,
      },
    ],
  },
]);
