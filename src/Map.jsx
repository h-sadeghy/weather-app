import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MapUpdater({ latitude, longitude }) {
  const map = useMap();

  useEffect(() => {
    map.setView([latitude, longitude], 5);
  }, [latitude, longitude, map]);
}

export default function Map({ latitude, longitude, locationData }) {
  return (
    <div className="xl:pr-8   xl:w-full  mx-auto  ">
      <MapContainer
        center={[latitude, longitude]}
        zoom={3}
        style={{ height: "400px", width: "700px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]}>
          <Popup>
            marker at {latitude} /{longitude}
          </Popup>
        </Marker>
        <MapUpdater latitude={latitude} longitude={longitude} />
      </MapContainer>
      <div className="flex flex-col  text-center  ">
        <h3>{locationData.name}</h3>
        <hr className="w-1/3 mx-auto" />
        <p>{locationData.localtime}</p>
        <hr className="w-1/3 mx-auto" />
        <p>{locationData.region}</p>
      </div>
    </div>
  );
}
