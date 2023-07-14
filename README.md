# SPARQLing Unicorn QGIS Plugin Testdata
  
This repository contains sample data for the SPARQLing Unicorn QGIS plugin.
                   
This data may be loaded in the plugin dialog and queried for its contents.  
                                        
## SPARQLing Unicorn QGIS Plugin Ontology Documentation: Github Action 
                                
Included in this repository is a showcase for the standalone [SPARQLing Unicorn Ontology Documentation Script](https://github.com/sparqlunicorn/sparqlunicornGoesGIS-ontdoc).
        
The script is used in a Github Action, as an external workflow to generate HTML documentation for the two TTL files in this repository. 
 
```
uses: sparqlunicorn/sparqlunicornGoesGIS-ontdoc/.github/workflows/udoc.yml@main
    with: 
        rdffilepath: LimesNoricum_result.ttl LimesDaicus_result.ttl
        docpath: docs
        prefixns: http://lod.squirrel.link/data/limes/
        prefixnsshort: limes
        indexpages: true
        createcollections: false
        createnonNSPages: false
        createVOWL: false
        ogcapifeatures: true
        offlinecompat: false
        iiif: true
        metadatatable: false
        preferredlang: en
        license: CC-BY-SA 4.0
        logourl: http://mylogo.png
        ghpages: true
        ghpagesbranch: gh-pages
        ghpagesfolder: /
```
  
The workflow may be called using the following paramters:
* **rdffilepath (required)**: A whitespace-separated list of RDF files
* **docpath**: The path where the HTML documentation should be stored, optionally also a list of paths
* **prefixns (required)**: The prefix of the RDF data which should be documented with HTML
* **prefixnsshort**: The short name of the data prefix as it should appear in the HTML documentation
* **indexpages**: If true, generates index pages for navigation
* **createcollections**: If true, generates SKOS collections for items of the same class for navigation purposes
* **createnonNSPages**: If true, generates pages for object URIs which are not in the **prefixns**
* **createVOWL**: If true, generates a visual owl representation of the class structure on the main index page
* **ogcapifeatures**: If true, generates OGC API Features compatible JSON files
* **offlinecompat**: If true, generates a version of the documentation that works offline
* **iiif**: If true, generates IIIF manifests for connected media files
* **metadatatable**: If true, creates a second table per page which includes only triples in predefined metadata namespaces
* **preferredlang**: Defines the preferred label language for multilingual graphs (default: en)
* **license**: One of the following licenses or leave empty for no license 
  * All rights reserved 
  * CC BY 4.0 
  * CC BY-SA 4.0 
  * CC BY-NC 4.0 
  * CC BY-NC-SA 4.0 
  * CC BY-ND 4.0 
  * CC BY-NC-ND 4.0 
  * CC0
* **logourl**: A url pointing to a logo which will be displayed on its designated area in the HTML template
* **ghpages**: If true, publishes the results of the HTML documentation to a branch gh-pages, which may be published as a Github Page
* **ghpagesbranch**: An alternative branch name in which Github pages should be deployed
* **ghpagesfolder**: The folder in the given ghpages branch in which the documentation should be deployed

## SPARQLing Unicorn QGIS Plugin Ontology Documentation: Data Access

Data can be accessed:
* In the webbrowser using the Github Page of this repository in HTML, JSON and TTL
* In QGIS as FeatureCollections using the links GithubPage/index.json
* Using a IIIF viewer using the link GithubPage/iiif
