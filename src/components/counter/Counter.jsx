'use client'
import React, { useState, useEffect } from 'react';

function Counter({ end, duration }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const start = performance.now();
        const step = (timestamp) => {
            const progress = (timestamp - start) / duration;
            if (progress < 1) {
                setCount(Math.min(Math.floor(end * progress), end));
                requestAnimationFrame(step);
            } else {
                setCount(end);
            }
        };
        requestAnimationFrame(step);
    }, [end, duration]);

    return <>{count.toLocaleString()}</>;
}

export default Counter;
