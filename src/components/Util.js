import React from 'react';
import styled from 'styled-components';
import variables from '../styles/variables';

const StyledUril = styled.div`
  display: flex;
  align-items: center;
  grid-area: util;
  margin-left: auto;
`;

const StyledButton = styled.button`
  display: flex;
  padding: 5px;
  background-color: ${variables.color};

  & + & {
    margin-left: 4px;
  }
`;

const Util = () => {
  return (
    <>
      <StyledUril>
        <StyledButton>Icon</StyledButton>
        <StyledButton>Icon</StyledButton>
        <StyledButton>Icon</StyledButton>
      </StyledUril>
    </>
  )
}

export default Util;