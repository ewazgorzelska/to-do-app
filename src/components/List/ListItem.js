import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import './ListItem.css';

function ListItem({toDoList, handleToggle}) {

    const StyledItem = styled.div`
        padding-top: 1em;
        padding-bottom: 1em;
        margin-left: 1em;
        margin-right: 1em;
    `;

    const handleClick = (e) => {
        console.log(e.currentTarget.id)
        e.preventDefault;
        handleToggle(e.currentTarget.id);
    }

    return (
        <div>
            {toDoList.map(
                item => 
                    (<StyledItem
                    key={item.id}
                    id={item.id}
                    onClick={handleClick}
                    handleToggle={handleToggle} 
                    className={item.complete ? "strike" : ""}>{item.task}</StyledItem>)
                )}
        </div>        
        )
}

ListItem.propTypes = {
    toDoList: PropTypes.array,
    handleToggle: PropTypes.func,
}

export default ListItem;