import LinkArrowBackToHome from "./LinkArrowBackToHome";

function NewPostForm({ mapRef }) {
  return (
    <div className="h-full overflow-scroll bg-water sm:pt-16">
      <LinkArrowBackToHome mapRef={mapRef} />

      <div className="mx-12 my-4 border-y border-black p-2 text-center text-xl uppercase">
        new post
      </div>
      <form className="mx-5 my-6 flex flex-col items-center justify-around">
        <input
          type="text"
          placeholder="City"
          className="mb-2 h-1/6 w-5/6 rounded p-1"
        />
        <input
          type="text"
          placeholder="Image Title"
          className="mb-2 h-1/6 w-5/6 rounded p-1"
        />

        <input
          type="text"
          placeholder="Title"
          className="mb-2 h-1/6 w-5/6 rounded p-1"
        />
        <input
          type="text"
          placeholder="Caption"
          className="mb-2 h-1/6 w-5/6
          rounded p-1"
        />

        <input
          type="text"
          placeholder="Country"
          className="mb-2 h-1/6 w-5/6 rounded p-1"
        />

        <input
          type="text"
          placeholder="Month/ Year"
          className="mb-2 h-1/6 w-5/6 rounded p-1"
        />
        <input
          type="text"
          placeholder="Images Detail"
          className="mb-2 h-1/6 w-5/6 rounded p-1"
        />

        <button
          type="button"
          input-type="reset"
          className="mb-4 h-1/3 w-1/3 rounded-full bg-midnight p-3 text-sm uppercase text-desert hover:hover:bg-fuchsia-500"
        >
          add new post
        </button>
      </form>
    </div>
  );
}

export default NewPostForm;
