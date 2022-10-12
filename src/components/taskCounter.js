import React from 'react';
export default function TaskCounter({total, completed}) {
  return (
    <h2 className="counter">You have completed {completed} of {total} Tasks</h2>
  )
}
export {TaskCounter}
