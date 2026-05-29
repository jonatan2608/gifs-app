import { useCounter } from "../hooks/useCounter"

export const MyCounterApp = () => {
    const { counter, handleSubtract, handleAdd, handleReset } = useCounter(0);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1 style={{ marginBottom: '10px' }}>Counter: { counter }</h1>

            <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={handleSubtract}>-1</button>
                <button onClick={handleAdd}>+1</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}
