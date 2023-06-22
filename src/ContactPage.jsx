import LinkArrowBackToHome from "./LinkArrowBackToHome";
import { Link } from "@react-email/link";

function ContactPage({ mapRef }) {
  return (
    <div className="h-full overflow-scroll sm:pt-20">
      <LinkArrowBackToHome mapRef={mapRef} />

      <div className="mx-12 my-4 border-y border-black p-2 text-center text-xl uppercase">
        contact
      </div>
      <section className="mx-12 py-2">
        <h1 className="p-2 text-2xl">
          Living in a Blog–– travelling for a purpose
        </h1>
        <div className="p-2">
          for further information, commission and cooperation inquieries please
          contact us at:
        </div>
        <div className="text-right">
          <div className="">Studio</div>
          <div className="">Venusberg 34</div>
          <div className="">20459 Hamburg</div>
          <div className="font-bold uppercase text-midnight">Germany</div>
          <Link href="mailto:joceepaul@me.com">
            <div className="cursor-pointer pt-1 text-midnight">
              joceepaul@me.com
            </div>
          </Link>
        </div>
        <h2 className="p-4 text-xl sm:mx-12">
          This travelling blog aims to present the beauty and magic of
          traditional craft so together we can create a world wide community
          without borders. It was iniciated by Sandra Schollmeyer, a textile
          artist, designer and researcher based in Hmaburg, Germany.
        </h2>
      </section>
    </div>
  );
}

export default ContactPage;
