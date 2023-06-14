import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

function MapContainer({ destinations }) {
  return (
    <div>
      <Map
        initialViewState={{
          longitude: 9.993682,
          latitude: 53.551086,
          zoom: 0,
        }}
        style={{ height: 420 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
      >
        <Marker longitude={9.993682} latitude={53.551086} color="red" />
      </Map>
    </div>
  );
}

export default MapContainer;
