import { redirect } from "react-router-dom";

export const getToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return token;
  }
  return null;
};

export const tokenLoader = () => {
  console.log("loader");
  return getToken();
};

export const routeGuard = () => {
  const token = getToken();
  if (!token) {
    return redirect("/auth?mode=login");
  }
  return null;
};
