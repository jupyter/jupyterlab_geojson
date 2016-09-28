// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  IDocumentRegistry
} from 'jupyterlab/lib/docregistry';

import {
  JupyterLab, JupyterLabPlugin
} from 'jupyterlab/lib/application';

import {
  MapWidgetFactory
} from './widget';

import 'leaflet/dist/leaflet.css';

/**
 * The list of file extensions for maps.
 */
const EXTENSIONS = ['.geojson', '.json'];
const DEFAULT_EXTENSIONS = ['.geojson']

/**
 * The geojson file handler extension.
 */
export
const mapHandlerExtension: JupyterLabPlugin<void> = {
  id: 'jupyter.extensions.map-handler',
  requires: [IDocumentRegistry],
  activate: activateMapWidget,
  autoStart: true
};

export default mapHandlerExtension;

/**
 * Activate the map widget extension.
 */
function activateMapWidget(app: JupyterLab, registry: IDocumentRegistry): void {
    let options = {
      fileExtensions: EXTENSIONS,
      displayName: 'Map',
      modelName: 'text',
      defaultFor: DEFAULT_EXTENSIONS,
      preferKernel: false,
      canStartKernel: false
    };
    registry.addWidgetFactory(new MapWidgetFactory(), options);
}
