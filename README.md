# jupyterlab_geojson

A JupyterLab and Jupyter Notebook extension for rendering GeoJSON

![output renderer](http://g.recordit.co/i2yLx3WNWy.gif)

## Prerequisites

* JupyterLab ^0.20.0 and/or Notebook >=4.3.0

## Usage

To render GeoJSON output in IPython:

```python
from IPython.display import GeoJSON

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

```bash
# For JupyterLab
jupyter labextension install --py --sys-prefix jupyterlab_geojson
# For Notebook
pip install jupyterlab_geojson
jupyter nbextension install --py --sys-prefix jupyterlab_geojson
jupyter nbextension enable --py --sys-prefix jupyterlab_geojson
```

## Development

```bash
pip install -e .
# For JupyterLab
cd labextension
jupyter labextension link .
# For Notebook
jupyter nbextension install --symlink --py --sys-prefix jupyterlab_geojson
jupyter nbextension enable --py --sys-prefix jupyterlab_geojson
```
