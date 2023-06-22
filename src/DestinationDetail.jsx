import { FiArrowLeft } from "react-icons/fi";
import { Link } from "wouter";
import LinkArrowBackToHome from "./LinkArrowBackToHome";

function DestinationDetail({ destination, mapRef }) {
  return (
    <div className="h-full overflow-scroll sm:pt-20">
      <LinkArrowBackToHome mapRef={mapRef} />
      <h1 className="mx-12 my-4 border-y border-black p-2 text-center text-xl uppercase">
        {destination.city}
      </h1>
      <div className="px-12">
        <img src={destination.imageSrc} alt="" className="" />
      </div>
      <h2 className="mx-12  text-left text-2xl">{destination.titel}</h2>
      <p className="m-2 px-14">{destination.caption}</p>
      <div className="mx-12 flex flex-wrap">
        {destination.detailImageSrc.map((detailImg) => (
          <div className="h-1/2 w-1/2 p-2">
            <img className="" src={detailImg} />
          </div>
        ))}
      </div>

      {/* author card  */}

      <div className="ju mx-12 flex flex-col text-right">
        <div className="font-bold uppercase text-midnight">
          {destination.country},{" "}
        </div>
        <div className="">
          {destination.month} {destination.year}
        </div>
        <div className="flex flex-row-reverse justify-start border-t border-black p-2">
          <div className="rounded-full bg-white ">
            <img
              className="m-1 h-12 w-12 object-cover object-top p-2 md:h-14 md:w-14 "
              src={destination.authorImg}
            />
          </div>
          <p className="text-md mx-2 line-clamp-1 flex items-center justify-center font-bold text-gray-800 md:text-lg">
            {destination.author}
          </p>
        </div>
        <div>
          <img src={destination.detailImageSrc} alt="" />
        </div>
      </div>
    </div>
  );
}

export default DestinationDetail;
