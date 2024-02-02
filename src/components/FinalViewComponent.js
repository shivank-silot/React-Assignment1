import React from 'react';
import { Button, message } from 'antd';

const FinalViewComponent = ({ queue, onEnd, onReset }) => {
  const handleEnd = () => {
    if (queue.length === 0) {
      message.success('Queue is empty. Success!');
    } else {
      message.loading({ content: 'Waiting for the queue to be empty...', key: 'loading' });
      setTimeout(() => {
        message.success('Queue is empty. Success!');
        message.destroy('loading');
      }, queue.length * 10000);
    }
  };

  const handleReset = () => {
    onReset();
    message.success('Components reset successfully.');
  };

  return (
    <div>
      <Button type="primary" onClick={handleEnd}>
        End
      </Button>
      <Button danger onClick={handleReset}>
        Reset
      </Button>
    </div>
  );
};

export default FinalViewComponent;