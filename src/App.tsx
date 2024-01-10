import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counterSlice";
import { RootState } from "./redux/store";

const App = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className=" flex items-center justify-center min-h-screen">
      <div className="border bg-gray-100 w-80 flex justify-center items-center gap-10 h-32 rounded mx-10 my-10">
        <button
          className="bg-teal-500 text-white  px-5 py-1 rounded-md"
          onClick={() => dispatch(increment())}>
          +
        </button>
        <p className="text-lg ">{count}</p>
        <button
          className="bg-rose-500  text-white px-5 py-1 rounded-md"
          onClick={() => dispatch(decrement())}>
          -
        </button>
        <button
          className="bg-green-500  text-white px-5 py-1 rounded-md"
          onClick={() => dispatch(incrementByAmount(5))}>
          +5
        </button>
      </div>
    </div>
  );
};

export default App;
