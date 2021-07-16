import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import './ListItems.css';
import remove from 'assets/remove.svg';

const StyledItemsContainer = styled.div`
    min-height: 300px;
    background-color: ${({ theme }) => theme.colors.card};
    margin-bottom: 1em;
    border-radius: 5px;
`;
const StyledItemWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1em 0 1em;
`;

const StyledItem = styled.div`
    padding: 1em 0 1em 0;
    text-align: left;
    color: ${({ theme }) => theme.colors.fontSecondary};  
`;

const StyledRemoveButton = styled.button`
    background-image: url(${remove});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${({ theme }) => theme.colors.button};
    height: 20px;
    width: 20px;
    border-radius: 5px;
    border: none;
`;  

function ListItems({ toDoList, handleToggle, removeItem }) {

    const handleClick = (e) => {
        e.preventDefault();
        handleToggle(e.target.id);
    };

    const handleRemoveItem = (e) => {
        e.preventDefault();
        removeItem(e.target.id);
    }

    return (
        <StyledItemsContainer>
            {toDoList.map(
                item => {
                    return (
                        <StyledItemWrapper key={item.id}>
                            <StyledItem
                                id={item.id}
                                name="task"
                                value={item.id}
                                onClick={handleClick}
                                handleToggle={handleToggle} 
                                className={item.complete ? "strike" : ""}>
                                {item.task}
                            </StyledItem>
                            <StyledRemoveButton  
                                id={item.id} 
                                onClick={handleRemoveItem} />
                        </StyledItemWrapper>
                        )
                    }
                )
            }
        </StyledItemsContainer>        
    )
}

ListItems.propTypes = {
    toDoList: PropTypes.array,
    handleToggle: PropTypes.func,
    removeItem: PropTypes.func,
}

export default ListItems;