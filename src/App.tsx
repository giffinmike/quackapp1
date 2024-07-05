import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { Tiptap } from './components/TipTapComponent/TiptapComponent';
import { AppDataInterface } from './interfaces/interfaces';
import MyErrorBoundary from './MyErrorBoundary';
import { useParams } from 'react-router-dom';
import styles from './App.module.css';

const App = () => {
  const { scriptId } = useParams<{ scriptId: string }>();
  // const socketRef = useRef<Socket | null>(null);
  const [data, setData] = useState<AppDataInterface | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [description, setDescription] = useState('');
  const [testContent, setTestContent] = useState();
  const [characterArrayData, setCharacterArrayData] = useState<string[]>([]);
  const [scriptName, setScriptName] = useState('');
  const [helloResponse, setHelloResponse] = useState('');
  const [messageResponse, setMessageResponse] = useState('');

  const API_BASE_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      if (!scriptId) {
        console.error('No scriptId provided');
        return;
      }

      console.log('scriptId from useParams:', scriptId);
      const start = performance.now();

      try {
        const response = await axios.get(
          `${API_BASE_URL}/api/scenes/fetchScriptsFull?scriptId=${scriptId}`
        );
        console.log('API response:', response);
        setTestContent(response.data.content);
        setCharacterArrayData(response.data.characters);
        setData(response.data);
        setScriptName(response.data.title);
        setLoading(false);
      } catch (error: any) {
        const end = performance.now();
        console.log(`Axios request took ${end - start} ms (with error)`);

        if (error.response) {
          console.error('Error response:', error.response.data);
        } else if (error.request) {
          console.error('Error request:', error.request);
        } else {
          console.error('Error:', error.message);
        }
      }
    };

    fetchData();
  }, [API_BASE_URL, scriptId]);

  const fetchHello = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/hello`
      );
      console.log('API URL:', process.env.REACT_APP_API_URL); // Debuggings line
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
    <MyErrorBoundary fallback={'There was an error'}>
      <div>
        <Tiptap
          initialContent={testContent}
          setDescription={setDescription}
          scriptId={scriptId}
          characterArray={characterArrayData}
          scriptName={scriptName}
        />
      </div>
      <div>
        <h1>Test API Requests adaasdfsdf sssasdfd</h1>
        <button onClick={fetchHello}>Fetch Hello</button>
        <p>{helloResponse}</p>
        <button onClick={fetchMessage}>Fetch Message</button>
        <p>{messageResponse}</p>
      </div>
    </MyErrorBoundary>
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
