import React from "react";

// import icons
import { IoMdLock } from "react-icons/io";
import { GrMail } from "react-icons/gr";

const EmailPasswordInput = ({ email, password, handleChange }) => {
// const {isPasswordFieldEmpty}=useForm()
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
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          placeholder='password'
          required={true}
        />
        {/* {} */}
      </div>
    </>
  );
};

export default React.memo(EmailPasswordInput);
