import React, { useState } from 'react';
import cn from 'classnames';

// BEGIN (write your solution here)
export default function Collapse({ text, opened = true }) {
  const [isOpen, setIsOpen] = useState(opened);

  const toggleCollapse = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const collapseClass = cn('collapse', {
    show: isOpen,
  });

  return (
    <div>
      <p>
        <a
          className="btn btn-primary"
          data-bs-toggle="collapse"
          href="#"
          role="button"
          aria-expanded={isOpen}
          onClick={toggleCollapse}
        >
          Link with href
        </a>
      </p>
      <div className={collapseClass}>
        <div className="card card-body">
          {text}
        </div>
      </div>
    </div>
  );
}
// END
