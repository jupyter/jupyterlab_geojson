from IPython.display import display, JSON

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

# A display class that can be used within a notebook. 
#   from jupyterlab_geojson import GeoJSON
#   GeoJSON(data)
    
class GeoJSON(JSON):
    """A display class for displaying GeoJSON visualizations in the Jupyter Notebook and IPython kernel.
    
    GeoJSON expects a JSON-able dict, not serialized JSON strings.

    Scalar types (None, number, string) are not allowed, only dict containers.
    """

    def _ipython_display_(self):
        bundle = {
            'application/geo+json': self.data,
            'text/plain': '<jupyterlab_geojson.GeoJSON object>'
        }
        metadata = {
            'application/geo+json': self.metadata
        }
        display(bundle, metadata=metadata, raw=True) 
