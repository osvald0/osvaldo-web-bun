import "./emailLink.css";

const EmailLink = (props) => {
  const { email, label } = props;
  return (
    <a className="contact-text" href={`mailto:${email}`}>
      {label || email}
    </a>
  );
};

export default EmailLink;
