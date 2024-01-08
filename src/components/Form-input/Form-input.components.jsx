const testStyle = {
  arrow: "SignUp-input-button-arrow",
  search: "SignUp-input-button-search",
  GO: "SignUp-input-button-Go",
};

const FormInput = ({
  signupinput,
  placeholder,
  classType,
  ...otherEntries
}) => {
  return (
    <div className="SignUp-Components">
      <input
        className={signupinput}
        placeholder={placeholder}
        {...otherEntries}
      />
      <span className={`${testStyle[classType]} SignUp-input-button`}></span>
    </div>
  );
};

export default FormInput;
