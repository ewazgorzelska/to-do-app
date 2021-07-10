import React, { useState } from 'react';
import styled from 'styled-components';
import Header from 'components/Header/Header';
import ListInput from 'components/List/ListInput';
import ListItems from 'components/List/ListItems';
import Statistics from 'components/Statistics/Statistics';
import data from 'assets/data.json';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;

    max-width: 460px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2em;
    padding-right: 15px;
    padding-left: 15px;
    background-color: white;
    -webkit-box-shadow: 5px 0px 16px 7px rgba(230,230,230,0.9); 
    box-shadow: 5px 0px 16px 7px rgba(230,230,230,0.9);
`;

function Container() {

  const [ toDoList, setToDoList ] = useState(data);

  const addTask = (userInput) => {
    const newTask = [...toDoList, { id: toDoList.length + 1, task: userInput, complete: false }];

    setToDoList(newTask);
  }

  const handleToggle = (id) => {
      let mapped = toDoList.map(task => {
          return task.id == id ? { ...task, complete: !task.complete } : { ...task }
      });
      setToDoList(mapped);
  }

  const removeItem = (id) => {
    const filtered = toDoList.filter(task => id != task.id );
    setToDoList(filtered);
  };

  return (
    <StyledContainer>
      <Header />
      <ListInput addTask={addTask} />
      <ListItems handleToggle={handleToggle} toDoList={toDoList} removeItem={removeItem}/>
      <Statistics toDoList={toDoList}/>
    </StyledContainer>
  );
}

export default Container;
