import React, { useState } from 'react'

function Place() {
    const [place, setPlace] = useState('');

    const handleChange = (event) => {
        setPlace(event.target.value);
    };

    return (
        <div classPlace="name-input-container">
            <input
                type="text"
                value={place}
                onChange={handleChange}
                placeholder="Enter your place"
            />
            <h1> {place}</h1>
        </div>
    );
}

export default Place
