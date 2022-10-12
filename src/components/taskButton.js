import React from 'react';

export default function TaskButton(props) {
  const onClickButton = (message) => {
    alert(message);
  }
  return (
    <button className='task-button'
     onClick={() => onClickButton('Aquí se debería abrir el modal')}>+</button>
  )
}
export {TaskButton};
