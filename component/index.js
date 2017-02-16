import React from 'react';
import './index.css';

export default class GeoJSONComponent extends React.Component {

  render() {
      return (
        <div className="GeoJSON">
          {JSON.stringify(this.props.data)}
        </div>
      );
  }

}
