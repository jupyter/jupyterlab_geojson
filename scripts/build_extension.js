// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

var buildExtension = require('@jupyterlab/extension-builder').buildExtension;

buildExtension({
        name: 'jupyterlab_geojson',
        entry: './lib/plugin.js',
        outputDir: './jupyterlab_geojson/static'
});
