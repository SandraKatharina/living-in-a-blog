function DestinationCard({ destinations }) {
  return (
    <>
      {destinations.map((destination) => (
        <div
          className="m-8 w-2/3 flex-none rounded-lg bg-white md:w-1/3 md:pb-4"
          key={destination.id}
        >
          <a href="#" className="space-y-4">
            <div className="aspect-w-16 aspect-h-9">
              <img
                className="h-64 w-full object-none hover:object-scale-down"
                src={destination.imageSrc}
                alt=""
              />
            </div>
            <div className="px-4 py-2">
              <div className="space-y-1 text-lg font-medium leading-6">
                <h3 className="mb-2 line-clamp-2 text-2xl font-bold text-gray-800">
                  {destination.titel}
                </h3>
              </div>
              <div className="text-md">
                <p className="line-clamp-2">{destination.caption}</p>
                <p className="mt-2 text-sm font-medium text-midnight">
                  Read more<span className="text-midnight">…</span>
                </p>
              </div>
            </div>
          </a>
        </div>
      ))}
    </>
  );
}
export default DestinationCard;
