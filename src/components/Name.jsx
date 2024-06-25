import React, { useState } from 'react'

function Name() {
    const [name, setName] = useState('');

    const handleChange = (event) => {
      setName(event.target.value);
    };
  
    return (
      <div className="name-input-container">
        <input
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        <h1>Hello, {name ? name : 'stranger'}!</h1>
      </div>
    );
  }

export default Name
