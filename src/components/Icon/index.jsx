import { MdOutlineLaptopChromebook } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";
import { BsGithub } from "react-icons/bs";

const IconsMap = {
  github: BsGithub,
  about: SiAboutdotme,
  linkedIn: FaLinkedinIn,
  blog: MdOutlineLaptopChromebook,
};

const Icon = (props) => {
  const { iconKey } = props;
  const showIcon = IconsMap[iconKey];
  return showIcon();
};

export default Icon;
