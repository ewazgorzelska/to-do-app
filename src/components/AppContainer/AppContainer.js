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
    max-width: 460px;
    margin: 2em auto 2em auto;
    padding: 0 15px 0 15px;
`;

function AppContainer() {

  const [ toDoList, setToDoList ] = useState(data);

  const addTask = (userInput) => {
    const newTask = [...toDoList, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(newTask);
  }

  const handleToggle = (id) => {
      let mapped = toDoList.map(task => {
          return task.id == id ? { ...task, complete: !task.complete } : { ...task } // usage of the '===' operator results with key error
      }); 
      setToDoList(mapped);
  }

  const removeItem = (id) => {
    const filtered = toDoList.filter(task => id != task.id ); // usage of the '===' operator results with key error
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

export default AppContainer;
