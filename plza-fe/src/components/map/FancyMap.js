import React, { useState, useEffect } from "react";
import { Icon, Loader } from "semantic-ui-react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";

import API from "../../utils/API";
import LocationCard from "../locations/search/LocationCard";

export default function FancyMap(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [locations, setLocations] = useState([]);
  const [userLocation, setUserLocation] = useState({});

  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    width: props.width,
    height: props.height,
    zoom: 15
  });

  const [selectedMarker, setSelectedMarker] = useState({});
  const [isPopupVisible, setPopupVisiblility] = useState(false);

  const fetchLocations = () =>
    API.get("/locations/map")
      .then(response => {
        setIsLoading(true);
        setLocations(response.data.results);
        setUserLocation(response.data.userLocation);
        setIsLoading(false);
      })
      .catch(error => console.log("Error:", error));

  useEffect(() => {
    fetchLocations();
  }, []);

  // Whenever user location changes, update viewport
  useEffect(() => {
    setViewport(viewport => ({
      ...viewport,
      latitude: userLocation.userLatitude,
      longitude: userLocation.userLongitude
    }));
  }, [userLocation]);

  const onViewportChange = viewport => setViewport({ ...viewport });

  if (isLoading) {
    return <Loader active>Loading map...</Loader>;
  }

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={onViewportChange}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/grenuttag/ck4do0nf04awl1co2h6kb7b6y"
    >
      {locations.map(location => (
        <Marker
          key={location.foursquare_id}
          latitude={location.latitude}
          longitude={location.longitude}
        >
          <Icon
            color={location.location_id ? "red" : "orange"}
            size="big"
            name="map marker"
            onClick={() => {
              console.table(location);
              setPopupVisiblility(true);
              setSelectedMarker({ ...location });
            }}
          ></Icon>
        </Marker>
      ))}

      {isPopupVisible && (
        <Popup
          tipSize={5}
          anchor="bottom"
          latitude={selectedMarker.latitude}
          longitude={selectedMarker.longitude}
          onClose={() => setPopupVisiblility(false)}
        >
          <LocationCard venue={selectedMarker} />
        </Popup>
      )}
    </ReactMapGL>
  );
}

FancyMap.defaultProps = {
  width: "100vw",
  height: "100vh"
};
