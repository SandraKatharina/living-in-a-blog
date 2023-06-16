function LoginForm() {
  return (
    <div className="scroll-overflow h-full">
      <h1 className="m-4 border-y border-black p-2 text-center">Your Login</h1>
      <form className="my-6 flex flex-col items-center justify-around">
        <input
          type="text"
          name="author"
          placeholder="YOUR NAME"
          className="mb-2 h-1/6 w-5/6 rounded p-1"
        />

        <input
          type="text"
          name="password"
          placeholder="YOUR PASSWORD"
          className="mb-2 h-1/6 w-5/6 rounded p-1"
        />
        <button
          type="button"
          input-type="reset"
          className="mb-4 h-1/3 w-1/3 rounded-full bg-midnight p-3 text-sm text-desert drop-shadow-2xl hover:drop-shadow-md"
        >
          LOGIN
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
