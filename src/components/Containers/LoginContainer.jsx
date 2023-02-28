// import components
import PasswordInput from "../PasswordInput";
import EmailInput from "../EmailInput";
import { FormButton, FormContainer, FormFooter, FormHeading } from "../Form";

import { useAuth } from "../../hooks/useAuth";

// svg
import LoginSVG from "../../assets/misc/login.svg";

const LoginContainer = () => {
  const { handleLogin, email, password } = useAuth();
  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    // if (user) navigate("./dashboard");
  };

  return (
    <FormContainer>
      <FormHeading LoginSVG={LoginSVG} />
      <form>
        <EmailInput />
        <PasswordInput />
        <FormButton handleSubmit={handleSubmit}>continue</FormButton>
      </form>
      <FormFooter
        text='New to the app?'
        route='/register'
        linkText='Register'
      />
    </FormContainer>
  );
};

export default LoginContainer;
