from IPython.display import display
import json


# Running `npm run build` will create static resources in the static
# directory of this Python package (and create that directory if necessary).


def _jupyter_labextension_paths():
    return [{
        'name': 'jupyterlab_geojson',
        'src': 'static',
    }]

def _jupyter_nbextension_paths():
    return [{
        'section': 'notebook',
        'src': 'static',
        'dest': 'jupyterlab_geojson',
        'require': 'jupyterlab_geojson/extension'
    }]


# A display function that can be used within a notebook. E.g.:
#   from jupyterlab_geojson import GeoJSON
#   GeoJSON(data)

def GeoJSON(data):
    bundle = {
        'application/geo+json': data,
        # 'application/json': data,
        'text/plain': json.dumps(data, indent=4)
    }
    display(bundle, raw=True)
