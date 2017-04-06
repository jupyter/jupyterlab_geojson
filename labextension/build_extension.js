var build = require('@jupyterlab/extension-builder').build;
var path = require('path');

build({
  outPath: path.resolve('../jupyterlab_geojson/static')
});
