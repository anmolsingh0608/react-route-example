import axios from "axios";
import EventsList from "../../components/EventsList";
import { Await, defer, json, useLoaderData } from "react-router-dom";
import { Suspense } from "react";

const Events = () => {
  const response = useLoaderData();
  const events = response.events;
  if (response.isError) {
    alert(response.message);
  }

  console.log(events);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Await resolve={events}>{(loadedEvents) => <EventsList events={loadedEvents} />}</Await>
    </Suspense>
  );
};

const load = async () => {
  try {
    let response = await axios.get("http://127.0.0.1:8080/events");
    return response.data.events;
  } catch (e) {
    // return {
    //   message: "Something went wrong",
    //   isError: true,
    //   data: { events: [] },
    // };
    // throw new Response(JSON.stringify({ message: "Something went wrong" }), {
    //   status: 500,
    // });
    throw json({ message: "Something went wrong" }, { status: 500 });
  }
};

export const loadEvents = () => {
  return defer({
    events: load(),
  });
};

export default Events;
