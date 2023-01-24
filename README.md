# SPARQLing Unicorn QGIS Plugin Testdata

This repository contains sample data for the SPARQLing Unicorn QGIS plugin.

This data may be loaded in the plugin dialog and queried for its contents.

## SPARQLing Unicorn QGIS Plugin Ontology Documentation: Github Action

Included in this repository is a showcase for the standalone (https://github.com/sparqlunicorn/sparqlunicornGoesGIS-ontdoc)[SPARQLing Unicorn Ontology Documentation Script].

The script is used in a Github Action, as an external workflow to generate HTML documentation for the two TTL files in this repository.

`
uses: sparqlunicorn/sparqlunicornGoesGIS-ontdoc/.github/workflows/udoc.yml@main
    with: 
        rdffilepath: LimesNoricum_result.ttl LimesDaicus_result.ttl
        docpath: docs
        prefixns: http://lod.squirrel.link/data/limes/
        prefixnsshort: limes
        indexpages: true
        ghpages: true
`

The workflow may be called using the following paramters:
* rdffilepath: A whitespace-separated list of RDF files
* docpath: The path where the HTML documentation should be stored
* prefixns: The prefix of the RDF data which should be documented with HTML
* prefixnsshort: The short name of the data prefix as it should appear in the HTML documentation
* indexpages: If true, generates index pages for navigation
* ghpages: If true, publishes the results of the HTML documentation to a branch gh-pages, which may be published as a Github Page

