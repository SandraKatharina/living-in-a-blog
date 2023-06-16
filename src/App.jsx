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
    <main className="relativ z-0 h-full w-screen bg-gradient-to-b from-water from-20% to-desert to-60%">
      <HeaderBar />
      <div className="flex flex-col md:flex-row-reverse">
        <div className="z-10 md:h-20 md:w-1/2">
          <MapContainer destinations={destinations} />
        </div>
        <div className="md:w-1/2">
          <MainContent destinations={destinations} />
        </div>
      </div>
      <FooterBar />
    </main>
  );
}

export default App;
