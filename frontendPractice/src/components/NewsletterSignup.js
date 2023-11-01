import { useFetcher } from "react-router-dom";
import classes from "./NewsletterSignup.module.css";

function NewsletterSignup() {
  const usefetcher = useFetcher();
  return (
    <div style={{ textAlign: "center" }}>
      <usefetcher.Form method="post" action="/newsletter" className={classes.newsletter}>
        <input
          type="email"
          name="email"
          placeholder="Sign up for newsletter..."
          aria-label="Sign up for newsletter"
        />
        <button>Sign up</button>
      </usefetcher.Form>
    </div>
  );
}

export default NewsletterSignup;
