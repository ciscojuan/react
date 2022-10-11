import React from 'react';

export default function TaskSearch(props) {

  const onEvent = (e) => {
    console.log(e.target.value);
    onEvent(e.target.value)
  }
  return (
      <input
        className='task-search'
        placeholder="Search a task"
        value={props.searchValue}
        onChange={onEvent} 
      />
  )
}
export {TaskSearch};