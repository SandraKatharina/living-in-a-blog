function DestinationDetail({ destinations }) {
  return (
    <>
      <div>hello destination</div>
      {/* {destinations.map((destination) => (
        <div
          className="m-8 w-2/3 flex-none rounded-lg bg-white md:w-1/3 md:pb-4"
          key={destination.id}
        >
          <div className="">
            <img
              className="h-52 w-full object-none"
              src={destination.imageSrc}
              alt=""
            />
          </div>
          <div className="px-4 pb-2">
            <div className="space-y-1 text-lg font-medium leading-6">
              <h3 className="mb-2 line-clamp-1 text-2xl font-bold text-gray-800">
                {destination.titel}
              </h3>
            </div>
            <div className="text-md">
              <p className="line-clamp-2">{destination.caption}</p>
              <p className="mt-2 text-right text-xs font-bold text-midnight">
                READ MORE<span className="text-midnight"></span>
              </p>
              <hr className="my-2" />
              <div className="flex flex-row justify-around">
                <img
                  className="my-2 h-12 w-12 rounded-full object-cover object-top"
                  src={destination.authorImg}
                />
                <p className="text-md mb-2 line-clamp-1 flex items-center justify-center font-bold text-gray-800">
                  {destination.author}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))} */}
    </>
  );
}

export default DestinationDetail;
