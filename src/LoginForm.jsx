function LoginForm() {
  return (
    <form className="my-4 flex flex-col justify-around">
      <input
        type="text"
        name="author"
        placeholder="your name"
        className="my-1 h-1/6 w-5/6 rounded  p-1 text-xs uppercase sm:w-1/2"
      />

      <input
        type="text"
        name="password"
        placeholder="your password"
        className="my-1 h-1/6 w-5/6 rounded p-1 text-xs uppercase sm:w-1/2"
      />
      <button
        type="button"
        input-type="reset"
        className="my-2 h-1/6 w-1/2 rounded-full bg-midnight p-1 text-xs uppercase text-desert drop-shadow-xl hover:bg-fuchsia-500 hover:drop-shadow-md sm:w-1/3"
      >
        login
      </button>
    </form>
  );
}
export default LoginForm;
