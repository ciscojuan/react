import React, {useState} from 'react';

export default function TaskSearch({searchValue, setSearchValue}) {

  const onEvent = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  }
  return (
    <>
      <input
        className='task-search'
        placeholder="Search a task"
        value={searchValue}
        onChange={onEvent} 
      />

      <p>{searchValue}</p>
    </>
  )
}
export {TaskSearch};