import { useState } from 'react';

export const useCounter = (initialValue: number) => {
  const [counter, setCounter] = useState(initialValue);

  const handleAdd = () => setCounter(counter + 1);
  const handleSubtract = () => setCounter((preState) => preState - 1);
  const handleReset = () => setCounter(initialValue);

  return {
    // values
    counter,
    // functions
    handleAdd,
    handleSubtract,
    handleReset,
  };
};
