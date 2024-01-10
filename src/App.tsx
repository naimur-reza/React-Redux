import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className=" flex items-center justify-center min-h-screen">
      <div className="border bg-gray-100 w-80 flex justify-center items-center gap-10 h-32 rounded mx-10 my-10">
        <button
          className="bg-teal-500 text-white  px-5 py-1 rounded-md"
          onClick={() => setCount(count + 1)}>
          +
        </button>
        <p className="text-lg ">{count}</p>
        <button
          className="bg-rose-500  text-white px-5 py-1 rounded-md"
          onClick={() => setCount(count - 1)}>
          -
        </button>
      </div>
    </div>
  );
};

export default App;
