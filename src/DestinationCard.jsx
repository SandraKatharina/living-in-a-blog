import { Link } from "wouter";

function DestinationCard({ destination, mapRef }) {
  return (
    <>
      <div
        className="m-4 h-[89%] w-2/3 flex-none rounded-lg bg-white sm:h-[85%] md:m-8 lg:h-1/2"
        key={destination.id}
      >
        <Link
          key={destination.id}
          href={"/destination/" + destination.id}
          onClick={(e) => {
            mapRef.current.easeTo({
              center: [destination.longitude, destination.latitude],
              zoom: 7,
            });
          }}
        >
          <img
            className="h-1/2 w-full cursor-pointer object-cover hover:shadow-xl md:h-1/2"
            src={destination.imageSrc}
            alt=""
          />
        </Link>

        <div className="px-4 pb-2">
          <div className="space-y-1 text-lg font-medium leading-6">
            <h3 className="mb-1 line-clamp-1 text-xl font-bold text-gray-800 md:text-2xl">
              {destination.titel}
            </h3>
          </div>
          <div className="text-xs md:text-sm">
            <p className="line-clamp-2">{destination.caption}</p>
            <Link key={destination.id} href={"/destination/" + destination.id}>
              <p className="mt-2 cursor-pointer text-right text-xs font-bold text-midnight hover:text-landscape">
                READ MORE
              </p>
            </Link>

            {/* author card  */}

            <div className="my-1 flex flex-row justify-between border-t border-black">
              <div className="flex flex-row justify-around">
                <img
                  className="m-1 h-10 w-10 object-cover object-top p-2 md:h-14 md:w-14"
                  src={destination.authorImg}
                />
                <p className="text-md line-clamp-1 flex items-center justify-center font-bold text-gray-800 md:text-lg">
                  {destination.author}
                </p>
              </div>
              <div className="flex flex-col text-right">
                <div className="font-bold uppercase text-midnight">
                  {destination.country},{" "}
                </div>
                <div className="">
                  {destination.month} {destination.year}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default DestinationCard;
