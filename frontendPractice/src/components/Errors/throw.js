import { json } from "react-router-dom";

const throwEror = (e) => {
  return new json(
    {
      message: e.response.statusText,
    },
    {
      status: e.response.status,
    }
  );
};

export default throwEror;
