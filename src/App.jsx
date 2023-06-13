import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import HeaderBar from "./HeaderBar";
import FooterBar from "./FooterBar";
import DestinationsPreview from "./DestinationsPreview";

function App() {
  return (
    <main className="relativ h-full w-full bg-gradient-to-b from-water from-20% to-desert to-60%">
      <HeaderBar />
      <Map
        initialViewState={{
          longitude: 9.993682,
          latitude: 53.551086,
          zoom: 0,
        }}
        style={{ height: 500 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
      >
        <Marker longitude={9.993682} latitude={53.551086} color="red" />
      </Map>
      <DestinationsPreview />
      <FooterBar />
    </main>
  );
}

export default App;
