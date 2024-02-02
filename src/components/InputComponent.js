import React, { useState } from 'react';
import { Button, Input } from 'antd';

const InputComponent = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    if (inputValue.trim() !== '') {
      onAdd(inputValue);
      setInputValue('');
    }
  };

  return (
    <table>
  <tr>
    <td><Input
        placeholder="Enter text..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      /></td>
    <td><Button type="primary" onClick={handleAdd}>
        Add
      </Button></td>
  </tr>
  </table>
  );
};

export default InputComponent;