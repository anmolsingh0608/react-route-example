import Api from "../../utils/Api";
import throwEror from "../../components/Errors/throw";
import { useRouteLoaderData } from "react-router-dom";
import EventItem from "../../components/EventItem";

const Detail = () => {
  const response = useRouteLoaderData("eventLoader");
  const event = response.data.event;
  return <EventItem event={event} />;
};

export const eventLoader = async ({ params }) => {
  try {
    const { id } = params;
    let response = await Api("/events/" + id);
    return response;
  } catch (e) {
    throw throwEror(e);
  }
};

export default Detail;
