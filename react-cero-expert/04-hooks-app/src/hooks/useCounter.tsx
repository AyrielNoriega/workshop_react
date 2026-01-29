import { useState } from 'react'

export const useCounter = (initialValue: number) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = () => setCounter(counter + 1);

  const decrement = () => setCounter(prev => Math.max(prev - 1, 1));

  const reset = () => setCounter(initialValue);

  return {
    // values
    counter,

    // methods
    increment,
    decrement,
    reset,
  }
}
