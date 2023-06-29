function AllPostsPage({ destination }) {
  return (
    <div className=" flex w-screen bg-midnight md:w-full">
      <div className="h-48 w-full p-2">
        <img
          className="h-full w-full object-cover md:w-full"
          src={destination.imageSrc}
          alt=""
        />
      </div>
      <div className="flex w-full flex-col p-2 leading-normal text-white md:w-full">
        <div>
          <h2 className="line-clamp-1 pt-1 text-xl font-bold md:text-2xl">
            {destination.titel}
          </h2>
          <p className="line-clamp-2 text-xs md:text-sm">
            {destination.caption}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AllPostsPage;
