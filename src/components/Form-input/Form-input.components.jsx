const testStyle = {
  arrow: "SignUp-input-button-arrow",
  search: "SignUp-input-button-search",
  GO: "SignUp-input-button-Go",
  signUpLarge: "SignUp-Components",
  signUpSmall: "SignUp-Components-small",
};

const FormInput = ({
  signupinput,
  placeholder,
  classType,
  containerClassType,
  ...otherEntries
}) => {
  return (
    <div className={`${testStyle[containerClassType]}`}>
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
