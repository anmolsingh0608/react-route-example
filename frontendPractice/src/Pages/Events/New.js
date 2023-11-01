import { redirect } from "react-router-dom";
import EventForm from "../../components/EventForm";
import Api from "../../utils/Api";
import throwEror from "../../components/Errors/throw";

const New = () => {
  return <EventForm method={"POST"} />;
};

export const eventAction = async ({ request, params }) => {
  const formData = await request.formData();
  const data = {
    title: formData.get("title"),
    image: formData.get("image"),
    date: formData.get("date"),
    description: formData.get("description"),
  };

  const method = request.method;
  let url = "/events";
  if (method === "PATCH") {
    url = "/events/" + params.id;
  }

  try {
    await Api(url, data, method);
    return redirect("/events");
  } catch (e) {
    throw throwEror(e);
  }
};

export default New;
