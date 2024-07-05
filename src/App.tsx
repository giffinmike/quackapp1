import React, { useState } from 'react';

const App = () => {
  const [helloResponse, setHelloResponse] = useState('');
  const [messageResponse, setMessageResponse] = useState('');

const fetchHello = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/hello`);
    console.log('API URL:', process.env.REACT_APP_API_URL); // Debugging line
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    setHelloResponse(data.message);
  } catch (error) {
    console.error('Error fetching hello:', error);
  }
};

const fetchMessage = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/message`);
    console.log('API URL:', process.env.REACT_APP_API_URL); // Debugging line
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    setMessageResponse(data.message);
  } catch (error) {
    console.error('Error fetching message:', error);
  }
};

  return (
    <div>
      <h1>Test API Requests adaasdfsdf  </h1>
      <button onClick={fetchHello}>Fetch Hello</button>
      <p>{helloResponse}</p>
      <button onClick={fetchMessage}>Fetch Message</button>
      <p>{messageResponse}</p>
    </div>
  );
};

export default App;


///////////////////////////////

// import React, { useState } from 'react';

// const App = () => {
//   const [helloResponse, setHelloResponse] = useState('');
//   const [messageResponse, setMessageResponse] = useState('');

//   const fetchHello = async () => {
//   try {

//     // const response = await fetch('http://localhost:5001/api/hello');

//     const response = await fetch('https://quackapp1-6c9f5ed59cf4.herokuapp.com/api/hello');

//     console.log(response); // Add this line to debug the response
//     if (!response.ok) throw new Error('Network response was not ok');
//     const data = await response.json();
//     setHelloResponse(data.message);
//   } catch (error) {
//     console.error('Error fetching hello:', error);
//   }
// };

// const fetchMessage = async () => {
//   try {

//     // const response = await fetch('http://localhost:5001/api/message');

//     const response = await fetch('https://quackapp1-6c9f5ed59cf4.herokuapp.com/api/message');

//     console.log(response); // Add this line to debug the response
//     if (!response.ok) throw new Error('Network response was not ok');
//     const data = await response.json();
//     setMessageResponse(data.message);
//   } catch (error) {
//     console.error('Error fetching message:', error);
//   }
// };

//   return (
//     <div>
//       <h1>Test API Requests adsfsfd</h1>
//       <button onClick={fetchHello}>Fetch Hello</button>
//       <p>{helloResponse}</p>
//       <button onClick={fetchMessage}>Fetch Message</button>
//       <p>{messageResponse}</p>
//     </div>
//   );
// };

// export default App;
