import React from "react";
import styled from "styled-components";
import variables from "../styles/variables";
import mixins from "../styles/mixins";

const StyledFooter = styled.footer`
  ${mixins.resetFont};

  padding: 20px;
  margin-top: auto;
  border-top: 1px solid #f0f0f0;
  background-color: ${variables.gray800};
  color: ${variables.white};
`;

const Footer = () => {
  return <StyledFooter>Footer</StyledFooter>;
};

export default Footer;
