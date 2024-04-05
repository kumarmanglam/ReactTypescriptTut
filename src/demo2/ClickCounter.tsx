
import React, { useState, useEffect } from 'react';

const ClickCounter = () => {
  // State to hold the count
  const [count, setCount] = useState(0);

  // Effect to subscribe to click events when the component mounts
  useEffect(() => {
    // Event handler function to increment the count
    const incrementCount = () => {
      setCount(prevCount => prevCount + 1);
    };

    // Subscribe to the 'click' event on the document
    document.addEventListener('click', incrementCount);

    // Return a cleanup function to unsubscribe from the event when the component unmounts
    return () => {
      document.removeEventListener('click', incrementCount);
    };
  }, []); // Empty dependency array means this effect runs only once, similar to componentDidMount

  return (
    <div>
      <h1>Click Counter</h1>
      <p>Click anywhere on the page to increment the count:</p>
      <p>Count: {count}</p>
    </div>
  );
};

export default ClickCounter;
