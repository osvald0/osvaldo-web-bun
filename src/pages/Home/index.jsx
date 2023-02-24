import IconButton from "../../components/IconButton";

import "./home.css";

const Home = () => {
  return (
    <div className="buttons-container">
      <IconButton iconKey="about" navigateTo="/about" />
      <IconButton
        iconKey="linkedIn"
        navigateTo="/linkedin"
        navigateParams={{ target: "https://www.linkedin.com/in/osvald0/" }}
      />
      <IconButton
        iconKey="github"
        navigateTo="/github"
        navigateParams={{ target: "https://github.com/osvald0" }}
      />
      <IconButton iconKey="blog" navigateTo="/blog" />
    </div>
  );
};

export default Home;
