import React, { useState, useEffect } from 'react';

const Timer = ({ onTimeUp }) => {
    const [timeLeft, setTimeLeft] = useState(15 * 60);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((time) => {
                if (time <= 1) {
                    clearInterval(interval);
                    onTimeUp();
                    return 0;
                }
                return time - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [onTimeUp]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return <h3 className='timer'>{formatTime(timeLeft)}</h3>;
};

export default Timer;
