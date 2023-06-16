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
import { Link } from "wouter";

function MapContainer({ destinations }) {
  const [popupInfo, setPopupInfo] = useState(null);

  const pins = destinations.map((destination) => (
    <Marker
      key={destination.id}
      longitude={destination.longitude}
      latitude={destination.latitude}
      anchor=""
      color="fuchsia"
      onClick={(e) => {
        // If we let the click event propagates to the map, it will immediately close the popup
        // with `closeOnClick: true`
        e.originalEvent.stopPropagation();
        setPopupInfo(destination);
      }}
    ></Marker>
  ));

  return (
    <>
      <Map
        initialViewState={{
          longitude: 9.993682,
          latitude: 53.551086,
          zoom: 0,
          bearing: 0,
          pitch: 0,
        }}
        style={{ height: 380 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
        scrollZoom={false}
      >
        <ScaleControl />
        <GeolocateControl position="bottom-left" />
        <FullscreenControl position="bottom-left" />
        <NavigationControl position="bottom-left" />

        {pins}

        {popupInfo && (
          <Popup
            anchor="top"
            longitude={Number(popupInfo.longitude)}
            latitude={Number(popupInfo.latitude)}
            onClose={() => setPopupInfo(null)}
          >
            <div className="w-36">
              {popupInfo.city}, {popupInfo.country} |{" "}
              <Link
                target="_new"
                href={popupInfo.target}
                className="text-[9px] font-bold text-midnight hover:text-landscape"
              >
                READ MORE
              </Link>
            </div>
            <img
              className="h-24 w-full object-cover"
              src={popupInfo.imageSrc}
            />
            <div>
              {popupInfo.month} {popupInfo.year}
            </div>
          </Popup>
        )}
      </Map>
      <ControlPanel />
    </>
  );
}

export default MapContainer;
