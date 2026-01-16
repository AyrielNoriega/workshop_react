import { useCounter } from '../hooks';

export const MyCounterApp = () => {
  const { counter, handleAdd, handleSubtract, handleReset } = useCounter(3);

  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
    >
      <h1>counter: { counter } </h1>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={handleSubtract}>-1</button>
        <button onClick={handleAdd}>+1</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};
