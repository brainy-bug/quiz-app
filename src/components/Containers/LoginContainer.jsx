// import components
import { GrMail } from "react-icons/gr";
import { IoMdLock } from "react-icons/io";

import {
  FormButton,
  FormContainer,
  FormFooter,
  FormInput,
  FormHeading,
} from "../Form";

import { useAuth } from "../../hooks/useAuth";

// svg
import LoginSVG from "../../assets/misc/login.svg";

const LoginContainer = () => {
  const { handleLogin, email, password, setPassword, setEmail } = useAuth();
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
        <FormInput
          text='email'
          value={email}
          setValue={setEmail}
          icon={<GrMail />}
          placeholderText='Email Address'
        />
        <FormInput
          text='password'
          value={password}
          setValue={setPassword}
          icon={<IoMdLock />}
          placeholderText='password'
        />
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
