import { useState } from "react"

export const useCounter = (initialValue:number = 0) => {
    const [counter, setCounter] = useState(initialValue);

    const handleSubtract = () => {
        setCounter((prevState) => prevState - 1);
    }

    const handleAdd = () => {
        setCounter(counter + 1);
    }

    const handleReset = () => {
        setCounter(initialValue);
    }

    return {
        counter,
        handleSubtract,
        handleAdd,
        handleReset
    }
}
