import React, { useState, useEffect } from 'react';
import './App.css';
import { Layout, Row, Col } from 'antd';
import Header from './components/Header';
import InputComponent from './components/InputComponent';
import ViewComponent from './components/ViewComponent';
import RightSideComponent from './components/RightSideComponent';
import FinalViewComponent from './components/FinalViewComponent';


const { Content } = Layout;

const App = () => {
  const [queue, setQueue] = useState([]);
  const [polledItems, setPolledItems] = useState([]);

  const handleAddToQueue = (text) => {
    setQueue([...queue, text]);
  };

  const handlePollQueue = () => {
    if (queue.length > 0) {
      const polled = queue.shift();
      setPolledItems((prevItems) => [...prevItems, polled]);
      setQueue([...queue]);
    }
  };

  const handleEnd = () => {
    handlePollQueue(); // Ensure the last item is processed
    // Your logic for ending
  };

  const handleReset = () => {
    setQueue([]);
    setPolledItems([]);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handlePollQueue();
    }, 10000);

    return () => clearInterval(intervalId);
  }, [queue]);

  return (
    <Layout>
      <Header />

      <Content>
        <Row>
          {/* Left Panel (Main Content) */}
          <Col span={14}>
            <Row className="custom-row">
              <InputComponent onAdd={handleAddToQueue} />
            </Row>
            <Row className="custom-row">
              <ViewComponent queue={queue} />
            </Row>
          </Col>

          {/* Right Panel */}
          <Col span={10}>
          <Row className="custom-row">
              <RightSideComponent polledItems={polledItems} />
            </Row>
            <Row className="custom-row">
              <FinalViewComponent queue={queue} onEnd={handleEnd} onReset={handleReset} />
            </Row>
          </Col>
        </Row>
      </Content>


    </Layout>
  );
};

export default App;