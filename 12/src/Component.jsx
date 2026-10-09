import get from 'lodash/get';
import uniqueId from 'lodash/uniqueId';
import React from 'react';

// BEGIN (write your solution here)
export default function Component() {
  const [log, setLog] = React.useState([]);

  const handleAction = (type) => {
    // Если лог пустой, базовое значение 0. Иначе берем значение самого верхнего (нового) элемента log[0]
    const currentLatest = log.length === 0 ? 0 : log[0].value;
    const newValue = type === 'increment' ? currentLatest + 1 : currentLatest - 1;

    const newLogItem = {
      id: uniqueId(),
      value: newValue,
    };

    setLog([newLogItem, ...log]);
  };

  const handleRemove = (id) => {
    setLog(log.filter((item) => item.id !== id));
  };

  return (
    <div>
      <div className="btn-group font-monospace" role="group">
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={() => handleAction('increment')}
        >
          +
        </button>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={() => handleAction('decrement')}
        >
          -
        </button>
      </div>
      {log.length > 0 && (
        <div className="list-group">
          {log.map(({ id, value }) => (
            <button
              key={id}
              type="button"
              className="list-group-item list-group-item-action"
              onClick={() => handleRemove(id)}
            >
              {value}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
// END

