import { Form, Link, useSearchParams } from "react-router-dom";
import classes from "./AuthForm.module.css";
// import throwError from "../components/Errors/throw";

function AuthForm() {
  const [searchParams] = useSearchParams("mode");
  const mode = searchParams.get("mode");
  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{mode === "login" ? "Log in" : "Create a new user"}</h1>
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <Link to={mode === "login" ? "?mode=register" : "?mode=login"}>
            {mode === "login" ? "Create new user" : "Login"}
          </Link>
          <button>Save</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
