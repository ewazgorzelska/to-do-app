import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ListInputWrapper = styled.div`
    display: grid;
    grid-template-columns: 6fr 1fr;
`;

const StyledInput = styled.input`
    border: 3px solid ${({ theme }) => theme.colors.button};
    margin-bottom: 1em;
    width: 350px;
    height: 3em;
    padding-left: 10px;
    border-radius: 10px;
`;

const StyledButton = styled.button`
    width: 70px;
    background-color: ${({ theme }) => theme.colors.button};
    height: 3em;
    border-radius: 10px;
    border: none;
`;

function ListInput({ addTask }) {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <ListInputWrapper>
                <StyledInput type="text" 
                    placeholder="Enter task..."
                    value={userInput}
                    onChange={handleChange}
                />
                <StyledButton disabled={!userInput}>Add</StyledButton>
            </ListInputWrapper>        
        </form>
    )
}

ListInput.propTypes = {
    addTask: PropTypes.func,
}

export default ListInput;
