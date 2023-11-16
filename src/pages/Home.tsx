import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { decrement, increment } from "../features/counter/counterSlice";

const Home = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <section className="container h-full border-2 border-red-500">
      <div className="flex items-center gap-1">
        <button
          className="btn btn-square "
          onClick={() => dispatch(increment())}
        >
          ++
        </button>
        <h1>{count}</h1>
        <button
          className="btn btn-square "
          onClick={() => dispatch(decrement())}
        >
          --
        </button>
      </div>
    </section>
  );
};

export default Home;
