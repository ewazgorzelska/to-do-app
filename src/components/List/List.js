import React, { useState } from 'react'
import ListInput from 'components/List/ListInput'
import ListItem from 'components/List/ListItem'
import data from 'assets/data.json'

function List () {
  const color = 'Add';

  const [toDoList, setToDoList] = useState(data);

  const handleToggle = (id) => {
      let mapped = toDoList.map(task => {
          return task.id == id ? { ...task, complete: !task.complete } : { ...task }
      });
      setToDoList(mapped);
  }

  return (
    <>
      <ListInput colorFromParent={color} />
      <ListItem handleToggle={handleToggle} toDoList={toDoList} />
    </>
  )
}

export default List;
