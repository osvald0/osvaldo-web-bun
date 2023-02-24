import { useLocation } from "react-router-dom";

const Github = () => {
  let { state } = useLocation();
  window.location.replace(state?.target);
  return null;
};

export default Github;
