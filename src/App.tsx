// import React, { useState } from 'react';

// const App = () => {
//   const [helloResponse, setHelloResponse] = useState('');
//   const [messageResponse, setMessageResponse] = useState('');

//   const fetchHello = async () => {
//     try {
//       const response = await fetch('/api/hello');
//       const data = await response.json();
//       setHelloResponse(data.message);
//     } catch (error) {
//       console.error('Error fetching hello:', error);
//     }
//   };

//   const fetchMessage = async () => {
//     try {
//       const response = await fetch('/api/message');
//       const data = await response.json();
//       setMessageResponse(data.message);
//     } catch (error) {
//       console.error('Error fetching message:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Test API Requests</h1>
//       <button onClick={fetchHello}>Fetch Hello</button>
//       <p>{helloResponse}</p>
//       <button onClick={fetchMessage}>Fetch Message</button>
//       <p>{messageResponse}</p>
//     </div>
//   );
// };

// export default App;



////////

import React from 'react';

function App() {
  return (
    <div>
      <p>Hello Turkey Times heroku</p>
    </div>
  );
}

export default App;
