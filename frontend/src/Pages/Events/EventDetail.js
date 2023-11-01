import { json, redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../../components/EventItem";
import axios from "axios";

const EventDetail = () => {
  const response = useRouteLoaderData("event");
  const event = response.data.event;
  return <>{event ? <EventItem event={event} /> : ""}</>;
};

export default EventDetail;

export const loadEvent = async ({ params }) => {
  try {
    let response = await axios.get(`http://127.0.0.1:8080/events/${params.id}`);
    return response;
  } catch (e) {
    console.log(e);
    throw json(
      {
        message: "Something went wrong",
      },
      {
        status: e.response.status,
      }
    );
  }
};

export const deleteEvent = async ({ request, params }) => {
  try {
    await axios(`http://127.0.0.1:8080/events/${params.id}`, {
      method: request.method,
    });
    return redirect("/events");
  } catch (e) {
    throw json(
      {
        message: "Something went wrong",
      },
      {
        status: e.response.status,
      }
    );
  }
};
