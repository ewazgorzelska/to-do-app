import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import './ListItems.css';

const StyledItem = styled.div`
    padding-top: 1em;
    padding-bottom: 1em;
    margin-left: 1em;
    margin-right: 1em;
`;

function ListItems({ toDoList, handleToggle }) {

    const handleClick = (e) => {
        e.preventDefault;
        handleToggle(e.currentTarget.id);
    }

    return (
        <div>
            {toDoList.map(
                item => {
                    return (
                        <StyledItem
                            key={item.id.toString()}
                            id={item.id}
                            name="task"
                            value={item.id}
                            onClick={handleClick}
                            handleToggle={handleToggle} 
                            className={item.complete ? "strike" : ""}>
                            {item.task}
                        </StyledItem>
                        )
                    }
                )
            }
        </div>        
    )
}

ListItems.propTypes = {
    toDoList: PropTypes.array,
    handleToggle: PropTypes.func,
}

export default ListItems;