import HeaderBar from "./HeaderBar";
import FooterBar from "./FooterBar";

import MapContainer from "./MapContainer";
import DestinationCard from "./DestinationCard";
import DestinationDetail from "./DestinationDetail";
import { useEffect, useState, useRef } from "react";
import { Route } from "wouter";

function App() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetch("/destinations.json")
      .then((data) => data.json())
      .then((destinations) => setDestinations(destinations));
  }, []);

  const mapRef = useRef();

  return (
    <main className="z-0 h-full w-screen bg-gradient-to-b from-water from-20% to-desert to-45%">
      <HeaderBar mapRef={mapRef} />
      <div className="flex h-[calc(100vh-32px)] flex-col sm:flex-row-reverse">
        <div className="z-10 h-1/2 w-full pt-20 sm:h-full sm:w-1/2">
          <MapContainer mapRef={mapRef} destinations={destinations} />
        </div>
        <div className="h-1/2 w-full sm:h-full sm:w-1/2">
          <Route path="/">
            <div className="flex-no-wrap scrolling-touch mb-8 flex h-[calc(50vh-32px)] items-start overflow-x-scroll sm:mb-0 sm:mt-12 sm:h-[calc(100vh-32px)] sm:flex-col sm:items-center sm:overflow-y-scroll">
              {destinations.map((destination) => (
                <DestinationCard
                  destination={destination}
                  key={destination.id}
                />
              ))}
            </div>
          </Route>

          <Route path="/destination/:id">
            {(params) => {
              const foundLocation = destinations.find(
                (destination) => Number(params.id) === destination.id
              );

              // mapRef.current.easeTo({
              //   center: [foundLocation.longitude, foundLocation.latitude],
              //   zoom: 10,
              // });

              return foundLocation ? (
                <DestinationDetail
                  destination={foundLocation}
                  key={foundLocation.id}
                ></DestinationDetail>
              ) : (
                <Redirect to="/" />
              );
            }}
          </Route>
        </div>
      </div>
      <FooterBar />
    </main>
  );
}

export default App;
