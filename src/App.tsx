import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Item {
  _id: string;
  name: string;
  date: string;
}

const App: React.FC = () => {
  const [helloResponse, setHelloResponse] = useState('');
  const [messageResponse, setMessageResponse] = useState('');
  const [items, setItems] = useState<Item[]>([]);
  const [itemName, setItemName] = useState('');

  const fetchItems = async () => {
    try {
      const response = await axios.get<Item[]>(
        `${process.env.REACT_APP_API_URL}/api/items`
      );
      setItems(response.data);
      console.log('RES DATA:', response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const createItem = async () => {
    if (!itemName) return;

    try {
      const response = await axios.post<Item>(
        `${process.env.REACT_APP_API_URL}/api/items`,
        { name: itemName }
      );
      setItems([...items, response.data]);
      setItemName('');
    } catch (error) {
      console.error('Error creating item:', error);
    }
  };

  const deleteItem = async (id: string) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/items/${id}`);
      setItems(items.filter((item) => item._id !== id));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchHello = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/hello`
      );
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

      <h2>Items</h2>
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        placeholder="Add an item"
      />
      <button onClick={fetchItems}>Fetch Item</button>
      <button onClick={createItem}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            {item.name}
            <button onClick={() => deleteItem(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

///////////////

// import React, { useState } from 'react';
// import axios from 'axios';

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
