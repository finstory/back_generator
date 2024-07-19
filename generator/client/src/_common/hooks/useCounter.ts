import { useEffect, useState } from "react";

export const useCounter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Count changed:", count);
    }, [count]);

    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const decrement = () => {
        setCount((prevCount) => prevCount - 1);
    };

    return { count, increment, decrement };
};