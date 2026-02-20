import React, { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from 'react-leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import Icon from './Icon';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

function MapUpdater({ center, zoom }) {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.setView(center, zoom || 15, { animate: true, duration: 0.5 });
    }
  }, [center, zoom, map]);
  return null;
}

export default function Heatmap() {
  const [heatmapData, setHeatmapData] = useState([]);
  const [selectedWard, setSelectedWard] = useState(null);
  const [mapCenter, setMapCenter] = useState([11.0168, 76.9558]);
  const [mapZoom, setMapZoom] = useState(12);
  const markerRefs = useRef({});

  useEffect(() => {
    fetchHeatmap();
  }, []);

  const fetchHeatmap = async () => {
    try {
      const response = await axios.get(`${API_URL}/heatmap`);
      setHeatmapData(response.data);
    } catch (error) {
      console.error('Failed to fetch heatmap:', error);
    }
  };

  const getRiskColor = useCallback((risk) => {
    if (risk > 0.7) return '#ef4444';
    if (risk > 0.4) return '#f59e0b';
    return '#22d3ee';
  }, []);

  const zoomToWard = useCallback((ward) => {
    setSelectedWard(ward.ward);
    setMapCenter(ward.coordinates);
    setMapZoom(15);
    
    setTimeout(() => {
      const marker = markerRefs.current[ward.ward];
      if (marker) {
        marker.openPopup();
      }
    }, 300);
  }, []);

  // Memoize ward cards to prevent re-renders
  const wardCards = useMemo(() => (
    heatmapData.map((ward, index) => (
      <div
        key={ward.ward}
        onClick={() => zoomToWard(ward)}
        className={`ward-card rounded-xl p-3 cursor-pointer hover:scale-105 transition-transform shadow-lg info-card ${
          selectedWard === ward.ward ? 'ring-2 ring-white shadow-2xl' : ''
        }`}
        style={{ 
          backgroundColor: `${getRiskColor(ward.risk)}20`,
          borderLeft: `5px solid ${getRiskColor(ward.risk)}`,
          boxShadow: `0 4px 12px ${getRiskColor(ward.risk)}40`,
          animationDelay: `${index * 0.05}s`
        }}
      >
        <div className="text-xs font-bold truncate drop-shadow-md" style={{color: '#ffffff', textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}} title={ward.ward}>
          {ward.ward}
        </div>
        <div className="text-xl font-extrabold mt-1 stat-counter" style={{ 
          color: getRiskColor(ward.risk),
          textShadow: '2px 2px 4px rgba(0,0,0,0.9)',
          filter: 'brightness(1.3) saturate(1.2)'
        }}>
          {Math.round(ward.risk * 100)}%
        </div>
        <div className="text-xs font-semibold mt-1" style={{color: '#ffffff', textShadow: '1px 1px 3px rgba(0,0,0,0.8)'}}>
          {ward.cases} patients
        </div>
      </div>
    ))
  ), [heatmapData, selectedWard, getRiskColor, zoomToWard]);

  // Memoize markers to prevent re-renders
  const markers = useMemo(() => (
    heatmapData.map((ward) => (
      <CircleMarker
        key={ward.ward}
        center={ward.coordinates}
        radius={15 + ward.risk * 20}
        fillColor={getRiskColor(ward.risk)}
        color="#fff"
        weight={3}
        opacity={1}
        fillOpacity={0.7}
        ref={(ref) => {
          if (ref) {
            markerRefs.current[ward.ward] = ref;
          }
        }}
      >
        <Popup className="custom-popup">
          <div className="text-gray-900 p-2">
            <div className="text-xl font-bold mb-3 pb-2 border-b-2 border-gray-300" style={{
              color: getRiskColor(ward.risk),
              textShadow: '0 1px 2px rgba(0,0,0,0.1)'
            }}>
              {ward.ward}
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-700">Risk Level:</span>
                <span className="font-extrabold text-lg px-3 py-1 rounded-lg" style={{
                  color: getRiskColor(ward.risk),
                  backgroundColor: `${getRiskColor(ward.risk)}20`
                }}>
                  {Math.round(ward.risk * 100)}%
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-700">Infected Patients:</span>
                <span className="font-semibold text-gray-900">{ward.cases}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-700">Water pH:</span>
                <span className="font-semibold text-gray-900">{ward.ph}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-700">Turbidity:</span>
                <span className="font-semibold text-gray-900">{ward.turbidity} NTU</span>
              </div>
            </div>
          </div>
        </Popup>
      </CircleMarker>
    ))
  ), [heatmapData, getRiskColor]);

  return (
    <div className="glass rounded-2xl p-8 text-white map-container shadow-2xl border border-white/10">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold gradient-text flex items-center gap-3">
            <Icon name="map" className="w-10 h-10 text-cyan-400" />
            Geographic Risk Distribution
          </h2>
          <p className="text-white/60 text-sm mt-2 font-light">Interactive ward-level outbreak risk visualization</p>
        </div>
      </div>
      
      {/* All Wards Grid - Professional */}
      <div className="mb-6 p-4 bg-cyan-500/5 border border-cyan-500/20 rounded-xl">
        <h3 className="text-sm font-semibold text-cyan-300 mb-4 flex items-center gap-2">
          <Icon name="map" className="w-5 h-5" /> All 20 Wards - Click to View on Map
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 max-h-48 overflow-y-auto">
          {wardCards}
        </div>
      </div>

      {/* Map - Professional */}
      <div className="h-[500px] rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl">
        <MapContainer
          center={mapCenter}
          zoom={mapZoom}
          style={{ height: '100%', width: '100%' }}
          preferCanvas={true}
          zoomControl={true}
          attributionControl={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; OpenStreetMap'
            maxZoom={18}
            minZoom={10}
            className="map-tiles"
          />
          <MapUpdater center={mapCenter} zoom={mapZoom} />
          {markers}
        </MapContainer>
      </div>

      {/* Legend - Professional */}
      <div className="flex items-center justify-center gap-8 mt-6 text-sm bg-black/40 backdrop-blur-xl rounded-2xl p-5 border border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-red-500 shadow-xl shadow-red-500/50 border-2 border-white/20"></div>
          <div>
            <div className="font-bold text-white">High Risk</div>
            <div className="text-xs text-white/60">&gt;70% probability</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-orange-500 shadow-xl shadow-orange-500/50 border-2 border-white/20"></div>
          <div>
            <div className="font-bold text-white">Medium Risk</div>
            <div className="text-xs text-white/60">40-70% probability</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full shadow-xl shadow-cyan-400/50 border-2 border-white/20" style={{backgroundColor: '#22d3ee'}}></div>
          <div>
            <div className="font-bold text-white">Low Risk</div>
            <div className="text-xs text-white/60">&lt;40% probability</div>
          </div>
        </div>
      </div>

      {/* Selected Ward Info - Professional */}
      {selectedWard && (
        <div className="mt-6 p-5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-xl rounded-2xl text-center border-2 border-cyan-400/40 shadow-xl">
          <div className="flex items-center justify-center gap-3">
            <span className="text-sm opacity-80 font-medium">Currently Viewing:</span>
            <span className="font-bold text-xl text-cyan-300 drop-shadow-lg">{selectedWard}</span>
            <span className="px-3 py-1 bg-cyan-400/20 rounded-full text-xs font-bold border border-cyan-400/40">ACTIVE</span>
          </div>
        </div>
      )}
    </div>
  );
}
