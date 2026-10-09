import React from 'react';

// BEGIN (write your solution here)
export default function Item({ task, onClick }) {
  const { id, text, state } = task;

  const handleClick = (e) => {
    e.preventDefault();
    onClick(id, state);
  };

  const link = (
    <a href="#" className="todo-task" onClick={handleClick}>
      {text}
    </a>
  );

  return (
    <div className="row">
      <div className="col-1">{id}</div>
      <div className="col">
        {state === 'finished' ? <s>{link}</s> : link}
      </div>
    </div>
  );
}
// END


