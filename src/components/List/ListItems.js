import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import './ListItems.css';
import remove from 'assets/remove.svg';

const StyledItemsContainer =styled.div`
    min-height: 300px;
`;
const StyledItemWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const StyledItem = styled.div`
    padding-top: 1em;
    padding-bottom: 1em;
    margin-left: 1em;
    margin-right: 1em;
    text-align: left;
     
`;

const StyledRemoveButton = styled.button`
    background-image: url(${remove});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: pink;
    height: 20px;
    width: 20px;
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
                (item, i) => {
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
    removeItem: PropTypes.func
}

export default ListItems;