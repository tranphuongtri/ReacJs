import React from "react";
import { useState, useEffect } from "react";
function Timer() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false)
    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        }
        return () => clearInterval(interval);

    }, [isRunning]);
    const handleStart = () => setIsRunning(true);
    const handleStop = () => setIsRunning(false);
    const handleReset = () => {
        setIsRunning(false);
        setTime(0);
    }
    return (
        <div>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
            <p>{time}s</p>
        </div>
    )
}
export default Timer;