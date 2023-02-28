import { useNavigate } from "react";

// import icons
import { IoMdPerson } from "react-icons/io";

//import components
import PasswordInput from "../PasswordInput";
import EmailInput from "../EmailInput";
import { FormButton, FormContainer, FormFooter,FormInput, FormHeading } from "../Form";

// svg
import SignupSVG from "../../assets/misc/registration.svg";

// context
import { useFormContext } from "../../hooks/useFormContext";

const RegisterContainer = () => {
  const { email, password, handleSignup, name, setName } = useFormContext();

  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignup(email, password);
    // if (user) navigate("./dashboard");
  };

  return (
    <FormContainer>
      <FormHeading SignupSVG={SignupSVG} />
      <form>
        <FormInput
          text='text'
          value={name}
          setValue={setName}
          icon={<IoMdPerson />}
          placeholderText='Username'
        />
        <EmailInput />
        <PasswordInput />
        <FormButton handleSubmit={handleSubmit}>Get Started</FormButton>
      </form>
      <FormFooter text='Have an account?' route='/login' linkText='Log in' />
    </FormContainer>
  );
};

export default RegisterContainer;
