// Filename - App.js

// Importing modules
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // usestate for setting a javascript
  // object for storing and using data
  const [data, setdata] = useState({
    name: '',
    email: '',
    date: '',
    title: '',
    test: '',
  });

  // Using useEffect for single rendering
  // useEffect(() => {
  //   // Using fetch to fetch the api from
  //   // flask server it will be redirected to proxy
  //   fetch('/data').then((res) =>
  //     res.json().then((data) => {
  //       // Setting a data from api
  //       setdata({
  //         name: data.Name,
  //         email: data.email,
  //         date: data.Date,
  //         title: data.title,
  //       });
  //     })
  //   );
  // }, []);
  useEffect(() => {
    fetch('http://127.0.0.1:5000/data')
      .then((res) => res.json())
      .then((data) => setdata(data))
      .catch((err) =>
        console.log(`Error Fetching Data from the Server: ${err}`)
      );
  }, []);
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>React and flask</h1>
        {/* Calling a data from setdata for showing */}
        <p>{data.name}</p>
        <p>{data.email}</p>
        <p>{data.date}</p>
        <p>{data.title}</p>
        <p>{data.test}</p>
      </header>
    </div>
  );
}

export default App;
