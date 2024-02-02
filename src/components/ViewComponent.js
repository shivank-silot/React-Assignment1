import React from 'react';

const ViewComponent = ({ queue }) => {
  return (
    <div>
      <ul>
        {queue.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ViewComponent;