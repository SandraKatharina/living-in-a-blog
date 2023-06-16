import { Link } from "wouter";

function DestinationCard({ destinations }) {
  return (
    <>
      {destinations.map((destination) => (
        <div
          className="m-8 w-2/3 flex-none rounded-lg bg-white"
          key={destination.id}
        >
          <div className="aspect-w-16 aspect-h-9">
            <Link key={destination.id} href={destination.target}>
              <img
                className="h-52 w-full cursor-pointer object-none hover:shadow-xl"
                src={destination.imageSrc}
                alt=""
              />
            </Link>
          </div>
          <div className="px-4 pb-2">
            <div className="space-y-1 text-lg font-medium leading-6">
              <h3 className="mb-1 line-clamp-1 text-2xl font-bold text-gray-800">
                {destination.titel}
              </h3>
            </div>
            <div className="text-sm">
              <p className="line-clamp-2">{destination.caption}</p>
              <p className="mt-2 text-right text-xs font-bold text-midnight">
                READ MORE<span className="text-midnight"></span>
              </p>

              {/* author card  */}

              <div className="my-1 flex flex-row justify-around border-t border-black">
                <img
                  className="mt-1 h-12 w-12 rounded-full object-cover object-top"
                  src={destination.authorImg}
                />
                <p className="text-md line-clamp-1 flex items-center justify-center font-bold text-gray-800">
                  {destination.author}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
export default DestinationCard;
