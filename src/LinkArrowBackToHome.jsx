import { FiArrowLeft } from "react-icons/fi";
import { Link } from "wouter";

function LinkArrowBackToHome({ mapRef }) {
  return (
    <Link
      href="/"
      onClick={(e) => {
        e.mapRef.current.easeTo({
          center: [9.993682, 0.993682],
          zoom: 0,
        });
      }}
    >
      <FiArrowLeft className="fixed mt-4 h-12 w-12 cursor-pointer text-midnight hover:text-water md:hover:text-landscape" />
    </Link>
  );
}

export default LinkArrowBackToHome;
