import { useState } from 'react'
import './App.css'

const App = () => {
  // Declare a state to store the button click count
  const [count, setCount] = useState(0);

  // Function to handle button click
  const handleClick = () => {
    setCount(count + 1);
  };
    

  return (
    <>
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Hello, welcome to your React app!</h1>
      <button onClick={handleClick}>Click me</button>
      <p>You clicked {count} times</p>
    </div>
    </>
  );
};


      

export default App
