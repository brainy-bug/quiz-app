import React from "react";

// import icons
import { IoMdLock } from "react-icons/io";
import { GrMail } from "react-icons/gr";

import { useForm } from "../hooks/useForm";

const EmailAndPasswordFields = ({
  email,
  showPassword,
  password,
  handleChange,
  toggleShowPassword,
}) => {
  // const { toggleShowPassword } = useForm();

  return (
    <>
      <div className='input-container'>
        <label htmlFor='email'>{<GrMail />}</label>
        <input
          className='form-input'
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          placeholder='email address'
          required={true}
        />
      </div>

      <div className='input-container'>
        <label htmlFor='password'>{<IoMdLock />}</label>
        <input
          className='form-input'
          type={showPassword ? "text" : "password"}
          name='password'
          value={password}
          onChange={handleChange}
          placeholder='password'
          required={true}
        />
        <button onClick={toggleShowPassword} className='show-btn' type='button'>
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
    </>
  );
};

export default React.memo(EmailAndPasswordFields);
