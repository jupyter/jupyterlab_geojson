import {
  JupyterLabPlugin
} from 'jupyterlab/lib/application';

/**
 * Initialization data for the jupyterlab_geojson extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'jupyterlab_geojson',
  autoStart: true,
  activate: (app) => {
    console.log('JupyterLab extension jupyterlab_geojson is activated!');
  }
};

export default extension;
