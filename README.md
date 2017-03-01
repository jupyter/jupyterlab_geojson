# jupyterlab_geojson

A JupyterLab and Jupyter Notebook extension for rendering GeoJSON data

![output renderer](http://g.recordit.co/i2yLx3WNWy.gif)

## Prerequisites

* JupyterLab ^0.17.0 and/or Notebook >=4.3.0

## Usage

To render GeoJSON output in IPython:

```python
from jupyterlab_geojson import GeoJSON

GeoJSON({
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [-118.4563712, 34.0163116]
    }
})
```

To use a specific tileset:

```python
GeoJSON(data={
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [-118.4563712, 34.0163116]
    }
}, url_template="https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=[MAPBOX_ACCESS_TOKEN]", 
layer_options={
    "id": "mapbox.streets",
    "attribution" : '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
})
```

To render GeoJSON on Mars:

```python
GeoJSON(data={
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [11.8, -45.04]
    }
}, url_template="http://s3-eu-west-1.amazonaws.com/whereonmars.cartodb.net/{basemap_id}/{z}/{x}/{y}.png", 
layer_options={
    "basemap_id": "celestia_mars-shaded-16k_global",
    "attribution" : "Celestia/praesepe",
    "tms": True,
    "minZoom" : 0,
    "maxZoom" : 5
})
```

To render a .geojson file as a tree, simply open it:

![file renderer](http://g.recordit.co/5QvIyPP1kW.gif)

## Install

To install using pip:

```bash
pip install jupyterlab_geojson
# For JupyterLab
jupyter labextension install --py --sys-prefix jupyterlab_geojson
jupyter labextension enable --py --sys-prefix jupyterlab_geojson
# For Notebook
jupyter nbextension install --py --sys-prefix jupyterlab_geojson
jupyter nbextension enable --py --sys-prefix jupyterlab_geojson
```

## Development

### Set up using install script

Use the `install.sh` script to build the Javascript, install the Python package, and install/enable the notebook and lab extensions:

```bash
bash install.sh --sys-prefix
```

Use the `build.sh` script to rebuild the Javascript:

```bash
bash build.sh
```

### Set up manually

Alternatively, see the `README.md` in `/labextension` and `/nbextension` for extension-specific build instructions. 

To install the Python package:

```bash
pip install -e .
```

To install the extension for JupyterLab:

```bash
jupyter labextension install --symlink --py --sys-prefix jupyterlab_geojson
jupyter labextension enable --py --sys-prefix jupyterlab_geojson
```

To install the extension for Jupyter Notebook:

```bash
jupyter nbextension install --symlink --py --sys-prefix jupyterlab_geojson
jupyter nbextension enable --py --sys-prefix jupyterlab_geojson
```
