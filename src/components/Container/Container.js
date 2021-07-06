import React from 'react';
import styled from 'styled-components';
import Header from 'components/Header/Header';
import ListInput from 'components/List/ListInput';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    max-width: 560px;
    margin-left: auto;
    margin-right: auto;
    padding-right: 15px;
    padding-left: 15px;
`;

function Container() {
  return (
    <StyledContainer>
      <Header />
      <ListInput />
  
    </StyledContainer>
  );
}

export default Container;
