import { Link } from "react-router-dom";

import Icon from "../Icon";

import "./iconButton.css";

const IconButton = (props) => {
  const { navigateTo, navigateParams, iconKey } = props;
  return (
    <Link className="button" to={navigateTo} state={navigateParams}>
      <Icon iconKey={iconKey} />
    </Link>
  );
};

export default IconButton;
