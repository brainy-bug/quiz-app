import styled from "styled-components";

function FormInput({ value, setValue, text, placeholderText, icon }) {
  return (
    <InputContainer>
      <Icon htmlFor={text}>{icon}</Icon>
      <Input
        type={text}
        id={text}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholderText}
        required
      />
    </InputContainer>
  );
}

const InputContainer = styled.div`
  display: flex;
`;

const Icon = styled.label`
  margin-right: 0.75rem;
  font-size: 1.3rem;
`;

const Input = styled.input`
  color: #ad40af;
  flex: 1;
  border: none;
  border-bottom: 1px solid #adacac;
  padding-bottom: 8px;
  margin-bottom: 25px;
  outline: none;
  font-size: 0.8rem;

  &::placeholder {
    color: #adacac;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
  }
`;

export default FormInput;
