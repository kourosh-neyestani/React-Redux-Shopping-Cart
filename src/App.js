import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment(60000))}>Click to Increment</button>
      <button onClick={() => dispatch(decrement(6))}>Click to Decrement</button>
    </div>
  );
}

export default App;