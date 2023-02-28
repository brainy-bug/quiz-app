import { GrMail } from "react-icons/gr";
import { FormInput } from "./Form";
import { useFormContext } from "../hooks/useFormContext";

const EmailInput = () => {
  const { email, setEmail } = useFormContext();

  return (
    <FormInput
      text='email'
      value={email}
      setValue={setEmail}
      icon={<GrMail />}
      placeholderText='Email Address'
    />
  );
};

export default EmailInput;
