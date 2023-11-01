import { getToken } from "../utils/token";

const isAuth = () => {
  const data = getToken();
  if (data) {
    return true;
  }
  return false;
};

export default isAuth;
