import { useLoginMutation } from "../features/auth/authApi";

const Welcome = () => {
  // const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation({});

  return (
    <section className="min-h-screen hero">
      <div>
        <section>
          <h1>Welcome, </h1>
          <p></p>
        </section>
        <button
          className="w-full btn btn-square"
          // onClick={() => dispatch(increment())}
          onClick={() => login({})}
        >
          {isLoading && <p>loading</p>}
          Log In
        </button>
      </div>
    </section>
  );
};

export default Welcome;
