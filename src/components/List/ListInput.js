import React, { useState } from 'react';
import styled from 'styled-components';

function ListInput() {
    
    const [inputValue, setInputValue] = useState('');

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

    return (
        <ListInputWrapper>
            <StyledInput type="text" 
                placeholder="Add task..."
                value = {inputValue}
                onChange={(e) => setInputValue(e.target.value)} 
            />
            <StyledButton>Add task</StyledButton>
        </ListInputWrapper>
    )
}

export default ListInput;