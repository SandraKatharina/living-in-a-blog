import * as React from "react";
import { useState, useMemo } from "react";
import { render } from "react-dom";

import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import ControlPanel from "./ControlPanel";

function MapContainer({ destinations }) {
  const [popupInfo, setPopupInfo] = useState(null);

  const pins = destinations.map((destination) => (
    <Marker
      key={destination.id}
      longitude={destination.longitude}
      latitude={destination.latitude}
      anchor="bottom"
      onClick={(e) => {
        // If we let the click event propagates to the map, it will immediately close the popup
        // with `closeOnClick: true`
        e.originalEvent.stopPropagation();
        setPopupInfo(destination);
      }}
    ></Marker>
  ));

  return (
    <div>
      <Map
        initialViewState={{
          longitude: 9.993682,
          latitude: 53.551086,
          zoom: 2,
          bearing: 0,
          pitch: 0,
        }}
        style={{ height: 380 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
        scrollZoom={false}
      >
        <GeolocateControl position="top-left" />
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />
        <ScaleControl />

        {pins}

        {popupInfo && (
          <Popup
            anchor="top"
            longitude={Number(popupInfo.longitude)}
            latitude={Number(popupInfo.latitude)}
            onClose={() => setPopupInfo(null)}
          >
            <div>
              {popupInfo.city}, {popupInfo.country} |{" "}
              <a
                target="_new"
                href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${popupInfo.city}, ${popupInfo.country}`}
                className="text-bold text-midnight hover:text-landscape"
              >
                read more …
              </a>
            </div>
            <img
              className="h-40 w-full object-cover"
              src={popupInfo.imageSrc}
            />
            <div>
              {popupInfo.month} {popupInfo.year}
            </div>
          </Popup>
        )}

        {/* <Marker
          key={destinations.id}
          longitude={destinations.longitude}
          latitude={destinations.latitude}
          color="red"
        /> */}
        {/* <Marker longitude={9.993682} latitude={53.551086} color="red" /> */}
      </Map>
      <ControlPanel />
    </div>
  );
}

export default MapContainer;
