import * as React from "react";
import { useState } from "react";

import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import ControlPanel from "./ControlPanel";
import { Link } from "wouter";

function MapContainer({ destinations, mapRef }) {
  const [popupInfo, setPopupInfo] = useState(null);

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
        ref={mapRef}
        className="h-1/2 md:h-full"
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
        scrollZoom={false}
      >
        <NavigationControl position="bottom-left" />

        {destinations.map((destination) => (
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
              // setPopupInfo(destination);
              mapRef.current.easeTo({
                center: [destination.longitude, destination.latitude],
                zoom: 10,
              });
            }}
          ></Marker>
        ))}

        {popupInfo && (
          <Popup
            anchor={undefined}
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
