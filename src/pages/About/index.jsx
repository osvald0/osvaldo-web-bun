import { AiOutlineMail } from "react-icons/ai";
import EmailLink from "../../components/EmailLInk";

import "./about.css";

const About = () => {
  return (
    <div>
      <div className="title">About me</div>
      <div className="content">
        <p>
          Hi! My name is Osvaldo Colina. I'm a full-stack software engineear
          working on web and mobile projects.
        </p>
        <p>My tech stack mainly includes react, react-native and node.js.</p>
      </div>
      <div className="contact-container">
        <AiOutlineMail />
        <EmailLink email="osvaldo.colina@gmail.com" />
      </div>
    </div>
  );
};

export default About;
