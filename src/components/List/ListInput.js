import React, {useState} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ListInputWrapper = styled.div`
    display: grid;
    grid-template-columns: 6fr 1fr;
`;

const StyledInput = styled.input`
    border: 1px solid pink;
    margin-bottom: 1em;
    width: 400px;
    height: 3em;
    padding-left: 10px;
`;

const StyledButton = styled.button`
    width: 80px;
    background-color: pink; 
    height: 3em;
    border-radius: 10px;
`;

function ListInput({addTask}) {

    const [userInput, setUserInput] = useState('');


    const handleChange = (e) => {
        setUserInput(e.currentTarget.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault;
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
                <StyledButton>Add</StyledButton>
            </ListInputWrapper>        
        </form>
    )
}

ListInput.propTypes = {
    addTask: PropTypes.func,
}

export default ListInput;
