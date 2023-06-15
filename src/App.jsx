import HeaderBar from "./HeaderBar";
import FooterBar from "./FooterBar";
import MainContent from "./MainContent";
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
    <main className="relativ z-0 h-full w-full bg-gradient-to-b from-water from-20% to-desert to-60%">
      <HeaderBar />
      <div className="overflow-y-scroll">
        <MapContainer destinations={destinations} />
        <MainContent destinations={destinations} />
      </div>
      <FooterBar />
    </main>
  );
}

export default App;
