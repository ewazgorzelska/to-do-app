import React from 'react';
import styled from 'styled-components';
import day from 'assets/day.jpg';
import night from 'assets/night.jpg';

const checkTime = () => {
    const now = new Date();
    const time = now.getHours();

    return time > 19 ? night : day;
};

const StyledHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top: 1em;
    margin-bottom: 1em;
    background-image: url(${checkTime()});
    background-color: white;
    height: 18vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    color: white;
    font-size: 13px;
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