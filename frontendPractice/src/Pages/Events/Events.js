import { json, useLoaderData } from "react-router-dom";
import Api from "../../utils/Api";
import EventsList from "../../components/EventsList";

const Events = () => {
  const response = useLoaderData();
  const events = response.data.events;
  return <EventsList events={events} />;
};

export default Events;

export const eventsLoader = async () => {
  try {
    let response = await Api("/events");
    return response;
  } catch (e) {
    throw new json(
      {
        message: e.response.statusText,
      },
      {
        status: e.response.status,
      }
    );
  }
};
