import { useEffect, useState } from 'react'

const Clock = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // Cleanup the interval on component unmount
        return () => {
            clearInterval(timer);
        }
    }, [])

    const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (
        <span className="clock">
            <p>{formattedTime}</p>
            <div className="horizontal-line"/>
        </span>
    )
}

export default Clock