import React, { useState } from 'react';
import axios from 'axios';
// import { Tiptap } from './components/TipTapComponent/TiptapComponent';
// import { AppDataInterface } from './interfaces/interfaces';
import MyErrorBoundary from './MyErrorBoundary';

const App = () => {
  const [helloResponse, setHelloResponse] = useState('');
  const [messageResponse, setMessageResponse] = useState('');

  const fetchHello = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/hello`
      );
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
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/message`
      );
      console.log('API URL:', process.env.REACT_APP_API_URL); // Debugging lines
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setMessageResponse(data.message);
    } catch (error) {
      console.error('Error fetching message:', error);
    }
  };

  return (
    <div>
      <h1>Test API Requests adaasdfsdf sssasdfd</h1>
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
//     try {
//       const response = await fetch(
//         `${process.env.REACT_APP_API_URL}/api/hello`
//       );
//       console.log('API URL:', process.env.REACT_APP_API_URL); // Debugging line
//       if (!response.ok) throw new Error('Network response was not ok');
//       const data = await response.json();
//       setHelloResponse(data.message);
//     } catch (error) {
//       console.error('Error fetching hello:', error);
//     }
//   };

//   const fetchMessage = async () => {
//     try {
//       const response = await fetch(
//         `${process.env.REACT_APP_API_URL}/api/message`
//       );
//       console.log('API URL:', process.env.REACT_APP_API_URL); // Debugging line
//       if (!response.ok) throw new Error('Network response was not ok');
//       const data = await response.json();
//       setMessageResponse(data.message);
//     } catch (error) {
//       console.error('Error fetching message:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Test API Requests adaasdfsdf sssd</h1>
//       <button onClick={fetchHello}>Fetch Hello</button>
//       <p>{helloResponse}</p>
//       <button onClick={fetchMessage}>Fetch Message</button>
//       <p>{messageResponse}</p>
//     </div>
//   );
// };

// export default App;
