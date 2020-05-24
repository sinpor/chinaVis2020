import React, { useState, useEffect } from 'react'
import { getFomatTime } from '@/utils';

export default function Clock() {
    const [time, setTime] = useState(getFomatTime());
    useEffect(() => {
        function update() {
            requestAnimationFrame(update);
            setTime(getFomatTime())
        }
        update();
    }, [])
    return (
        <div>{time}</div>
    )
}
