import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../../components/EventForm";

const EditEvent = () => {
  const response = useRouteLoaderData("event");
  const event = response.data.event;
  return <EventForm event={event} method="PATCH" />;
};

export default EditEvent;
