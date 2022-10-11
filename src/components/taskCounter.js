import React from 'react';
export default function TaskCounter(props) {
  return (
    <h2 className="counter">You have completed {props.completed} of {props.total} Tasks</h2>
  )
}
export {TaskCounter}
