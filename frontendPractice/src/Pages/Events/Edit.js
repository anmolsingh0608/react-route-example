import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../../components/EventForm";

const Edit = () => {
  const response = useRouteLoaderData("eventLoader");
  const event = response.data.event;
  return <EventForm event={event} method={"PATCH"} />;
};

export default Edit;
