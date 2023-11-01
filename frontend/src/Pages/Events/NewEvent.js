import axios from "axios";
import EventForm from "../../components/EventForm";
import { json, redirect } from "react-router-dom";

const NewEvent = () => {
  return <EventForm method="POST" />;
};

export default NewEvent;

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = {
    title: formData.get("title"),
    image: formData.get("image"),
    date: formData.get("date"),
    description: formData.get("description"),
  };
  let url = "http://127.0.0.1:8080/events";
  if (request.method === "PATCH") {
    console.log(params);
    url = "http://127.0.0.1:8080/events/" + params.id;
  }
  try {
    await axios({
      method: request.method,
      url: url,
      data,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return redirect("/events");
  } catch (e) {
    throw json(
      { message: "Something went wrong" },
      { status: e.response.status }
    );
  }
};
