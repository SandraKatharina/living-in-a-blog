import HeaderBar from "./HeaderBar";
import FooterBar from "./FooterBar";

import MapContainer from "./MapContainer";
import DestinationCard from "./DestinationCard";
import DestinationDetail from "./DestinationDetail";
import { useEffect, useState, useRef } from "react";
import { Route, Redirect } from "wouter";
import AboutPage from "./AboutPage";
import AboutAuthorSection from "./AboutAuthorSection";
import ContactPage from "./ContactPage";

function App() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetch("/destinations.json")
      .then((data) => data.json())
      .then((destinations) => {
        destinations.sort((a, b) => b.year - a.year);
        setDestinations(destinations);
      });
  }, []);

  const mapRef = useRef();

  return (
    <main className="z-0 h-full w-screen bg-gradient-to-b from-water from-20% to-desert to-45%">
      <HeaderBar mapRef={mapRef} destinations={destinations} />

      <div className="flex h-[calc(100vh-32px)] flex-col md:flex-row-reverse">
        <div className="z-10 h-1/2 w-full pt-20 md:h-full md:w-1/2">
          <MapContainer mapRef={mapRef} destinations={destinations} />
        </div>
        <div className="h-1/2 w-full md:h-full md:w-1/2">
          <Route path="/">
            <div className="mb-8 flex h-[calc(50vh-32px)] items-start overflow-x-scroll md:mb-0 md:mt-12 md:h-[calc(100vh-32px)] md:flex-col md:items-center md:overflow-y-scroll">
              {destinations.map((destination) => (
                <DestinationCard
                  destination={destination}
                  mapRef={mapRef}
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

              return foundLocation ? (
                <DestinationDetail
                  destination={foundLocation}
                  mapRef={mapRef}
                  key={foundLocation.id}
                ></DestinationDetail>
              ) : (
                <Redirect to="/" />
              );
            }}
          </Route>

          <Route path="/about">
            <div className="h-full overflow-scroll md:pt-20">
              <div>
                <AboutPage mapRef={mapRef} />
              </div>
              {destinations.map((destination) => (
                <AboutAuthorSection
                  destination={destination}
                  key={destination.id}
                />
              ))}
            </div>
          </Route>
          <Route path="/contact">
            <ContactPage mapRef={mapRef} />
          </Route>
        </div>
      </div>
      <FooterBar />
    </main>
  );
}

export default App;
