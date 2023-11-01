import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./components/Layout/Layout";
import Events, { eventsLoader } from "./Pages/Events/Events";
import EventsNavigation from "./components/EventsNavigation";
import New, { eventAction } from "./Pages/Events/New";
import Edit from "./Pages/Events/Edit";
import Detail, { eventLoader } from "./Pages/Events/Detail";
import NotFound from "./components/Errors/NotFound";
import Error from "./components/Errors/Error";
import { deleteEvent } from "./components/EventItem";
import NewsletterPage, { NLAction } from "./Pages/NewsLetter";
// import { loginAction } from "./Pages/Auth/Auth";
import { routeGuard, tokenLoader } from "./utils/token";
import isAuth from "./hooks/isAuth";
import { Suspense, lazy } from "react";

const Auth = lazy(() => import("./Pages/Auth/Auth"));

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      loader: tokenLoader,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "events",
          errorElement: <Error />,
          loader: routeGuard,
          id: "main",
          element: <EventsNavigation />,
          children: [
            {
              index: true,
              loader: eventsLoader,
              element: <Events />,
              shouldRevalidate: isAuth(),
            },
            {
              path: "new",
              action: eventAction,
              element: <New />,
            },
            {
              path: ":id",
              loader: eventLoader,
              id: "eventLoader",
              children: [
                {
                  index: true,
                  action: deleteEvent,
                  element: <Detail />,
                },
                {
                  path: "edit",
                  action: eventAction,
                  element: <Edit />,
                },
              ],
            },
          ],
        },
        {
          path: "newsletter",
          action: NLAction,
          element: <NewsletterPage />,
        },
        {
          path: "auth",
          // action: loginAction,
          element: <Suspense fallback={<p>hi</p>}><Auth /></Suspense>,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
