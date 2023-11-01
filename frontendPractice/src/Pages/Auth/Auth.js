import { redirect } from "react-router-dom";
import AuthForm from "../../components/AuthForm";

const Auth = () => {
  return <AuthForm />;
};

export default Auth;

export const loginAction = async () => {
  localStorage.setItem("token", "12356789");
  return redirect("/");
};
