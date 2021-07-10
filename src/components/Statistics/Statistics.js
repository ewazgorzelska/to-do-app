import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.footer`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1em;
`;

function Statistics ({ toDoList }) {

    const filteredCompleted = toDoList.filter(item => item.complete == true);
    const completed = filteredCompleted.length;

    const filteredOpened = toDoList.filter(item => item.complete == false);
    const opened = filteredOpened.length;
    
    return (
        <StyledWrapper>
            <div>{toDoList.length} task(s)</div>
            <div>{completed} completed</div>
            <div>{opened} opened</div>
        </StyledWrapper>
    )
}

Statistics.propTypes = {
    toDoList: PropTypes.array,
}

export default Statistics;


