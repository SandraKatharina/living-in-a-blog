import LinkArrowBackToHome from "./LinkArrowBackToHome";

function AboutPage({ mapRef }) {
  return (
    <>
      <LinkArrowBackToHome mapRef={mapRef} />
      <section className="mx-12 p-4">
        <h1 className="text-2xl">About––</h1>
        <h2 className="">
          Travelling with passion for a reason. Visiting every angle of the
          world to explore the beauty and magic that lies within traditional
          crafts. Expressing and manifesting the art of the handmade to keep it
          alive by documentation and sharing.
        </h2>
      </section>

      <div className="mx-12 mb-4 border-y border-black p-2 text-center uppercase">
        meet the authors
      </div>
    </>
  );
}

export default AboutPage;
