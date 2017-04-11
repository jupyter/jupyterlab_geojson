var build = require('@jupyterlab/extension-builder').build;
var path = require('path');

return build({
  outPath: path.resolve('../jupyterlab_geojson/static')
}).then(function() {
    console.log('finished')
}).catch(function(err) {
    console.log('errorer');
    console.error(err);
})
