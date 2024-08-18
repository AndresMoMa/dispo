"use client";
import * as React from 'react';
const Clock = () => {
    const d = new Date();
    const [currentTime, setCurrentTime] = React.useState('');

    React.useEffect(() => {
        const date = d.getHours() + ' : ' + d.getMinutes() + ' : ' + d.getSeconds();
        const timer = setInterval(() => {
            setCurrentTime(date);
        }, 1000);

        return () => clearInterval(timer);
    }, [currentTime]);

    return <>{currentTime}</>;
};
export default Clock