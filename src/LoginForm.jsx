function LoginForm() {
  return (
    <form className="my-8 flex flex-col justify-around">
      <input
        type="text"
        name="author"
        placeholder="your name"
        className="my-2 h-1/6 w-5/6 rounded p-2  text-sm uppercase sm:w-1/2 md:w-2/3"
      />

      <input
        type="text"
        name="password"
        placeholder="your password"
        className="my-2 h-1/6 w-5/6 rounded p-2 text-sm uppercase sm:w-1/2 md:w-2/3"
      />
      <button
        type="button"
        input-type="reset"
        className="my-4 h-1/6 w-1/2 rounded-full bg-midnight p-2 text-sm uppercase text-desert hover:bg-fuchsia-500 sm:w-1/3"
      >
        login
      </button>
    </form>
  );
}
export default LoginForm;
