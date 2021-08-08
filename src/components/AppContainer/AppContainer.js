import React, { useState } from 'react';
import styled from 'styled-components';
import Header from 'components/Header/Header';
import ListInput from 'components/List/ListInput';
import ListItems from 'components/List/ListItems';
import Statistics from 'components/Statistics/Statistics';
import Modal from 'components/Modal';
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
  const [ modal, setModal ] = useState(false);
  const [ modalId, setModalId ] = useState('');

  const addTask = (userInput) => {
    const newTask = [...toDoList, { id: (toDoList.length + 1).toString(), task: userInput, complete: false }];
    setToDoList(newTask);
  }

  const handleToggle = (id) => {
      let mapped = toDoList.map(task => {
          return task.id === id ? { ...task, complete: !task.complete } : { ...task }
      }); 
      setToDoList(mapped);
  }

  const showModal = (e) => {
    setModalId(e.target.id);
    setModal(!modal);
  }

  const closeModal = () => {
    setModal(!modal);
    setModalId(null);
  }

  const removeItem = (id) => {
    let filtered = toDoList.filter(task => id !== task.id );
    setToDoList(filtered);
    setModal(false);
    setModalId(null);
  };

  return (
    <StyledContainer>
      <Header />
      <ListInput addTask={addTask} />
      <ListItems handleToggle={handleToggle} toDoList={toDoList} showModal={showModal}/>
      <Modal modal={modal} removeItem={removeItem} closeModal={closeModal} modalId={modalId}/>
      <Statistics toDoList={toDoList}/>
    </StyledContainer>
  );
}

export default AppContainer;
