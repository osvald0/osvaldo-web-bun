import { useLocation } from "react-router-dom";

const Linkedin = () => {
  let { state } = useLocation();
  window.location.replace(state?.target);
  return null;
};

export default Linkedin;
