import { NavLink, Outlet, useNavigation } from "react-router-dom";
import classes from "./Layout.module.css";
import NewsletterSignup from "../NewsletterSignup";

const Layout = () => {
  const navigation = useNavigation();

  return (
    <>
      <header className={classes.header}>
        <nav>
          <ul className={classes.list}>
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end={true} // Use end={true} to match the exact URL
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"events"}
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Events
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/newsletter"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Newsletter
              </NavLink>
            </li>
          </ul>
        </nav>
        <NewsletterSignup />
      </header>
      <main>
        {navigation.state === "loading" && <p>Loading...</p>}
        {navigation.state === "submitting" && <p>submitting</p>}
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
