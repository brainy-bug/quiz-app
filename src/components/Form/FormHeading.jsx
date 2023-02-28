import styled from "styled-components";

function FormHeading({ LoginSVG, SignupSVG }) {
  return (
    <>
      <Image src={LoginSVG ? LoginSVG : SignupSVG} alt='login-svg' />
      <Text id='loginHeading'>
        {SignupSVG ? "Create Your Account" : "Sign in to Your Account"}
      </Text>
    </>
  );
}

const Image = styled.img`
  height: 210px;
  width: 210px;
  transform: rotate(-5deg);

`;

const Text = styled.h2`
  font-family: "Roboto-Medium";
  font-size: 28px;
  font-weight: 600;
  color: #333;
  margin-top: 1.5rem;
  margin-bottom: 30px;
  align-self: flex-start;
`;

export default FormHeading;
