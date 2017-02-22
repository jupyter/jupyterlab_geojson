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


# A display class that can be used within a notebook. E.g.:
#   from jupyterlab_geojson import GeoJSON
#   GeoJSON(data)
    
class GeoJSON(JSON):
    """A display class for displaying GeoJSON visualizations in the Jupyter Notebook and IPython kernel.
    
    Vega expects a JSON-able dict, not serialized JSON strings.

    Scalar types (None, number, string) are not allowed, only dict containers.
    """

    # @property
    # def data(self):
    #     return self._data
    # 
    # @data.setter
    # def data(self, data):
    #     if isinstance(data, str):
    #         data = json.loads(data)
    #     self._data = data

    def _data_and_metadata(self):
        return self.data, self.metadata
    
    def _ipython_display_(self):
        bundle = {
            'application/geo+json': self.data,
            'text/plain': '<jupyterlab_geojson.GeoJSON object>'
        }
        metadata = {
            'application/geo+json': self.metadata
        }
        display(bundle, metadata=metadata, raw=True) 
