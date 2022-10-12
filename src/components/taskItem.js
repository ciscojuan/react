import React from 'react';

export default function TaskItem(props) {

  return (
    <li className="task-item">
      <span
       className={`Icon Icon-check  ${props.status && 'Icon-check--active'} `}
       onClick={props.onCompleted}>
        √
      </span>
      <p className={`task-list-p  ${props.status && 'task-list-complete'} `}>
        {props.text}
      </p>
      <span
       className="Icon Icon-delete"
       onClick={props.onDelete}>
        X
      </span>
    </li>
  )
}
export {TaskItem};