import React from "react";
import styled from "styled-components";

const HeadTitle = styled.h2`
  font-size: 24px;
  margin: 30px 0;
  font-family: 'Roboto', sans-serif;
`;

const TitleComponent = ({ children }) => {
  return <HeadTitle>{children}</HeadTitle>;
};

export default TitleComponent;
