import React from 'react';
import './index.css';

export default class GeoJSON extends React.Component {

  render() {
      return (
        <div className="GeoJSON">
          {JSON.stringify(this.props.data)}
        </div>
      );
  }

}
