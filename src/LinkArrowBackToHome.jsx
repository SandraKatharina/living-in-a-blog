import { FiArrowLeft } from "react-icons/fi";
import { Link } from "wouter";

function LinkArrowBackToHome() {
  return (
    <Link href="/">
      <FiArrowLeft className="fixed mt-4 h-12 w-12 cursor-pointer text-midnight hover:text-water md:hover:text-landscape" />
    </Link>
  );
}

export default LinkArrowBackToHome;
