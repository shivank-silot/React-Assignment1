import React from 'react';

const RightSideComponent = ({ polledItems }) => {
  return (
    <div>
      <h2></h2>
      <ul>
        {polledItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default RightSideComponent;