import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

function App() {
  return (
    <Map
      initialViewState={{
        longitude: 9.993682,
        latitude: 53.551086,
        zoom: 10,
      }}
      style={{ width: 400, height: 600 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
    >
      <Marker longitude={9.993682} latitude={53.551086} color="red" />
    </Map>
  );
}

export default App;
