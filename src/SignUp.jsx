import { useState } from "react";
import FormInput from "./components/Form-input/Form-input.components";

//The default value for the form
const FormValues = {
  email: "",
};
const SignUp = () => {
  const [formState, setFormState] = useState(FormValues);

  const onFormchangeHandler = (e) => {
    e.preventDefault();
    const { name } = e.target;
    let value = e.target.value;
    setFormState({ [name]: value });
  };

  return (
    <>
      <div className="SignUp-container">
        <div className="SignUp-Campaign">
          <h3>Want To Get 10% Off Your Next Order?*</h3>
          <p>Sign up for the latest JD Sports news, products and offers</p>
          <form
            onSubmit={() => {
              console.log(FormValues);
            }}
            className="SignUp-Components"
          >
            <FormInput
              signupinput={"SignUp-input"}
              placeholder={"Enter Email Address"}
              classType={"arrow"}
              type="email"
              name="email"
              onChange={onFormchangeHandler}
            />
          </form>
          <p>
            We'll use your information in accordance with our{" "}
            <strong>Privacy Notice </strong>
          </p>
          <p>*Terms & Conditions Apply</p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
