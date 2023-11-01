import { Link, redirect, useSubmit } from "react-router-dom";
import classes from "./EventItem.module.css";
import Api from "../utils/Api";
import throwEror from "./Errors/throw";

function EventItem({ event }) {
  const submit = useSubmit();
  function startDeleteHandler() {
    const confirm = window.confirm("Are you sure?");
    if (confirm) {
      submit(null, {
        method: "DELETE",
      });
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;

export const deleteEvent = async ({ request, params }) => {
  const method = request.method;
  const id = params.id;

  try {
    await Api(`/events/${id}`, [], method);
    return redirect("/events");
  } catch (e) {
    throw throwEror(e);
  }
};
