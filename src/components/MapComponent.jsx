import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MapContainer, TileLayer, Polygon, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function MapComponent({ projectId }) {
  const [mapData, setMapData] = useState(null);

  useEffect(() => {
    fetch(`http://hola/mapaBACKEND/get_mapa.php?proyecto_id=${projectId}`)
      .then((response) => response.json())
      .then((data) => setMapData(data))
      .catch((error) => console.error('Error loading map data:', error));
  }, [projectId]);

  if (!mapData) return <div>Loading map...</div>;

  return (
    <MapContainer
      center={[mapData.proyecto.lat, mapData.proyecto.lng]}
      zoom={15}
      scrollWheelZoom={true}
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {mapData.territorios.map((location) => (
        <Polygon
          key={location.territorio.id}
          positions={location.coordenadas.map((coord) => [coord.lat, coord.lng])}
          color={location.territorio.estado === 'disponible' ? 'green' : 'red'}
          fillOpacity={0.4}
        >
          <Popup>
            <strong>{location.territorio.nombre}</strong>
            <p>Superficie: {location.territorio.superficie} m²</p>
            <p>Precio M²: {location.territorio.precio_m2} $us</p>
            <p>Precio Lista: {location.territorio.precio_lista} $us</p>
            {location.territorio.estado === 'disponible' ? (
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border p-1">Plazo</th>
                    <th className="border p-1">CI</th>
                    <th className="border p-1">Cuota Mensual</th>
                    <th className="border p-1">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {location.condiciones_pago.map((cond, index) => (
                    <tr key={index}>
                      <td className="border p-1">{cond.plazo} años</td>
                      <td className="border p-1">{cond.ci}</td>
                      <td className="border p-1">{cond.cuota_mensual} $us</td>
                      <td className="border p-1">{cond.total} $us</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No está disponible</p>
            )}
          </Popup>
        </Polygon>
      ))}
    </MapContainer>
  );
}

MapComponent.propTypes = {
  projectId: PropTypes.number.isRequired, 
};
