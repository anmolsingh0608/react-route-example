import classes from "./Layout.module.css";
import NewsletterSignup from "../NewsletterSignup";
import { NavLink, useLoaderData } from "react-router-dom";

const MainNav = () => {
  const token = useLoaderData();
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? classes.active : "")}
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? classes.active : "")}
              to={"events"}
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/newsletter"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              Newsletter
            </NavLink>
          </li>
          <li>
            {!token ? (
              <NavLink
                to="auth?mode=login"
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                Authenticate
              </NavLink>
            ) : (
              <button>Logout</button>
            )}
          </li>
        </ul>
      </nav>
      <NewsletterSignup />
    </header>
  );
};

export default MainNav;
