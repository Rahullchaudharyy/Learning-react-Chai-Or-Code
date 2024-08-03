import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]); // State to store the user data
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to handle errors

  // Define the fetchUsers function outside of useEffect
  async function fetchUsers() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setUsers(data); // Update state with user data
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      setError(error.message); // Set error message if something goes wrong
      setLoading(false); // Set loading to false in case of error
    }
  }

  // useEffect to fetch user data when the component mounts
  useEffect(() => {
    fetchUsers(); // Call the fetch function
  }, []); // Empty dependency array means this effect runs once when the component mounts

  // Render the component
  return (
    <div>
      {loading ? <p>Loading...</p> : ""}
      {error ? <p>Error: {error}</p> : ""}
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} Email: {user.email}</li>
        ))}
      </ul>
      <button onClick={fetchUsers} className='p-5 bg-orange-500'>
        Fetch Data for the users
      </button>
    </div>
  );
}

export default UserList;
