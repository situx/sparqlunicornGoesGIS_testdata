var vowlresult={
 "_comment": "Created with pyowl2vowl (version 0.1) as part of the SPARQLing Unicorn QGIS Plugin",
 "header": {
  "prefixList": {
   "brick": "https://brickschema.org/schema/Brick#",
   "csvw": "http://www.w3.org/ns/csvw#",
   "dc": "http://purl.org/dc/elements/1.1/",
   "dcat": "http://www.w3.org/ns/dcat#",
   "dcmitype": "http://purl.org/dc/dcmitype/",
   "dcterms": "http://purl.org/dc/terms/",
   "dcam": "http://purl.org/dc/dcam/",
   "doap": "http://usefulinc.com/ns/doap#",
   "foaf": "http://xmlns.com/foaf/0.1/",
   "geo": "http://www.opengis.net/ont/geosparql#",
   "odrl": "http://www.w3.org/ns/odrl/2/",
   "org": "http://www.w3.org/ns/org#",
   "prof": "http://www.w3.org/ns/dx/prof/",
   "prov": "http://www.w3.org/ns/prov#",
   "qb": "http://purl.org/linked-data/cube#",
   "schema": "https://schema.org/",
   "sh": "http://www.w3.org/ns/shacl#",
   "skos": "http://www.w3.org/2004/02/skos/core#",
   "sosa": "http://www.w3.org/ns/sosa/",
   "ssn": "http://www.w3.org/ns/ssn/",
   "time": "http://www.w3.org/2006/time#",
   "vann": "http://purl.org/vocab/vann/",
   "void": "http://rdfs.org/ns/void#",
   "wgs": "https://www.w3.org/2003/01/geo/wgs84_pos#",
   "owl": "http://www.w3.org/2002/07/owl#",
   "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
   "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
   "xsd": "http://www.w3.org/2001/XMLSchema#",
   "xml": "http://www.w3.org/XML/1998/namespace"
  },
  "baseIris": [
   "https://brickschema.org/schema/Brick#",
   "http://www.w3.org/ns/csvw#",
   "http://purl.org/dc/elements/1.1/",
   "http://www.w3.org/ns/dcat#",
   "http://purl.org/dc/dcmitype/",
   "http://purl.org/dc/terms/",
   "http://purl.org/dc/dcam/",
   "http://usefulinc.com/ns/doap#",
   "http://xmlns.com/foaf/0.1/",
   "http://www.opengis.net/ont/geosparql#",
   "http://www.w3.org/ns/odrl/2/",
   "http://www.w3.org/ns/org#",
   "http://www.w3.org/ns/dx/prof/",
   "http://www.w3.org/ns/prov#",
   "http://purl.org/linked-data/cube#",
   "https://schema.org/",
   "http://www.w3.org/ns/shacl#",
   "http://www.w3.org/2004/02/skos/core#",
   "http://www.w3.org/ns/sosa/",
   "http://www.w3.org/ns/ssn/",
   "http://www.w3.org/2006/time#",
   "http://purl.org/vocab/vann/",
   "http://rdfs.org/ns/void#",
   "https://www.w3.org/2003/01/geo/wgs84_pos#",
   "http://www.w3.org/2002/07/owl#",
   "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
   "http://www.w3.org/2000/01/rdf-schema#",
   "http://www.w3.org/2001/XMLSchema#",
   "http://www.w3.org/XML/1998/namespace"
  ],
  "languages": []
 },
 "namespace": [],
 "class": [
  {
   "id": 3,
   "type": "http://www.w3.org/2000/01/rdf-schema#Datatype"
  },
  {
   "id": 7,
   "type": "http://www.w3.org/2002/07/owl#Class"
  },
  {
   "id": 8,
   "type": "http://www.w3.org/2002/07/owl#Class"
  },
  {
   "id": 9,
   "type": "http://www.w3.org/2002/07/owl#Class"
  },
  {
   "id": 10,
   "type": "http://www.w3.org/2002/07/owl#Class"
  },
  {
   "id": 11,
   "type": "http://www.w3.org/2002/07/owl#Class"
  },
  {
   "id": 12,
   "type": "http://www.w3.org/2002/07/owl#Class"
  },
  {
   "id": 13,
   "type": "http://www.w3.org/2002/07/owl#Class"
  },
  {
   "id": 14,
   "type": "http://www.w3.org/2002/07/owl#Class"
  },
  {
   "id": 15,
   "type": "http://www.w3.org/2002/07/owl#Class"
  }
 ],
 "classAttribute": [
  {
   "id": 3,
   "iri": "http://www.opengis.net/ont/geosparql#wktLiteral",
   "baseIRI": "http://www.opengis.net/ont/geosparql",
   "instances": 0,
   "label": "Legionslager",
   "annotations": {},
   "subClasses": [],
   "superClasses": [
    "9"
   ]
  },
  {
   "id": 7,
   "iri": "http://archaeoinformatics.link/ontology#LegionaryCamp",
   "baseIRI": "http://archaeoinformatics.link/ontology",
   "instances": 0,
   "label": "Kastell",
   "annotations": {},
   "subClasses": [],
   "superClasses": [
    "9"
   ]
  },
  {
   "id": 8,
   "iri": "http://archaeoinformatics.link/ontology#MilitaryCamp",
   "baseIRI": "http://archaeoinformatics.link/ontology",
   "instances": 0,
   "label": {
    "IRI-based": "MilitaryCamp"
   },
   "annotations": {},
   "subClasses": [
    "7",
    "8"
   ],
   "superClasses": [
    "13"
   ]
  },
  {
   "id": 9,
   "iri": "http://www.opengis.net/ont/geosparql#Feature",
   "baseIRI": "http://www.opengis.net/ont/geosparql",
   "instances": 0,
   "label": {
    "IRI-based": "Feature"
   },
   "annotations": {},
   "subClasses": [],
   "superClasses": [
    "14"
   ]
  },
  {
   "id": 10,
   "iri": "http://www.opengis.net/ont/geosparql#FeatureCollection",
   "baseIRI": "http://www.opengis.net/ont/geosparql",
   "instances": 0,
   "label": {
    "IRI-based": "FeatureCollection"
   },
   "annotations": {},
   "subClasses": [
    "15"
   ],
   "superClasses": [
    "13"
   ]
  },
  {
   "id": 11,
   "iri": "http://www.opengis.net/ont/geosparql#Geometry",
   "baseIRI": "http://www.opengis.net/ont/geosparql",
   "instances": 0,
   "label": {
    "IRI-based": "Geometry"
   },
   "annotations": {},
   "subClasses": [],
   "superClasses": [
    "14"
   ]
  },
  {
   "id": 12,
   "iri": "http://www.opengis.net/ont/geosparql#GeometryCollection",
   "baseIRI": "http://www.opengis.net/ont/geosparql",
   "instances": 0,
   "label": {
    "IRI-based": "GeometryCollection"
   },
   "annotations": {},
   "subClasses": [
    "9",
    "11"
   ],
   "superClasses": []
  },
  {
   "id": 13,
   "iri": "http://www.opengis.net/ont/geosparql#SpatialObject",
   "baseIRI": "http://www.opengis.net/ont/geosparql",
   "instances": 0,
   "label": {
    "IRI-based": "SpatialObject"
   },
   "annotations": {},
   "subClasses": [
    "10",
    "12"
   ],
   "superClasses": []
  },
  {
   "id": 14,
   "iri": "http://www.opengis.net/ont/geosparql#SpatialObjectCollection",
   "baseIRI": "http://www.opengis.net/ont/geosparql",
   "instances": 0,
   "label": {
    "IRI-based": "SpatialObjectCollection"
   },
   "annotations": {},
   "subClasses": [],
   "superClasses": [
    "11"
   ]
  },
  {
   "id": 15,
   "iri": "http://www.opengis.net/ont/sf#Point",
   "baseIRI": "http://www.opengis.net/ont/sf",
   "instances": 0,
   "label": {
    "IRI-based": "Point"
   },
   "annotations": {},
   "subClasses": [],
   "superClasses": []
  }
 ],
 "property": [
  {
   "id": 0,
   "type": "rdf:Property"
  },
  {
   "id": 1,
   "type": "owl:AnnotationProperty"
  },
  {
   "id": 2,
   "type": "owl:AnnotationProperty"
  },
  {
   "id": 4,
   "type": "owl:ObjectProperty"
  },
  {
   "id": 5,
   "type": "owl:ObjectProperty"
  },
  {
   "id": 6,
   "type": "owl:DatatypeProperty"
  },
  {
   "id": 16,
   "type": "http://www.opengis.net/ont/geosparql#FeatureCollection"
  },
  {
   "id": 17,
   "type": "http://www.opengis.net/ont/geosparql#GeometryCollection"
  },
  {
   "id": 18,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 19,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 20,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 21,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 22,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 23,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 24,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 25,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 26,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 27,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 28,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 29,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 30,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 31,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 32,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 33,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 34,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 35,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 36,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 37,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 38,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 39,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 40,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 41,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 42,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 43,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 44,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 45,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 46,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 47,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 48,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 49,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 50,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 51,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 52,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 53,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 54,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 55,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 56,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 57,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 58,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 59,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 60,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 61,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 62,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 63,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 64,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 65,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 66,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 67,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 68,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 69,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 70,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 71,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 72,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 73,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 74,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 75,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 76,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 77,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 78,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 79,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 80,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 81,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 82,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 83,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 84,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 85,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 86,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 87,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 88,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 89,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 90,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 91,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 92,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 93,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 94,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 95,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 96,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 97,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 98,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 99,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 100,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 101,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 102,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 103,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 104,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 105,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 106,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 107,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 108,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 109,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 110,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 111,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 112,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 113,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 114,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 115,
   "type": "http://archaeoinformatics.link/ontology#MilitaryCamp"
  },
  {
   "id": 116,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 117,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 118,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 119,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 120,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 121,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 122,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 123,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 124,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 125,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 126,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 127,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 128,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 129,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 130,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 131,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 132,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 133,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 134,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 135,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 136,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 137,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 138,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 139,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 140,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 141,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 142,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 143,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 144,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 145,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 146,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 147,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 148,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 149,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 150,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 151,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 152,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 153,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 154,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 155,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 156,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 157,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 158,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 159,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 160,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 161,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 162,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 163,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 164,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 165,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 166,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 167,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 168,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 169,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 170,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 171,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 172,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 173,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 174,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 175,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 176,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 177,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 178,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 179,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 180,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 181,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 182,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 183,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 184,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 185,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 186,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 187,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 188,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 189,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 190,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 191,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 192,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 193,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 194,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 195,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 196,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 197,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 198,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 199,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 200,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 201,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 202,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 203,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 204,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 205,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 206,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 207,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 208,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 209,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 210,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 211,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 212,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 213,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 214,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 215,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 216,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 217,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 218,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 219,
   "type": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "id": 220,
   "type": "http://archaeoinformatics.link/ontology#LegionaryCamp"
  },
  {
   "id": 221,
   "type": "http://archaeoinformatics.link/ontology#LegionaryCamp"
  },
  {
   "id": 222,
   "type": "http://archaeoinformatics.link/ontology#LegionaryCamp"
  },
  {
   "id": 223,
   "type": "http://archaeoinformatics.link/ontology#LegionaryCamp"
  },
  {
   "id": 224,
   "type": "http://archaeoinformatics.link/ontology#LegionaryCamp"
  },
  {
   "id": 225,
   "type": "http://archaeoinformatics.link/ontology#LegionaryCamp"
  }
 ],
 "propertyAttribute": [
  {
   "id": 0,
   "iri": "n9a9919993b004d55a5f568f24c701edab1",
   "baseIRI": "n9a9919993b004d55a5f568f24c701edab",
   "instances": 0,
   "label": {
    "IRI-based": "n9a9919993b004d55a5f568f24c701edab1"
   },
   "annotations": {},
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 1,
   "iri": "http://www.w3.org/2000/01/rdf-schema#comment",
   "baseIRI": "http://www.w3.org/2000/01/rdf-schema",
   "instances": 0,
   "label": {
    "IRI-based": "comment"
   },
   "annotations": {},
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 2,
   "iri": "http://www.w3.org/2000/01/rdf-schema#label",
   "baseIRI": "http://www.w3.org/2000/01/rdf-schema",
   "instances": 0,
   "label": {
    "IRI-based": "label"
   },
   "annotations": {},
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 4,
   "iri": "http://www.opengis.net/ont/geosparql#hasGeometry",
   "baseIRI": "http://www.opengis.net/ont/geosparql",
   "instances": 0,
   "label": "member",
   "annotations": {},
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 5,
   "iri": "http://www.w3.org/2000/01/rdf-schema#member",
   "baseIRI": "http://www.w3.org/2000/01/rdf-schema",
   "instances": 0,
   "label": {
    "IRI-based": "member"
   },
   "annotations": {},
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 6,
   "iri": "http://www.opengis.net/ont/geosparql#asWKT",
   "baseIRI": "http://www.opengis.net/ont/geosparql",
   "instances": 0,
   "label": "Limes Daicus Features",
   "annotations": {
    "http://www.w3.org/2000/01/rdf-schema#member": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#member",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/9ba7d74c-175e-48c8-9403-dbbdd650ed22",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 16,
   "iri": "http://lod.squirrel.link/data/limes/daicus/LimesDaicusFeatures",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Limes Daicus Geometries",
   "annotations": {
    "http://www.w3.org/2000/01/rdf-schema#member": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#member",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/9ba7d74c-175e-48c8-9403-dbbdd650ed22_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 17,
   "iri": "http://lod.squirrel.link/data/limes/daicus/LimesDaicusGeometries",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell S\u0103pata de Jos I",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/a6ec226a-3c2a-444a-9221-839201e1135f_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 18,
   "iri": "http://lod.squirrel.link/data/limes/daicus/a6ec226a-3c2a-444a-9221-839201e1135f",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell C\u0103tunele",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/aadec8db-70f9-4c40-833a-2a7c39c631d2_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 19,
   "iri": "http://lod.squirrel.link/data/limes/daicus/aadec8db-70f9-4c40-833a-2a7c39c631d2",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Inl\u0103ceni",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/ae458e0d-85d0-4756-b265-db4db5bb7fe2_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "Kohortenkastell",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 20,
   "iri": "http://lod.squirrel.link/data/limes/daicus/ae458e0d-85d0-4756-b265-db4db5bb7fe2",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell S\u0103mbotin (Castra Traiana)",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/af909713-68f5-4b6d-89d5-03f7fc7fd5c1_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 21,
   "iri": "http://lod.squirrel.link/data/limes/daicus/af909713-68f5-4b6d-89d5-03f7fc7fd5c1",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Olteni",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/b0524f84-a9d2-45fa-9f69-d8164ad73440_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "Kohortenkastell",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 22,
   "iri": "http://lod.squirrel.link/data/limes/daicus/b0524f84-a9d2-45fa-9f69-d8164ad73440",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Sl\u0103veni",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/b0cccdd1-2478-40bc-add2-a0e1bad88feb_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 23,
   "iri": "http://lod.squirrel.link/data/limes/daicus/b0cccdd1-2478-40bc-add2-a0e1bad88feb",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Romanasi (Largiana)",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/b5cf0c45-ec51-4710-a03a-75e7dc30a7a3_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "Kohortenkastell",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 24,
   "iri": "http://lod.squirrel.link/data/limes/daicus/b5cf0c45-ec51-4710-a03a-75e7dc30a7a3",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Buciumi",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/b6e369cd-722a-4a1c-a984-538bb26f3777_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "Kohortenkastell",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 25,
   "iri": "http://lod.squirrel.link/data/limes/daicus/b6e369cd-722a-4a1c-a984-538bb26f3777",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Sighisoara",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/bd14e9f3-dd38-4329-a655-60b00fd8d5b7_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 26,
   "iri": "http://lod.squirrel.link/data/limes/daicus/bd14e9f3-dd38-4329-a655-60b00fd8d5b7",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Odorheiul Secuiesc",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/bf339c52-9ac1-4b87-94ab-2dc33bc7d3e4_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 27,
   "iri": "http://lod.squirrel.link/data/limes/daicus/bf339c52-9ac1-4b87-94ab-2dc33bc7d3e4",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Sarateni",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/c3451d14-c4ee-42be-b918-af9735167f5f_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 28,
   "iri": "http://lod.squirrel.link/data/limes/daicus/c3451d14-c4ee-42be-b918-af9735167f5f",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Albota",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/c3a471a8-ab67-4e9c-b127-1eff017b0cb4_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 29,
   "iri": "http://lod.squirrel.link/data/limes/daicus/c3a471a8-ab67-4e9c-b127-1eff017b0cb4",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Teregova (Ad Pannonios)",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/c8ecf3da-c535-41df-b06e-298cd8542633_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 30,
   "iri": "http://lod.squirrel.link/data/limes/daicus/c8ecf3da-c535-41df-b06e-298cd8542633",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Eno\u015fe\u015fti (Acidava)",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/cba75304-f136-465d-90fb-56dff3acc018_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 31,
   "iri": "http://lod.squirrel.link/data/limes/daicus/cba75304-f136-465d-90fb-56dff3acc018",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Banatska Palanka",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/d2adbbd5-f4a7-471d-a817-b28e37bcbfb1_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "Kohortenkastell / Alenkastell",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 32,
   "iri": "http://lod.squirrel.link/data/limes/daicus/d2adbbd5-f4a7-471d-a817-b28e37bcbfb1",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Ili\u015fua (Arcobara)",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/d92ef45f-91c4-442e-b279-61f17fbccb7c_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 33,
   "iri": "http://lod.squirrel.link/data/limes/daicus/d92ef45f-91c4-442e-b279-61f17fbccb7c",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Ghioca",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/e0423dfe-4fdf-4bf6-8453-97d7bee4d031_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 34,
   "iri": "http://lod.squirrel.link/data/limes/daicus/e0423dfe-4fdf-4bf6-8453-97d7bee4d031",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Valea Urluii",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/e2573931-d743-40c3-a6b7-08ffeb244daa_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 35,
   "iri": "http://lod.squirrel.link/data/limes/daicus/e2573931-d743-40c3-a6b7-08ffeb244daa",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Cincsor",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/e3899f66-1234-4a44-b16e-2ead1e0bf696_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 36,
   "iri": "http://lod.squirrel.link/data/limes/daicus/e3899f66-1234-4a44-b16e-2ead1e0bf696",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell C\u0103ciul\u0103te\u0219ti",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/e69e6cb2-cded-446c-b159-daec78476f43_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 37,
   "iri": "http://lod.squirrel.link/data/limes/daicus/e69e6cb2-cded-446c-b159-daec78476f43",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Aizis",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/e811fe5a-92d2-43a0-a572-51bc5942e242_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 38,
   "iri": "http://lod.squirrel.link/data/limes/daicus/e811fe5a-92d2-43a0-a572-51bc5942e242",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell R\u0103carii de Jos",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/ec646e12-636f-4c8c-96c2-0f46833adf1c_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "Auxiliarkastell",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 39,
   "iri": "http://lod.squirrel.link/data/limes/daicus/ec646e12-636f-4c8c-96c2-0f46833adf1c",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Aradul Nou",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/ed79872f-dcb1-48d0-a008-5a3c65432a67_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "Kohortenkastell (?)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 40,
   "iri": "http://lod.squirrel.link/data/limes/daicus/ed79872f-dcb1-48d0-a008-5a3c65432a67",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Borosneu Mare",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/f35f2d3f-8925-4139-9e9b-cf07ee5aaecb_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 41,
   "iri": "http://lod.squirrel.link/data/limes/daicus/f35f2d3f-8925-4139-9e9b-cf07ee5aaecb",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Sutoru",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/f42bb013-afeb-4044-9886-ece53cc813d4_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "Auxiliarkastell",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 42,
   "iri": "http://lod.squirrel.link/data/limes/daicus/f42bb013-afeb-4044-9886-ece53cc813d4",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Re\u015fca (Romula/Malva)",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/f81e10af-8e41-447d-b601-dcba5311199b_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 43,
   "iri": "http://lod.squirrel.link/data/limes/daicus/f81e10af-8e41-447d-b601-dcba5311199b",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Urluieni II",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/f8305d66-9429-43c0-b6e3-73721df9986b_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 44,
   "iri": "http://lod.squirrel.link/data/limes/daicus/f8305d66-9429-43c0-b6e3-73721df9986b",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell V\u0103r\u0103dia",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/fb3dfa9f-ac48-4ced-a8dc-2b635594cfdd_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "Kohortenkastell",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 45,
   "iri": "http://lod.squirrel.link/data/limes/daicus/fb3dfa9f-ac48-4ced-a8dc-2b635594cfdd",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Li\u015fteava",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/0ab5e10e-4fb0-4854-835b-389043840ee0_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 46,
   "iri": "http://lod.squirrel.link/data/limes/daicus/0ab5e10e-4fb0-4854-835b-389043840ee0",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Ruc\u0103r",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/0ccd99fd-62d1-4978-873a-106b1f5e3880_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 47,
   "iri": "http://lod.squirrel.link/data/limes/daicus/0ccd99fd-62d1-4978-873a-106b1f5e3880",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell S\u0103pata de Jos II",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/0e91c0e7-3991-4a45-89ed-382f7c74731a_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 48,
   "iri": "http://lod.squirrel.link/data/limes/daicus/0e91c0e7-3991-4a45-89ed-382f7c74731a",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Urluieni I",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/0f25c729-a3c7-4cb4-b063-ff72c0124b4f_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 49,
   "iri": "http://lod.squirrel.link/data/limes/daicus/0f25c729-a3c7-4cb4-b063-ff72c0124b4f",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell C\u0103\u015feiu (Samum)",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/0fe1d8dd-b425-4d55-ae80-2cd8d5d61ace_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 50,
   "iri": "http://lod.squirrel.link/data/limes/daicus/0fe1d8dd-b425-4d55-ae80-2cd8d5d61ace",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Or\u0103\u015ftioara de Sus",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/000d5176-6b9e-4065-a44f-d7b8f75b1199_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 51,
   "iri": "http://lod.squirrel.link/data/limes/daicus/000d5176-6b9e-4065-a44f-d7b8f75b1199",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Or\u0219ova (Dierna)",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/01189de6-024d-4022-96ff-eec7e4efee0c_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 52,
   "iri": "http://lod.squirrel.link/data/limes/daicus/01189de6-024d-4022-96ff-eec7e4efee0c",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Cigm\u0103u ",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/0203af0b-bc52-4f9f-b490-b2bc3fe431fc_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "Auxiliarkastell",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 53,
   "iri": "http://lod.squirrel.link/data/limes/daicus/0203af0b-bc52-4f9f-b490-b2bc3fe431fc",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Momote\u015fti (Rusidava)",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/06eb8de4-750e-4ed9-ad04-9bf16d61c975_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 54,
   "iri": "http://lod.squirrel.link/data/limes/daicus/06eb8de4-750e-4ed9-ad04-9bf16d61c975",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Cop\u0103ceni (Praetorium I)",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/096a9a4c-020f-4ce0-a4a6-993d50d08fea_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 55,
   "iri": "http://lod.squirrel.link/data/limes/daicus/096a9a4c-020f-4ce0-a4a6-993d50d08fea",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell R\u00e2ul Vadului",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/1b4b9c1f-cb64-4c02-976d-61c2147b0705_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 56,
   "iri": "http://lod.squirrel.link/data/limes/daicus/1b4b9c1f-cb64-4c02-976d-61c2147b0705",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastelle von Porolissum",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/1c936059-6af8-4f03-8e18-cc61f529c5f3_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "Auxiliarkastelle",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 57,
   "iri": "http://lod.squirrel.link/data/limes/daicus/1c936059-6af8-4f03-8e18-cc61f529c5f3",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Abrud (Alburnus Maior)",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/1d8f65a8-c30b-40f1-9676-2e1145691ac3_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 58,
   "iri": "http://lod.squirrel.link/data/limes/daicus/1d8f65a8-c30b-40f1-9676-2e1145691ac3",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Islaz-Razovica",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/1e218e82-f264-4241-a8e0-5efd9a1ec8a4_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 59,
   "iri": "http://lod.squirrel.link/data/limes/daicus/1e218e82-f264-4241-a8e0-5efd9a1ec8a4",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Pinoasa",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/10b043a5-bb2b-48af-a168-84046185d6f7_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 60,
   "iri": "http://lod.squirrel.link/data/limes/daicus/10b043a5-bb2b-48af-a168-84046185d6f7",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Romita",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/120e3991-1f39-4359-b810-37bb24aff05c_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "Kohortenkastell",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 61,
   "iri": "http://lod.squirrel.link/data/limes/daicus/120e3991-1f39-4359-b810-37bb24aff05c",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Comal\u0103u",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/1795d125-e071-4153-b07e-e147bb19ad65_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 62,
   "iri": "http://lod.squirrel.link/data/limes/daicus/1795d125-e071-4153-b07e-e147bb19ad65",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Mofleni (Pelendava)",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/19360a61-a15a-4d56-a100-f3be57e93ff1_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 63,
   "iri": "http://lod.squirrel.link/data/limes/daicus/19360a61-a15a-4d56-a100-f3be57e93ff1",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell R\u0103zboieni",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/2c2fb600-f249-469e-a025-1961edf5132d_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 64,
   "iri": "http://lod.squirrel.link/data/limes/daicus/2c2fb600-f249-469e-a025-1961edf5132d",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Tia Mare",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/22bf9a4e-a715-43f7-9fd0-4a60b8b77288_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 65,
   "iri": "http://lod.squirrel.link/data/limes/daicus/22bf9a4e-a715-43f7-9fd0-4a60b8b77288",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Bulci",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/3af3a2c4-8038-482d-9fa9-a0e90584ef6d_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "Kohortenkastell (?)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 66,
   "iri": "http://lod.squirrel.link/data/limes/daicus/3af3a2c4-8038-482d-9fa9-a0e90584ef6d",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Br\u00e2ncovene\u015fti",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/3b51185a-d7ca-4c22-b85d-a021b3727c4d_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 67,
   "iri": "http://lod.squirrel.link/data/limes/daicus/3b51185a-d7ca-4c22-b85d-a021b3727c4d",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Orheiul Bistri\u0163ei",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/3f7e0b8c-1a5f-423f-85da-536d87bbdcc8_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 68,
   "iri": "http://lod.squirrel.link/data/limes/daicus/3f7e0b8c-1a5f-423f-85da-536d87bbdcc8",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell S\u00e2npaul",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/322e89c0-f571-4be4-a08c-84b35efb69e5_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 69,
   "iri": "http://lod.squirrel.link/data/limes/daicus/322e89c0-f571-4be4-a08c-84b35efb69e5",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Gresia",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/34d0d768-2d4d-42b3-82ae-e29bad5c1eed_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 70,
   "iri": "http://lod.squirrel.link/data/limes/daicus/34d0d768-2d4d-42b3-82ae-e29bad5c1eed",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Mehadia (Praetorium)",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/340738ca-7444-4896-a0fd-cd9e6806eb30_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 71,
   "iri": "http://lod.squirrel.link/data/limes/daicus/340738ca-7444-4896-a0fd-cd9e6806eb30",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Bre\u021bcu ",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/3680e065-f377-4f4d-a9d6-84523dcb1727_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "Kohortenkastell",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 72,
   "iri": "http://lod.squirrel.link/data/limes/daicus/3680e065-f377-4f4d-a9d6-84523dcb1727",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Fl\u0103m\u0103nda (Poiana)",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/4dbfae9e-f0f7-4dab-94ca-9bca2cec83aa_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 73,
   "iri": "http://lod.squirrel.link/data/limes/daicus/4dbfae9e-f0f7-4dab-94ca-9bca2cec83aa",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell IIone\u0219tii Govorii (Pons Aluti)",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/4df4edbc-facd-42bd-b05e-076f94ae693b_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 74,
   "iri": "http://lod.squirrel.link/data/limes/daicus/4df4edbc-facd-42bd-b05e-076f94ae693b",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Gil\u0103u",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/4e013c45-7445-4ea6-8356-2c9cc9e7ac6e_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "Auxiliarkastell",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 75,
   "iri": "http://lod.squirrel.link/data/limes/daicus/4e013c45-7445-4ea6-8356-2c9cc9e7ac6e",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Jiblea",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/4198c975-e14a-4fb3-9b2e-7be9e145ecac_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 76,
   "iri": "http://lod.squirrel.link/data/limes/daicus/4198c975-e14a-4fb3-9b2e-7be9e145ecac",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Grebenac",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/42d9c007-47e1-4b2a-ab2c-c381f93cac96_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "Auxiliarkastell",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 77,
   "iri": "http://lod.squirrel.link/data/limes/daicus/42d9c007-47e1-4b2a-ab2c-c381f93cac96",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Plesa",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/46e40ed7-3b02-4bb3-ba5c-8dcb5f55b990_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 78,
   "iri": "http://lod.squirrel.link/data/limes/daicus/46e40ed7-3b02-4bb3-ba5c-8dcb5f55b990",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Z\u0103voi (Acmonia ?)",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/47a7d25e-6315-4256-b257-c2dfaea5e42f_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 79,
   "iri": "http://lod.squirrel.link/data/limes/daicus/47a7d25e-6315-4256-b257-c2dfaea5e42f",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell V\u00e2rtop",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/5a43030f-b985-4444-8cf9-3e4a0b132d79_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 80,
   "iri": "http://lod.squirrel.link/data/limes/daicus/5a43030f-b985-4444-8cf9-3e4a0b132d79",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell C\u0103ineni (Pons Vetus ?)",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/5b90b8d5-ba6e-4789-94d2-db823824acbf_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 81,
   "iri": "http://lod.squirrel.link/data/limes/daicus/5b90b8d5-ba6e-4789-94d2-db823824acbf",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Hoghiz",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/5d0fac8e-53ae-4ae7-92a2-dd419eee0dce_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "Auxiliarkastell",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 82,
   "iri": "http://lod.squirrel.link/data/limes/daicus/5d0fac8e-53ae-4ae7-92a2-dd419eee0dce",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Szeged",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/5e33b468-4135-46b4-babc-99f5c423f966_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "Kohortenkastell (?)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 83,
   "iri": "http://lod.squirrel.link/data/limes/daicus/5e33b468-4135-46b4-babc-99f5c423f966",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell C\u00e2mpulung Muscel I",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/5e6a65c9-32dd-4581-b6ab-a95afdc4d061_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 84,
   "iri": "http://lod.squirrel.link/data/limes/daicus/5e6a65c9-32dd-4581-b6ab-a95afdc4d061",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Gherla",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/5ea0f057-026f-4556-97f5-3e0e3a9471c3_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "Alenkastell",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 85,
   "iri": "http://lod.squirrel.link/data/limes/daicus/5ea0f057-026f-4556-97f5-3e0e3a9471c3",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Castranova",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/50320dbe-929c-40e3-aebd-f8f257d6472a_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 86,
   "iri": "http://lod.squirrel.link/data/limes/daicus/50320dbe-929c-40e3-aebd-f8f257d6472a",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell S\u00e2nnicolau Mare",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/59eaf728-6bdb-4f30-a9e7-abec5dbbaa5f_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "Kohortenkastell (?)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 87,
   "iri": "http://lod.squirrel.link/data/limes/daicus/59eaf728-6bdb-4f30-a9e7-abec5dbbaa5f",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell B\u0103neasa I",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/6c5d4f2f-8a7b-4ad5-8672-f4ecc7e80ff0_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 88,
   "iri": "http://lod.squirrel.link/data/limes/daicus/6c5d4f2f-8a7b-4ad5-8672-f4ecc7e80ff0",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell F\u00e2lfani",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/64ae9ea8-9dca-4e22-b32b-c2f95fd80b44_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 89,
   "iri": "http://lod.squirrel.link/data/limes/daicus/64ae9ea8-9dca-4e22-b32b-c2f95fd80b44",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Bologa (Resculum)",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/6689fc0e-01ff-4dbc-b3ed-49e35a3d397a_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 90,
   "iri": "http://lod.squirrel.link/data/limes/daicus/6689fc0e-01ff-4dbc-b3ed-49e35a3d397a",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Ro\u0219iorii de Vede",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/7a5a0685-4a85-48f0-a5ac-7b3b56efa3dc_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 91,
   "iri": "http://lod.squirrel.link/data/limes/daicus/7a5a0685-4a85-48f0-a5ac-7b3b56efa3dc",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell C\u0103lug\u0103reni",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/7aa137c0-3763-4bd3-a1ec-bd8a88b3d786_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "Kohortenkastell",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 92,
   "iri": "http://lod.squirrel.link/data/limes/daicus/7aa137c0-3763-4bd3-a1ec-bd8a88b3d786",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Islaz-Verdea",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/7b05b48b-cd48-4c66-916e-6ea581179843_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 93,
   "iri": "http://lod.squirrel.link/data/limes/daicus/7b05b48b-cd48-4c66-916e-6ea581179843",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell B\u0103neasa II",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/7c3bf06c-8f79-457e-b56f-77da98c7a69b_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 94,
   "iri": "http://lod.squirrel.link/data/limes/daicus/7c3bf06c-8f79-457e-b56f-77da98c7a69b",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Stolniceni",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/7cadca30-bfd9-4628-9916-c20eecafa356_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "Kohortenkastell",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 95,
   "iri": "http://lod.squirrel.link/data/limes/daicus/7cadca30-bfd9-4628-9916-c20eecafa356",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Boi\u0163a (Caput Stenarum) ",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/7cb289bf-4a31-467d-9c9d-4271a8dc55c9_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 96,
   "iri": "http://lod.squirrel.link/data/limes/daicus/7cb289bf-4a31-467d-9c9d-4271a8dc55c9",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Vr\u0161ac",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/7dd1742c-a3a5-4494-b148-1d435d754d5d_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "Vexillationskastell /  Kohortenkastell /  Alenkastell",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 97,
   "iri": "http://lod.squirrel.link/data/limes/daicus/7dd1742c-a3a5-4494-b148-1d435d754d5d",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Feldioara",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/70d51242-571e-43ce-bd01-3bffca8cb4be_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "Kohortenkastell",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 98,
   "iri": "http://lod.squirrel.link/data/limes/daicus/70d51242-571e-43ce-bd01-3bffca8cb4be",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Purc\u0103reni",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/707cb61a-d04e-4c7b-a620-6587db82f116_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 99,
   "iri": "http://lod.squirrel.link/data/limes/daicus/707cb61a-d04e-4c7b-a620-6587db82f116",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Livezile",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/7422f9df-da23-450f-8eac-db2d8dfca42e_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 100,
   "iri": "http://lod.squirrel.link/data/limes/daicus/7422f9df-da23-450f-8eac-db2d8dfca42e",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell C\u00e2mpulung Muscel II",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/8c5f1f84-f11a-48f0-8e9a-c629c7d346e2_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 101,
   "iri": "http://lod.squirrel.link/data/limes/daicus/8c5f1f84-f11a-48f0-8e9a-c629c7d346e2",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Voine\u015fti",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/8f823c04-d42b-49ec-879d-2c446d575885_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 102,
   "iri": "http://lod.squirrel.link/data/limes/daicus/8f823c04-d42b-49ec-879d-2c446d575885",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Tite\u015fti",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/8fa245f8-ffe5-4e74-b259-410c7be91afd_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 103,
   "iri": "http://lod.squirrel.link/data/limes/daicus/8fa245f8-ffe5-4e74-b259-410c7be91afd",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Perisani",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/80ce787b-1ab0-42e7-b03c-c641d3767774_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 104,
   "iri": "http://lod.squirrel.link/data/limes/daicus/80ce787b-1ab0-42e7-b03c-c641d3767774",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Dupljaja",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/815f5c63-8478-4aac-bafb-11eaafa9a923_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "Auxiliarkastell",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 105,
   "iri": "http://lod.squirrel.link/data/limes/daicus/815f5c63-8478-4aac-bafb-11eaafa9a923",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Cenad",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/86dae60a-c827-480d-bb38-04a480b9ea01_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "Kohortenkastell (?)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 106,
   "iri": "http://lod.squirrel.link/data/limes/daicus/86dae60a-c827-480d-bb38-04a480b9ea01",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Racovi\u0163a (Praetorium II)",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/9a084d40-bf5c-42fa-8aa7-8c678524c631_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 107,
   "iri": "http://lod.squirrel.link/data/limes/daicus/9a084d40-bf5c-42fa-8aa7-8c678524c631",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell R\u0103d\u0103cine\u015fti",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/9a118e00-be2c-4c2d-a9f9-8cb86170e3d1_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 108,
   "iri": "http://lod.squirrel.link/data/limes/daicus/9a118e00-be2c-4c2d-a9f9-8cb86170e3d1",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Bivolari (Arutela)",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/9ac48ee9-00b6-46ab-a597-b6aa5f2d784a_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 109,
   "iri": "http://lod.squirrel.link/data/limes/daicus/9ac48ee9-00b6-46ab-a597-b6aa5f2d784a",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Bumbe\u015fti",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/9b62118c-9936-42f2-a6e7-49f649c937f2_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 110,
   "iri": "http://lod.squirrel.link/data/limes/daicus/9b62118c-9936-42f2-a6e7-49f649c937f2",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Criste\u015fti",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/9ba7d74c-175e-48c8-9403-dbbdd650ed22_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 111,
   "iri": "http://lod.squirrel.link/data/limes/daicus/9ba7d74c-175e-48c8-9403-dbbdd650ed22",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell R\u00e2\u0219nov ",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/9d1c0c0d-98f5-4728-86ee-4288dde6d0fa_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "Kohortenkastell",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 112,
   "iri": "http://lod.squirrel.link/data/limes/daicus/9d1c0c0d-98f5-4728-86ee-4288dde6d0fa",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Putineiu",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/9f76d5fd-4ee3-4985-9fb6-c22bfdf43436_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 113,
   "iri": "http://lod.squirrel.link/data/limes/daicus/9f76d5fd-4ee3-4985-9fb6-c22bfdf43436",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Surducul Mare",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/918ef494-4408-4a91-8ee0-61f6087ffee7_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 114,
   "iri": "http://lod.squirrel.link/data/limes/daicus/918ef494-4408-4a91-8ee0-61f6087ffee7",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Tih\u0103u",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/986efe66-cf8a-4b64-a488-ad95d0f2dd79_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "Kohortenkastell",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 115,
   "iri": "http://lod.squirrel.link/data/limes/daicus/986efe66-cf8a-4b64-a488-ad95d0f2dd79",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell S\u0103pata de Jos I Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (24.763556 44.707333)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 116,
   "iri": "http://lod.squirrel.link/data/limes/daicus/a6ec226a-3c2a-444a-9221-839201e1135f_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell C\u0103tunele Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (22.924444 44.838889)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 117,
   "iri": "http://lod.squirrel.link/data/limes/daicus/aadec8db-70f9-4c40-833a-2a7c39c631d2_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Inl\u0103ceni Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (25.121806 46.431319)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 118,
   "iri": "http://lod.squirrel.link/data/limes/daicus/ae458e0d-85d0-4756-b265-db4db5bb7fe2_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell S\u0103mbotin (Castra Traiana) Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (24.373611 45.173611)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 119,
   "iri": "http://lod.squirrel.link/data/limes/daicus/af909713-68f5-4b6d-89d5-03f7fc7fd5c1_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Olteni Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (25.849619 45.970939)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 120,
   "iri": "http://lod.squirrel.link/data/limes/daicus/b0524f84-a9d2-45fa-9f69-d8164ad73440_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Sl\u0103veni Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (24.528969 44.081789)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 121,
   "iri": "http://lod.squirrel.link/data/limes/daicus/b0cccdd1-2478-40bc-add2-a0e1bad88feb_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Romanasi (Largiana) Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (23.181678 47.113403)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 122,
   "iri": "http://lod.squirrel.link/data/limes/daicus/b5cf0c45-ec51-4710-a03a-75e7dc30a7a3_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Buciumi Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (23.044569 47.048264)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 123,
   "iri": "http://lod.squirrel.link/data/limes/daicus/b6e369cd-722a-4a1c-a984-538bb26f3777_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Sighisoara Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (24.752103 46.239431)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 124,
   "iri": "http://lod.squirrel.link/data/limes/daicus/bd14e9f3-dd38-4329-a655-60b00fd8d5b7_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Odorheiul Secuiesc Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (25.3002 46.3131)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 125,
   "iri": "http://lod.squirrel.link/data/limes/daicus/bf339c52-9ac1-4b87-94ab-2dc33bc7d3e4_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Sarateni Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (25.008889 46.562222)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 126,
   "iri": "http://lod.squirrel.link/data/limes/daicus/c3451d14-c4ee-42be-b918-af9735167f5f_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Albota Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (24.8375 44.771389)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 127,
   "iri": "http://lod.squirrel.link/data/limes/daicus/c3a471a8-ab67-4e9c-b127-1eff017b0cb4_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Teregova (Ad Pannonios) Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (22.306831 45.168611)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 128,
   "iri": "http://lod.squirrel.link/data/limes/daicus/c8ecf3da-c535-41df-b06e-298cd8542633_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Eno\u015fe\u015fti (Acidava) Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (24.30325 44.374806)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 129,
   "iri": "http://lod.squirrel.link/data/limes/daicus/cba75304-f136-465d-90fb-56dff3acc018_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Banatska Palanka Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (21.331111 44.845)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 130,
   "iri": "http://lod.squirrel.link/data/limes/daicus/d2adbbd5-f4a7-471d-a817-b28e37bcbfb1_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Ili\u015fua (Arcobara) Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (24.095361 47.210528)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 131,
   "iri": "http://lod.squirrel.link/data/limes/daicus/d92ef45f-91c4-442e-b279-61f17fbccb7c_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Ghioca Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (24.761056 44.307778)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 132,
   "iri": "http://lod.squirrel.link/data/limes/daicus/e0423dfe-4fdf-4bf6-8453-97d7bee4d031_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Valea Urluii Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (24.937389 44.061333)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 133,
   "iri": "http://lod.squirrel.link/data/limes/daicus/e2573931-d743-40c3-a6b7-08ffeb244daa_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Cincsor Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (24.866611 45.842519)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 134,
   "iri": "http://lod.squirrel.link/data/limes/daicus/e3899f66-1234-4a44-b16e-2ead1e0bf696_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell C\u0103ciul\u0103te\u0219ti Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (23.949167 43.938056)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 135,
   "iri": "http://lod.squirrel.link/data/limes/daicus/e69e6cb2-cded-446c-b159-daec78476f43_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Aizis Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (21.847883 45.486656)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 136,
   "iri": "http://lod.squirrel.link/data/limes/daicus/e811fe5a-92d2-43a0-a572-51bc5942e242_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell R\u0103carii de Jos Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (23.571847 44.514)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 137,
   "iri": "http://lod.squirrel.link/data/limes/daicus/ec646e12-636f-4c8c-96c2-0f46833adf1c_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Aradul Nou Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (21.315097 46.146819)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 138,
   "iri": "http://lod.squirrel.link/data/limes/daicus/ed79872f-dcb1-48d0-a008-5a3c65432a67_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Borosneu Mare Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (26.016986 45.843861)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 139,
   "iri": "http://lod.squirrel.link/data/limes/daicus/f35f2d3f-8925-4139-9e9b-cf07ee5aaecb_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Sutoru Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (23.251667 46.986086)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 140,
   "iri": "http://lod.squirrel.link/data/limes/daicus/f42bb013-afeb-4044-9886-ece53cc813d4_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Re\u015fca (Romula/Malva) Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (24.400833 44.166667)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 141,
   "iri": "http://lod.squirrel.link/data/limes/daicus/f81e10af-8e41-447d-b601-dcba5311199b_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Urluieni II Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (24.762111 44.484583)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 142,
   "iri": "http://lod.squirrel.link/data/limes/daicus/f8305d66-9429-43c0-b6e3-73721df9986b_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell V\u0103r\u0103dia Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (21.551161 45.079397)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 143,
   "iri": "http://lod.squirrel.link/data/limes/daicus/fb3dfa9f-ac48-4ced-a8dc-2b635594cfdd_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Legionslager Alba Julia Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (23.572314 46.066694)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 144,
   "iri": "http://lod.squirrel.link/data/limes/daicus/fddcce1d-ea5f-4dc2-a2d1-740ca41fa97e_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Tibiscum Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (22.1895 45.4663)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 145,
   "iri": "http://lod.squirrel.link/data/limes/daicus/ffd99607-0513-4fa5-8073-c80bddbfab84_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Li\u015fteava Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (23.92 43.834167)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 146,
   "iri": "http://lod.squirrel.link/data/limes/daicus/0ab5e10e-4fb0-4854-835b-389043840ee0_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Ruc\u0103r Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (25.178583 45.398444)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 147,
   "iri": "http://lod.squirrel.link/data/limes/daicus/0ccd99fd-62d1-4978-873a-106b1f5e3880_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell S\u0103pata de Jos II Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (24.763694 44.707917)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 148,
   "iri": "http://lod.squirrel.link/data/limes/daicus/0e91c0e7-3991-4a45-89ed-382f7c74731a_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Urluieni I Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (24.761417 44.485833)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 149,
   "iri": "http://lod.squirrel.link/data/limes/daicus/0f25c729-a3c7-4cb4-b063-ff72c0124b4f_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell C\u0103\u015feiu (Samum) Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (23.837639 47.186222)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 150,
   "iri": "http://lod.squirrel.link/data/limes/daicus/0fe1d8dd-b425-4d55-ae80-2cd8d5d61ace_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Or\u0103\u015ftioara de Sus Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (23.166667 45.733333)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 151,
   "iri": "http://lod.squirrel.link/data/limes/daicus/000d5176-6b9e-4065-a44f-d7b8f75b1199_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Or\u0219ova (Dierna) Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (22.4076 44.7382)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 152,
   "iri": "http://lod.squirrel.link/data/limes/daicus/01189de6-024d-4022-96ff-eec7e4efee0c_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Cigm\u0103u Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (23.164364 45.897053)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 153,
   "iri": "http://lod.squirrel.link/data/limes/daicus/0203af0b-bc52-4f9f-b490-b2bc3fe431fc_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Momote\u015fti (Rusidava) Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (24.27 44.650306)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 154,
   "iri": "http://lod.squirrel.link/data/limes/daicus/06eb8de4-750e-4ed9-ad04-9bf16d61c975_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Cop\u0103ceni (Praetorium I) Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (24.309861 45.395903)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 155,
   "iri": "http://lod.squirrel.link/data/limes/daicus/096a9a4c-020f-4ce0-a4a6-993d50d08fea_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell R\u00e2ul Vadului Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (24.272806 45.523639)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 156,
   "iri": "http://lod.squirrel.link/data/limes/daicus/1b4b9c1f-cb64-4c02-976d-61c2147b0705_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastelle von Porolissum Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (23.157319 47.179167)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 157,
   "iri": "http://lod.squirrel.link/data/limes/daicus/1c936059-6af8-4f03-8e18-cc61f529c5f3_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Abrud (Alburnus Maior) Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (23.068611 46.272222)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 158,
   "iri": "http://lod.squirrel.link/data/limes/daicus/1d8f65a8-c30b-40f1-9676-2e1145691ac3_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Islaz-Razovica Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (24.870833 43.751667)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 159,
   "iri": "http://lod.squirrel.link/data/limes/daicus/1e218e82-f264-4241-a8e0-5efd9a1ec8a4_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Pinoasa Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (23.098056 44.9075)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 160,
   "iri": "http://lod.squirrel.link/data/limes/daicus/10b043a5-bb2b-48af-a168-84046185d6f7_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Romita Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (23.172444 47.106944)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 161,
   "iri": "http://lod.squirrel.link/data/limes/daicus/120e3991-1f39-4359-b810-37bb24aff05c_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Comal\u0103u Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (25.900222 45.844172)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 162,
   "iri": "http://lod.squirrel.link/data/limes/daicus/1795d125-e071-4153-b07e-e147bb19ad65_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Mofleni (Pelendava) Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (23.571889 44.514111)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 163,
   "iri": "http://lod.squirrel.link/data/limes/daicus/19360a61-a15a-4d56-a100-f3be57e93ff1_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell R\u0103zboieni Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (23.868333 46.417222)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 164,
   "iri": "http://lod.squirrel.link/data/limes/daicus/2c2fb600-f249-469e-a025-1961edf5132d_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Tia Mare Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (24.651389 43.866389)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 165,
   "iri": "http://lod.squirrel.link/data/limes/daicus/22bf9a4e-a715-43f7-9fd0-4a60b8b77288_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Bulci Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (22.112283 46.006539)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 166,
   "iri": "http://lod.squirrel.link/data/limes/daicus/3af3a2c4-8038-482d-9fa9-a0e90584ef6d_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Br\u00e2ncovene\u015fti Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (24.766042 46.861514)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 167,
   "iri": "http://lod.squirrel.link/data/limes/daicus/3b51185a-d7ca-4c22-b85d-a021b3727c4d_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Orheiul Bistri\u0163ei Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (24.592319 47.096014)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 168,
   "iri": "http://lod.squirrel.link/data/limes/daicus/3f7e0b8c-1a5f-423f-85da-536d87bbdcc8_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell S\u00e2npaul Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (25.379472 46.194833)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 169,
   "iri": "http://lod.squirrel.link/data/limes/daicus/322e89c0-f571-4be4-a08c-84b35efb69e5_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Gresia Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (24.917722 44.172583)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 170,
   "iri": "http://lod.squirrel.link/data/limes/daicus/34d0d768-2d4d-42b3-82ae-e29bad5c1eed_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Mehadia (Praetorium) Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (22.3522 44.9229)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 171,
   "iri": "http://lod.squirrel.link/data/limes/daicus/340738ca-7444-4896-a0fd-cd9e6806eb30_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Bre\u021bcu Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (26.312836 46.050994)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 172,
   "iri": "http://lod.squirrel.link/data/limes/daicus/3680e065-f377-4f4d-a9d6-84523dcb1727_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Fl\u0103m\u0103nda (Poiana) Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (24.983333 43.7345)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 173,
   "iri": "http://lod.squirrel.link/data/limes/daicus/4dbfae9e-f0f7-4dab-94ca-9bca2cec83aa_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell IIone\u0219tii Govorii (Pons Aluti) Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (24.236111 44.883333)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 174,
   "iri": "http://lod.squirrel.link/data/limes/daicus/4df4edbc-facd-42bd-b05e-076f94ae693b_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Gil\u0103u Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (23.391764 46.754058)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 175,
   "iri": "http://lod.squirrel.link/data/limes/daicus/4e013c45-7445-4ea6-8356-2c9cc9e7ac6e_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Jiblea Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (24.360556 45.231944)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 176,
   "iri": "http://lod.squirrel.link/data/limes/daicus/4198c975-e14a-4fb3-9b2e-7be9e145ecac_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Grebenac Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (21.232794 44.897786)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 177,
   "iri": "http://lod.squirrel.link/data/limes/daicus/42d9c007-47e1-4b2a-ab2c-c381f93cac96_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Plesa Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (23.37 45.18)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 178,
   "iri": "http://lod.squirrel.link/data/limes/daicus/46e40ed7-3b02-4bb3-ba5c-8dcb5f55b990_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Z\u0103voi (Acmonia ?) Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (22.410833 45.525278)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 179,
   "iri": "http://lod.squirrel.link/data/limes/daicus/47a7d25e-6315-4256-b257-c2dfaea5e42f_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Legionslager Potaissa Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (23.772733 46.570536)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 180,
   "iri": "http://lod.squirrel.link/data/limes/daicus/497eff64-e309-4704-b5f0-3e2872ff379d_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell V\u00e2rtop Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (23.372222 45.1825)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 181,
   "iri": "http://lod.squirrel.link/data/limes/daicus/5a43030f-b985-4444-8cf9-3e4a0b132d79_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell C\u0103ineni (Pons Vetus ?) Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (24.308611 45.495)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 182,
   "iri": "http://lod.squirrel.link/data/limes/daicus/5b90b8d5-ba6e-4789-94d2-db823824acbf_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Hoghiz Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (25.300011 45.983367)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 183,
   "iri": "http://lod.squirrel.link/data/limes/daicus/5d0fac8e-53ae-4ae7-92a2-dd419eee0dce_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Szeged Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (20.145953 46.253697)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 184,
   "iri": "http://lod.squirrel.link/data/limes/daicus/5e33b468-4135-46b4-babc-99f5c423f966_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell C\u00e2mpulung Muscel I Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (25.012472 45.22075)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 185,
   "iri": "http://lod.squirrel.link/data/limes/daicus/5e6a65c9-32dd-4581-b6ab-a95afdc4d061_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Gherla Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (23.899911 47.019833)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 186,
   "iri": "http://lod.squirrel.link/data/limes/daicus/5ea0f057-026f-4556-97f5-3e0e3a9471c3_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Castranova Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (24.016667 44.116667)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 187,
   "iri": "http://lod.squirrel.link/data/limes/daicus/50320dbe-929c-40e3-aebd-f8f257d6472a_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Sarmizegetusa (Ulpia Traiana) Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (22.786822 45.51665)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 188,
   "iri": "http://lod.squirrel.link/data/limes/daicus/5709a2bb-8d86-44af-b582-19151b918068_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell S\u00e2nnicolau Mare Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (20.629444 46.072222)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 189,
   "iri": "http://lod.squirrel.link/data/limes/daicus/59eaf728-6bdb-4f30-a9e7-abec5dbbaa5f_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell B\u0103neasa I Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (24.96525 43.937806)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 190,
   "iri": "http://lod.squirrel.link/data/limes/daicus/6c5d4f2f-8a7b-4ad5-8672-f4ecc7e80ff0_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell F\u00e2lfani Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (24.785111 44.603278)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 191,
   "iri": "http://lod.squirrel.link/data/limes/daicus/64ae9ea8-9dca-4e22-b32b-c2f95fd80b44_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Bologa (Resculum) Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (22.884611 46.885694)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 192,
   "iri": "http://lod.squirrel.link/data/limes/daicus/6689fc0e-01ff-4dbc-b3ed-49e35a3d397a_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Ro\u0219iorii de Vede Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (24.947028 44.074472)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 193,
   "iri": "http://lod.squirrel.link/data/limes/daicus/7a5a0685-4a85-48f0-a5ac-7b3b56efa3dc_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell C\u0103lug\u0103reni Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (24.877311 46.628978)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 194,
   "iri": "http://lod.squirrel.link/data/limes/daicus/7aa137c0-3763-4bd3-a1ec-bd8a88b3d786_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Islaz-Verdea Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (24.762222 43.710278)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 195,
   "iri": "http://lod.squirrel.link/data/limes/daicus/7b05b48b-cd48-4c66-916e-6ea581179843_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell B\u0103neasa II Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (24.961889 43.935889)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 196,
   "iri": "http://lod.squirrel.link/data/limes/daicus/7c3bf06c-8f79-457e-b56f-77da98c7a69b_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Stolniceni Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (24.360675 45.105944)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 197,
   "iri": "http://lod.squirrel.link/data/limes/daicus/7cadca30-bfd9-4628-9916-c20eecafa356_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Boi\u0163a (Caput Stenarum) Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (24.266011 45.635769)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 198,
   "iri": "http://lod.squirrel.link/data/limes/daicus/7cb289bf-4a31-467d-9c9d-4271a8dc55c9_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Vr\u0161ac Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (21.300194 45.122669)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 199,
   "iri": "http://lod.squirrel.link/data/limes/daicus/7dd1742c-a3a5-4494-b148-1d435d754d5d_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Berzovia Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (21.629394 45.426539)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 200,
   "iri": "http://lod.squirrel.link/data/limes/daicus/7e6b0abd-392e-48da-a973-52db57e43459_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Feldioara Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (25.591561 45.816419)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 201,
   "iri": "http://lod.squirrel.link/data/limes/daicus/70d51242-571e-43ce-bd01-3bffca8cb4be_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Purc\u0103reni Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (24.8945 44.958083)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 202,
   "iri": "http://lod.squirrel.link/data/limes/daicus/707cb61a-d04e-4c7b-a620-6587db82f116_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Livezile Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (24.57075 47.186869)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 203,
   "iri": "http://lod.squirrel.link/data/limes/daicus/7422f9df-da23-450f-8eac-db2d8dfca42e_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell C\u00e2mpulung Muscel II Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (25.012694 45.221)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 204,
   "iri": "http://lod.squirrel.link/data/limes/daicus/8c5f1f84-f11a-48f0-8e9a-c629c7d346e2_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Voine\u015fti Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (25.076083 45.297833)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 205,
   "iri": "http://lod.squirrel.link/data/limes/daicus/8f823c04-d42b-49ec-879d-2c446d575885_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Tite\u015fti Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (24.394444 45.409722)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 206,
   "iri": "http://lod.squirrel.link/data/limes/daicus/8fa245f8-ffe5-4e74-b259-410c7be91afd_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Perisani Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (24.400833 45.370833)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 207,
   "iri": "http://lod.squirrel.link/data/limes/daicus/80ce787b-1ab0-42e7-b03c-c641d3767774_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Dupljaja Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (21.275078 44.927103)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 208,
   "iri": "http://lod.squirrel.link/data/limes/daicus/815f5c63-8478-4aac-bafb-11eaafa9a923_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Cenad Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (20.585819 46.138106)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 209,
   "iri": "http://lod.squirrel.link/data/limes/daicus/86dae60a-c827-480d-bb38-04a480b9ea01_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Ve\u021bel Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (22.814906 45.914594)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 210,
   "iri": "http://lod.squirrel.link/data/limes/daicus/87009579-c2cc-4c7a-9b02-901bf75a0ee6_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Racovi\u0163a (Praetorium II) Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (24.757222 43.733056)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 211,
   "iri": "http://lod.squirrel.link/data/limes/daicus/9a084d40-bf5c-42fa-8aa7-8c678524c631_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell R\u0103d\u0103cine\u015fti Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (24.441944 45.281528)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 212,
   "iri": "http://lod.squirrel.link/data/limes/daicus/9a118e00-be2c-4c2d-a9f9-8cb86170e3d1_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Bivolari (Arutela) Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (24.312389 45.309667)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 213,
   "iri": "http://lod.squirrel.link/data/limes/daicus/9ac48ee9-00b6-46ab-a597-b6aa5f2d784a_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Bumbe\u015fti Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (23.4 45.166667)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 214,
   "iri": "http://lod.squirrel.link/data/limes/daicus/9b62118c-9936-42f2-a6e7-49f649c937f2_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Criste\u015fti Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (24.476111 46.510556)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 215,
   "iri": "http://lod.squirrel.link/data/limes/daicus/9ba7d74c-175e-48c8-9403-dbbdd650ed22_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell R\u00e2\u0219nov Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (25.441581 45.618708)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 216,
   "iri": "http://lod.squirrel.link/data/limes/daicus/9d1c0c0d-98f5-4728-86ee-4288dde6d0fa_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Putineiu Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (24.965361 43.897806)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 217,
   "iri": "http://lod.squirrel.link/data/limes/daicus/9f76d5fd-4ee3-4985-9fb6-c22bfdf43436_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Surducul Mare Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (21.587219 45.265)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 218,
   "iri": "http://lod.squirrel.link/data/limes/daicus/918ef494-4408-4a91-8ee0-61f6087ffee7_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Tih\u0103u Geometry",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "<http://www.opengis.net/def/crs/EPSG/0/4326> POINT (23.327689 47.227733)",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 219,
   "iri": "http://lod.squirrel.link/data/limes/daicus/986efe66-cf8a-4b64-a488-ad95d0f2dd79_geom",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Legionslager Alba Julia",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/fddcce1d-ea5f-4dc2-a2d1-740ca41fa97e_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "Legionslager",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 220,
   "iri": "http://lod.squirrel.link/data/limes/daicus/fddcce1d-ea5f-4dc2-a2d1-740ca41fa97e",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Tibiscum",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/ffd99607-0513-4fa5-8073-c80bddbfab84_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "Legionslager",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 221,
   "iri": "http://lod.squirrel.link/data/limes/daicus/ffd99607-0513-4fa5-8073-c80bddbfab84",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Legionslager Potaissa",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/497eff64-e309-4704-b5f0-3e2872ff379d_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "Legionslager",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 222,
   "iri": "http://lod.squirrel.link/data/limes/daicus/497eff64-e309-4704-b5f0-3e2872ff379d",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Sarmizegetusa (Ulpia Traiana)",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/5709a2bb-8d86-44af-b582-19151b918068_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "nan",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 223,
   "iri": "http://lod.squirrel.link/data/limes/daicus/5709a2bb-8d86-44af-b582-19151b918068",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Berzovia ",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/7e6b0abd-392e-48da-a973-52db57e43459_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "Legionslager",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 224,
   "iri": "http://lod.squirrel.link/data/limes/daicus/7e6b0abd-392e-48da-a973-52db57e43459",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": "Kastell Ve\u021bel",
   "annotations": {
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://lod.squirrel.link/data/limes/daicus/87009579-c2cc-4c7a-9b02-901bf75a0ee6_geom",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#comment",
      "language": "undefined",
      "value": "Legionslager",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 225,
   "iri": "http://lod.squirrel.link/data/limes/daicus/87009579-c2cc-4c7a-9b02-901bf75a0ee6",
   "baseIRI": "http://lod.squirrel.link/data/limes/daicus",
   "instances": 0,
   "label": {
    "IRI-based": "87009579-c2cc-4c7a-9b02-901bf75a0ee6"
   },
   "annotations": {},
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  }
 ]
}