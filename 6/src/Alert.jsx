import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
export default function Alert({ type, text }) {
  const alertClass = cn('alert', `alert-${type}`);

  return (
    <div className={alertClass} role="alert">
      {text}
    </div>
  );
}
// END
