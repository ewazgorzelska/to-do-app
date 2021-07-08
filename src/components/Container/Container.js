import React from 'react';
import styled from 'styled-components';
import Header from 'components/Header/Header';
import List from 'components/List/List';


const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    max-width: 560px;
    margin-left: auto;
    margin-right: auto;
    padding-right: 15px;
    padding-left: 15px;
    background-color: lightgrey;
`;

function Container() {
  return (
    <StyledContainer>
      <Header />
      <List />
  
    </StyledContainer>
  );
}

export default Container;
