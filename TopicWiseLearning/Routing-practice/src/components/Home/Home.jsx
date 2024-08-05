import { useState, useEffect } from 'react';

const Home = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    // This code runs after every render
    document.title = `You clicked ${count} times`;
  }, [count]); // Runs only when 'count' changes

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
        <h1 className='text-[5vmin]'> Welcome to the Home page</h1>

        <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default Home