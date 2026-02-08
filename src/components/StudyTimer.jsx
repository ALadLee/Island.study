import React from 'react';

const StudyTimer = () => {
    const [time, setTime] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds) => {
        const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
        const secs = String(seconds % 60).padStart(2, '0');
        return `${hours}:${minutes}:${secs}`;
    };

    return (
        <div>
            <h1>Study Timer</h1>
            <p>Time Elapsed: {formatTime(time)}</p>
        </div>
    );
};

export default StudyTimer;