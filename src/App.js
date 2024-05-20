
import './App.css';
import{ useSelector,useDispatch} from "react-redux";
import { decrement, increment } from './reducer/Counterslice';
import Header from './component/Header';

function App() {
  const count =useSelector((state)=>state.counter.value)
  const dispatch= useDispatch();
  return (
    <div className="App">
      <div>count:{count}</div>
      <button onClick= {()=> dispatch (increment())}>+</button>
      <button onClick={()=> dispatch(decrement())}>-</button>
      <Header/>
    </div>
  );
}

export default App;
