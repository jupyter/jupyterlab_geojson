# jupyterlab_geojson

A JupyterLab extension for rendering GeoJSON data.


## Prerequisites

* JupyterLab 0.3.0 or later

## Installation

To install using pip:

```bash
pip install jupyterlab_geojson
jupyter labextension install --py --sys-prefix jupyterlab_geojson
jupyter labextension enable --py --sys-prefix jupyterlab_geojson
```

## Development

For a development install (requires npm version 4 or later), do the following in the repository directory:

```bash
npm install
pip install -e .
jupyter labextension install --symlink --py --sys-prefix jupyterlab_geojson
jupyter labextension enable --py --sys-prefix jupyterlab_geojson
```

To rebuild the extension bundle:

```bash
npm run build
```

## Leaflet modification

In order for webpack to bundle leaflet 1.0.0, apply this patch to the `leaflet/dist/leaflet.css` file in the `node_modules` directory and run `npm build` again:

```
--- node_modules/leaflet/dist/leaflet.css	2016-09-27 03:09:26.000000000 -0700
+++ leaflet.css	2016-09-27 17:28:19.000000000 -0700
@@ -376,7 +376,7 @@
 
 /* Default icon URLs */
 .leaflet-default-icon-path {
-	background-image: url(images/);
+	background-image: url(images/layers.png);;
 	}
 
```

See https://github.com/Leaflet/Leaflet/issues/4849 for details.

## License

We use a shared copyright model that enables all contributors to maintain the
copyright on their contributions.

All code is licensed under the terms of the revised BSD license. See the LICENSE file
for details.
