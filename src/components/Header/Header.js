import React from 'react';
import styled from 'styled-components';


  const StyledHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 1em 0 1em 0;
    background-color: ${({ theme }) => theme.colors.card};
    height: 18vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    color: ${({ theme }) => theme.colors.fontPrimary};
    font-size: 13px;
    border-radius: 5px;
    background-image: ${({ theme }) => theme.image};
`;

const StyledDate = styled.div`
    padding-left: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

function Header() {
    const now = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayofWeek = days[now.getDay()];

    const date = now.toString().split(' ').splice(1,3).join(' ');
    
    return (
        <StyledHeader>
            <StyledDate>
                <h1>{ dayofWeek },</h1>
                <h2>{ date }</h2>
            </StyledDate>
        </StyledHeader>)
}

export default Header;