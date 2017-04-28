# labextension

A JupyterLab extension for rendering GeoJSON

## Prerequisites

* `jupyterlab@^0.20.0`

## Development

Install dependencies and build Javascript:

```bash
npm install
npm run build
```

Install extension:

```bash
jupyter labextension link .
```

Uninstall extension:

```bash
jupyter labextension unlink .
```

Re-build Javascript:

```bash
npm run build
```

Watch `/src` directory and re-build on changes:

```bash
npm run watch
```

Manage extension

```bash
# Install
npm run extension:install
# Enable
npm run extension:enable
# Disable
npm run extension:disable
# Uninstall
npm run extension:uninstall
```
