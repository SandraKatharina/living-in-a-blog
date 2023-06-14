import HeaderBar from "./HeaderBar";
import FooterBar from "./FooterBar";
import DestinationsPreview from "./DestinationsPreview";
import MapContainer from "./MapContainer";
import { useEffect, useState } from "react";

function App() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetch("/destinations.json")
      .then((data) => data.json())
      .then((destinations) => setDestinations(destinations));
  }, []);

  return (
    <main className="relativ h-full w-full bg-gradient-to-b from-water from-20% to-desert to-60%">
      <HeaderBar />
      <MapContainer destinations={destinations} />
      <DestinationsPreview destinations={destinations} />
      <FooterBar />
    </main>
  );
}

export default App;
