import { IoMdLock } from "react-icons/io";

import { FormInput } from "./Form";

import { useFormContext } from "../hooks/useFormContext";

 function PasswordInput() {
  const { password, setPassword } = useFormContext();

  return (
    <FormInput
      text='password'
      value={password}
      setValue={setPassword}
      icon={<IoMdLock />}
      placeholderText='password'
    />
  );
}

export default PasswordInput