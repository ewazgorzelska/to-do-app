import React from 'react';
import styled from 'styled-components';


const Day = styled.h1`
    
`;

function Header() {
    const now = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return <h1>{ days[now.getDay()] }</h1>
};

export default Header;