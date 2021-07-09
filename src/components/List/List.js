import React, { useState } from 'react'
import ListInput from 'components/List/ListInput'
import ListItem from 'components/List/ListItem'
import data from 'assets/data.json'

function List () {
 
  const [toDoList, setToDoList] = useState(data);

  const addTask = userInput => {
    let copiedArr = [...toDoList];
    copiedArr = [...toDoList, {id: toDoList.length + 1, task: userInput, complete: false}]
    setToDoList(copiedArr);
  }

  const handleToggle = (id) => {
      let mapped = toDoList.map(task => {
          return task.id == id ? { ...task, complete: !task.complete } : { ...task }
      });
      setToDoList(mapped);
  }

  return (
    <>
      <ListInput addTask={addTask}/>
      <ListItem handleToggle={handleToggle} toDoList={toDoList} />
    </>
  )
}

export default List;