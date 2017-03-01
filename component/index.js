import React from 'react';
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

Leaflet.Icon.Default.imagePath = 'https://unpkg.com/leaflet@1.0.2/dist/images/';
const URL_TEMPLATE = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const LAYER_OPTIONS = {
  attribution: 'Map data (c) <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
  minZoom: 0,
  maxZoom: 18
};

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.element = null;
    this.map = null;
    this.geoJSONLayer = null;
  }

  componentDidMount() {
    const { data, metadata } = this.props;
    this.map = Leaflet.map(this.element);
    this.map.scrollWheelZoom.disable();
    this.tileLayer = Leaflet.tileLayer(
        (metadata && metadata.tileUrlTemplate) || URL_TEMPLATE,
        (metadata && metadata.tileLayerOptions) || LAYER_OPTIONS
      )
      .addTo(this.map);
    this.geoJSONLayer = Leaflet.geoJson(data).addTo(this.map);
    this.fitBounds();
  }

  componentDidUpdate(prevProps) {
    this.map.removeLayer(this.geoJSONLayer);
    this.geoJSONLayer = Leaflet.geoJson(this.props.data).addTo(this.map);
    this.fitBounds();
  }

  render() {
    return (
      <div
        ref={element => this.element = element}
        style={{
          width: this.props.width || '100%',
          height: this.props.height || '100%'
        }}
      />
    );
  }

  fitBounds = () => {
    this.map.fitBounds(this.geoJSONLayer.getBounds());
    this.map.invalidateSize();
  };
}
