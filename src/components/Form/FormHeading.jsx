import styled from "styled-components";

function FormHeading({ LoginSVG, SignupSVG }) {
  return (
    <>
      <Image src={LoginSVG ? LoginSVG : SignupSVG} alt='login-svg' />
      <Text>
        {SignupSVG ? "Create Your Account" : "Sign in to Your Account"}
      </Text>
    </>
  );
}

const Image = styled.img`
  height: 280px;
  width: 280px;
  transform: rotate(-5deg);
`;

const Text = styled.h2`
  font-family: "Roboto-Medium";
  font-size: 28px;
  font-weight: 600;
  color: #333;
  margin-top: 1rem;
  margin-bottom: 30px;
  align-self: flex-start;
`;

export default FormHeading;
