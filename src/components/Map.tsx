import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix missing marker icons issue in Leaflet
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const icon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const Map: React.FC = () => {
  const position: [number, number] = [38.87243, -84.46212]; // Example coordinates (Northern KY)

  return (
    <MapContainer center={position} zoom={15} className="leaflet-container">
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://carto.com/">CARTO</a>'
      />
      <Marker position={position} icon={icon}>
        <Popup>Morning View Meadows</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
