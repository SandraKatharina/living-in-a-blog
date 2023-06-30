import { Link } from "wouter";

function AllPostsPageCard({ destination, mapRef }) {
  return (
    <div className="flex w-screen bg-midnight pl-12 md:w-full">
      <div className="h-40 w-full p-2">
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
            className="h-full w-full cursor-pointer object-cover md:w-full"
            src={destination.imageSrc}
            alt=""
          />
        </Link>
      </div>
      <div className="flex w-full flex-col p-2 leading-normal text-white md:w-full">
        <div>
          <h2 className="line-clamp-2 pt-1 text-xl font-bold md:text-2xl">
            {destination.titel}
          </h2>
          <p className="line-clamp-2 text-xs md:text-sm">
            {destination.caption}
          </p>
        </div>
        <div className="my-2 flex flex-row justify-between border-t border-white">
          <Link href="/about">
            <div className="flex cursor-pointer flex-row justify-around">
              <img
                className="m-1 hidden rounded-full bg-white object-cover object-top p-2 hover:object-scale-down sm:h-12 sm:w-12 md:h-14 md:w-14"
                src={destination.authorImg}
              />
              <p className="md:text-md line-clamp-1 flex items-center justify-center text-xs font-bold text-white hover:text-water">
                {destination.author}
              </p>
            </div>
          </Link>
          <div className="flex flex-col justify-center text-right">
            <div className="text-xs uppercase text-fuchsia-500">
              {destination.country},{" "}
            </div>
            <div className="text-xs">
              {destination.month} {destination.year}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllPostsPageCard;
