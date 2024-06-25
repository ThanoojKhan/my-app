import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar';

function Timer() {

    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Navbar />
            <div className="timer-container">
                <h1>Timer: {seconds} seconds</h1>
            </div>
        </>

    );
}


export default Timer
