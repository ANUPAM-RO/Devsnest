import './App.css';
import { increment, decrement } from "./components/Counter";
import { useDispatch, useSelector } from 'react-redux';
function App() {
  const dispatch = useDispatch()
  const count = useSelector(state => state.allcounter)
  return (
  <div className="App">
    <h1> Redux Counter App</h1>
    <div className="counter">
      <button onClick={() => dispatch(increment())}>+</button>
      <input type="number" value= {count} />
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  </div>
  );
}

export default App;
