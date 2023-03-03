import React from "react";
import styled from "styled-components";

function FormHeading({ image, text }) {
  return (
    <>
      <Image src={image} alt={`${text}-svg`} />
      <Text>{text}</Text>
    </>
  );
}

const Image = styled.img`
  height: 160px;
  width: 210px;
  transform: rotate(-5deg);
  margin-bottom: 20px;
`;

const Text = styled.h2`
  font-family: "Roboto-Medium";
  font-size: 32px;
  margin-bottom: 28px;
  margin-top: 10px;
  font-weight: 600;
  color: #333;
  text-transform: capitalize;
`;

export default FormHeading;
