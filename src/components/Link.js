import React from 'react';
import styled from 'styled-components';
import variables from '../styles/variables';

const StyledLink = styled.div`
  display: flex;
  margin-left: auto;
  background-color: ${variables.white};
`;

const Link = () => {
  return (
    <>
      <StyledLink>Link 영역</StyledLink>
    </>
  )
}

export default Link;