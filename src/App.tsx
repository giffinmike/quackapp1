import React, { useState } from 'react';

const App = () => {
  const [helloResponse, setHelloResponse] = useState('');
  const [messageResponse, setMessageResponse] = useState('');

  const fetchHello = async () => {
  try {
    const response = await fetch('http://localhost:5001/api/hello');
    console.log(response); // Add this line to debug the response
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    setHelloResponse(data.message);
  } catch (error) {
    console.error('Error fetching hello:', error);
  }
};

const fetchMessage = async () => {
  try {
    const response = await fetch('http://localhost:5001/api/message');
    console.log(response); // Add this line to debug the response
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    setMessageResponse(data.message);
  } catch (error) {
    console.error('Error fetching message:', error);
  }
};

  return (
    <div>
      <h1>Test API Requests</h1>
      <button onClick={fetchHello}>Fetch Hello</button>
      <p>{helloResponse}</p>
      <button onClick={fetchMessage}>Fetch Message</button>
      <p>{messageResponse}</p>
    </div>
  );
};

export default App;
