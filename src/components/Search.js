import React from 'react';
import styled from 'styled-components';
import variables from '../styles/variables';

const StyledForm = styled.form`
  display: flex;
  margin-left: 40px;
  background-color: ${variables.white};
`;

const Search = () => {
  return (
    <>
      <StyledForm>Form 영역</StyledForm>
    </>
  )
}

export default Search;