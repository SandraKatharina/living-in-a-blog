function AboutAuthorSection({ destination }) {
  return (
    <>
      <div className="mx-12 flex justify-around">
        <img
          className="h-40 w-40 rounded-full bg-white object-cover object-top p-4"
          src={destination.authorImg}
          alt=""
        />
      </div>
      <h1 className="mx-12 p-2 text-2xl">{destination.authorTitle}</h1>
      <div className="mx-14 text-right">
        <p className="font-bold uppercase text-midnight">
          based in {destination.authorLocation}
        </p>
        <p>contributing since {destination.authorSince}</p>
      </div>
      <p className="px-12 py-8">{destination.authorInfo}</p>
    </>
  );
}

export default AboutAuthorSection;
