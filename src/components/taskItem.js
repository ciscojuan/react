import React from 'react';

export default function TaskItem(props) {
  const onComplete = () => {
    alert('Ya completaste la tarea : ' + props.text);
  }
  const onDelete = ( ) => {
    alert('Borraste la Tarea : ' + props.text);
  } 
  return (
    <li className="task-item">
      <span
       className={`Icon Icon-check  ${props.status && 'Icon-check--active'} `}
       onClick={onComplete}>
        √
      </span>
      <p className={`TodoItem-p  ${props.status && 'TodoItem-p--complete'} `}>
        {props.text}
      </p>
      <span
       className="Icon Icon-delete"
       onClick={onDelete}>
        X
      </span>
    </li>
  )
}
export {TaskItem};