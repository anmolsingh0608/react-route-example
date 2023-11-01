// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Events, { loadEvents } from "./Pages/Events/Events";
import EventDetail, {
  deleteEvent,
  loadEvent,
} from "./Pages/Events/EventDetail";
import NewEvent, { action } from "./Pages/Events/NewEvent";
import EditEvent from "./Pages/Events/EditEvent";
import Layout from "./components/Layout/Layout";
import EventsNavigation from "./components/EventsNavigation";
import NotFound from "./components/Errors/NotFound";
import Error from "./components/Errors/Error";
import NewsletterPage, { action as NlAction } from "./Pages/Newsletter";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "events",
          element: <EventsNavigation />,
          errorElement: <Error />,
          children: [
            {
              index: true,
              loader: loadEvents,
              element: <Events />,
            },
            {
              path: "new",
              action: action,
              element: <NewEvent />,
            },
            {
              path: ":id",
              loader: loadEvent,
              id: "event",
              children: [
                {
                  index: true,
                  action: deleteEvent,
                  element: <EventDetail />,
                },
                {
                  path: "edit",
                  action: action,
                  element: <EditEvent />,
                },
              ],
            },
          ],
        },
        {
          path: "/newsletter",
          element: <NewsletterPage />,
          action: NlAction,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
