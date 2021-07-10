import React, { useState } from 'react';
import styled from 'styled-components';
import Header from 'components/Header/Header';
import ListInput from 'components/List/ListInput';
import ListItems from 'components/List/ListItems';
import data from 'assets/data.json';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    max-width: 560px;
    margin-left: auto;
    margin-right: auto;
    padding-right: 15px;
    padding-left: 15px;
    background-color: lightgrey;
`;

function Container() {

  const [ toDoList, setToDoList ] = useState(data);

  const addTask = (userInput) => {
    let copiedArr = [...toDoList];
    copiedArr = [...copiedArr, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copiedArr);
  }

  const handleToggle = (id) => {
      let mapped = toDoList.map(task => {
          return task.id == id ? { ...task, complete: !task.complete } : { ...task }
      });
      setToDoList(mapped);
  }

  return (
    <StyledContainer>
      <Header />
      <ListInput addTask={addTask} />
      <ListItems handleToggle={handleToggle} toDoList={toDoList} />
    </StyledContainer>
  );
}

export default Container;
