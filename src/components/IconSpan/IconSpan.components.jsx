import "./IconSpan.css";

const IconSpan = ({ className, ...otherProp }) => {
  return (
    <span className={`${className} IconSpan-button`} {...otherProp}></span>
  );
};

export default IconSpan;
