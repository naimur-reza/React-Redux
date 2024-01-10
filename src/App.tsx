import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counterSlice";

import { useAppDispatch, useAppSelector } from "./redux/hook";

const App = () => {
  const count = useAppSelector((state) => state.counter.value);
  const boxCount = useAppSelector((state) => state.counter.boxCount);
  const dispatch = useAppDispatch();

  console.log(boxCount);
  return (
    <div className=" flex items-center justify-center min-h-screen flex-col">
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

      <div className="flex gap-2">
        {Array.from({ length: boxCount }).map(() => (
          <p className="h-5 w-5 border border-pink-500"></p>
        ))}
      </div>
    </div>
  );
};

export default App;
