import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  grid-area: footer;
  padding: 20px;
  margin-top: auto;
  border-top: 1px solid #f0f0f0;
`;

const Footer = () => {
  return <StyledFooter>Footer</StyledFooter>;
};

export default Footer;
