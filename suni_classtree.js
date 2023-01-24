var tree={
  "plugins": [
    "search",
    "sort",
    "state",
    "types",
    "contextmenu"
  ],
  "search": {
    "show_only_matches": true
  },
  "types": {
    "class": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/class.png"
    },
    "geoclass": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/geoclass.png"
    },
    "halfgeoclass": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/halfgeoclass.png"
    },
    "collectionclass": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/collectionclass.png"
    },
    "geocollection": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/geometrycollection.png"
    },
    "featurecollection": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/featurecollection.png"
    },
    "instance": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/instance.png"
    },
    "geoinstance": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/geoinstance.png"
    }
  },
  "core": {
    "check_callback": true,
    "data": [
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/LimesNoricumFeatures",
        "parent": "http://www.opengis.net/ont/geosparql#FeatureCollection",
        "type": "featurecollection",
        "text": "Limes Noricum Features (LimesNoricumFeatures)",
        "data": {}
      },
      {
        "id": "http://www.opengis.net/ont/geosparql#FeatureCollection",
        "parent": "http://www.opengis.net/ont/geosparql#SpatialObjectCollection",
        "type": "collectionclass",
        "text": "FeatureCollection [1]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 40,
              "http://onto.squirrel.link/ontology#Burgus": 13,
              "http://onto.squirrel.link/ontology#MilitaryCamp": 12,
              "http://onto.squirrel.link/ontology#Watchtower": 8,
              "http://archaeoinformatics.link/ontology#Limes": 3,
              "http://lod.squirrel.link/data/limes/noricum/Kleinkastell": 3,
              "http://onto.squirrel.link/ontology#LegionaryCamp": 1
            }
          },
          "from": {}
        },
        "instancecount": 43
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/LimesNoricumGeometries",
        "parent": "http://www.opengis.net/ont/geosparql#GeometryCollection",
        "type": "geocollection",
        "text": "Limes Noricum Geometries (LimesNoricumGeometries)",
        "data": {}
      },
      {
        "id": "http://www.opengis.net/ont/geosparql#GeometryCollection",
        "parent": "http://www.opengis.net/ont/geosparql#SpatialObjectCollection",
        "type": "collectionclass",
        "text": "GeometryCollection [1]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 31,
              "http://www.opengis.net/ont/sf#Point": 31
            }
          },
          "from": {}
        },
        "instancecount": 34
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/a41296e5-fca2-4ce3-843e-a17871a5d85b",
        "parent": "http://onto.squirrel.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Wallsee-Nordhang (a41296e5-fca2-4ce3-843e-a17871a5d85b)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/c75941f8-009d-4c4c-8505-0298a88a6fd4",
        "parent": "http://onto.squirrel.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Hollenburg (c75941f8-009d-4c4c-8505-0298a88a6fd4)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/ec211670-f0d2-4c53-b8a5-3b8830b0aaa1",
        "parent": "http://onto.squirrel.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Rossatz (ec211670-f0d2-4c53-b8a5-3b8830b0aaa1)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/ed3e59f2-e683-4800-9e27-92d82cbc867f",
        "parent": "http://onto.squirrel.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Neumarkt (ed3e59f2-e683-4800-9e27-92d82cbc867f)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/0a1032df-bf53-47e7-9da6-e56c2b97caa8",
        "parent": "http://onto.squirrel.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Hirschleitengraben (0a1032df-bf53-47e7-9da6-e56c2b97caa8)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/130bed48-35dd-45d9-9fc0-bc50fb465c60",
        "parent": "http://onto.squirrel.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Melk-Spielberg (130bed48-35dd-45d9-9fc0-bc50fb465c60)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/26f3beb0-0cb4-42a8-849d-38455b2d1b79",
        "parent": "http://onto.squirrel.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Passau-Haibach (26f3beb0-0cb4-42a8-849d-38455b2d1b79)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/4c745423-da08-4414-93b9-bf0df2382c76",
        "parent": "http://onto.squirrel.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Sommerau (4c745423-da08-4414-93b9-bf0df2382c76)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/48f27058-f4ea-41f3-8319-888f59ffdd2d",
        "parent": "http://onto.squirrel.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Au-Rotte Hof (48f27058-f4ea-41f3-8319-888f59ffdd2d)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/5028c3bd-efbb-43b3-a8f6-a30ab9844d1b",
        "parent": "http://onto.squirrel.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Aggsbach-Dorf/Blashauskapelle (5028c3bd-efbb-43b3-a8f6-a30ab9844d1b)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/58660c1d-c211-4cf7-90d6-b53a5957addc",
        "parent": "http://onto.squirrel.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus St. Lorenz (58660c1d-c211-4cf7-90d6-b53a5957addc)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/71192446-c179-4a45-9214-44ef9a3a996b",
        "parent": "http://onto.squirrel.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Bacharnsdorf (71192446-c179-4a45-9214-44ef9a3a996b)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/8135cb6b-504d-4cae-9835-b9a7b0613163",
        "parent": "http://onto.squirrel.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Ybbs (8135cb6b-504d-4cae-9835-b9a7b0613163)",
        "data": {}
      },
      {
        "id": "http://onto.squirrel.link/ontology#Burgus",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoclass",
        "text": "Burgus [13]",
        "data": {
          "to": {
            "http://www.opengis.net/ont/geosparql#hasGeometry": {
              "instancecount": 1,
              "http://www.opengis.net/ont/sf#Point": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 0,
              "http://www.opengis.net/ont/geosparql#FeatureCollection": 1
            }
          }
        },
        "instancecount": 3
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/a41296e5-fca2-4ce3-843e-a17871a5d85b_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Wallsee-Nordhang Geometry (a41296e5-fca2-4ce3-843e-a17871a5d85b_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/b3e7d110-127b-45a7-9195-5e8a694e4862_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Arelape Geometry (b3e7d110-127b-45a7-9195-5e8a694e4862_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/c2b75037-aed0-49b4-9e1c-39944efa5cb4_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Wachturm S\u00e4usenstein Geometry (c2b75037-aed0-49b4-9e1c-39944efa5cb4_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/c589a7d3-f71c-4051-ac8b-c701902d3610_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Wachturm/Stra\u00dfenstation Maria Gugging Geometry (c589a7d3-f71c-4051-ac8b-c701902d3610_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/c75941f8-009d-4c4c-8505-0298a88a6fd4_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Hollenburg Geometry (c75941f8-009d-4c4c-8505-0298a88a6fd4_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/cb7b6f3a-395f-48b6-a6e3-247e6c5a2ff5_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Wachturm Maria Ponsee S\u00fcd Geometry (cb7b6f3a-395f-48b6-a6e3-247e6c5a2ff5_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/cfcfa4b0-501f-4563-8157-3c76054014a4_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Favianis Geometry (cfcfa4b0-501f-4563-8157-3c76054014a4_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/d0ef2a62-6c85-44ce-a995-65ab6d5a5f43_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Boiotro Geometry (d0ef2a62-6c85-44ce-a995-65ab6d5a5f43_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/d151609e-cb90-4faf-a74b-54d2f52e01a1_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Comagena Geometry (d151609e-cb90-4faf-a74b-54d2f52e01a1_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/d8bcb543-3948-43fd-937b-2782138b9deb_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Wallsee Geometry (d8bcb543-3948-43fd-937b-2782138b9deb_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/ec211670-f0d2-4c53-b8a5-3b8830b0aaa1_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Rossatz Geometry (ec211670-f0d2-4c53-b8a5-3b8830b0aaa1_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/ed3e59f2-e683-4800-9e27-92d82cbc867f_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Neumarkt Geometry (ed3e59f2-e683-4800-9e27-92d82cbc867f_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/ed6779f9-6afd-4f34-b7ff-0a6e731d4846_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Wachturm Freinberg Geometry (ed6779f9-6afd-4f34-b7ff-0a6e731d4846_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/0a1032df-bf53-47e7-9da6-e56c2b97caa8_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Hirschleitengraben Geometry (0a1032df-bf53-47e7-9da6-e56c2b97caa8_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/0e8a5ba3-887e-4540-92c3-d35fef2bd579_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Eferding Geometry (0e8a5ba3-887e-4540-92c3-d35fef2bd579_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/0f5c8dda-88a9-48ad-bf8f-e72f216a4066_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Zwentendorf Geometry (0f5c8dda-88a9-48ad-bf8f-e72f216a4066_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/1d31fa5a-61cc-42df-b958-a5e9d83555a3_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Wachturm Maria Ponsee West Geometry (1d31fa5a-61cc-42df-b958-a5e9d83555a3_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/130bed48-35dd-45d9-9fc0-bc50fb465c60_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Melk-Spielberg Geometry (130bed48-35dd-45d9-9fc0-bc50fb465c60_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/13572025-f4dc-4503-8aad-72050202752b_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Melk Geometry (13572025-f4dc-4503-8aad-72050202752b_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/2bf44917-dd67-4ec8-9240-513476cdb60c_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Augustianis Geometry (2bf44917-dd67-4ec8-9240-513476cdb60c_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/2e2c9ca5-61d1-459e-a151-fad5d81dd1b7_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Locus Felicis Geometry (2e2c9ca5-61d1-459e-a151-fad5d81dd1b7_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/203478fb-4a78-48c7-bd75-97b667f6e707_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kleinkastell Eberranna Geometry (203478fb-4a78-48c7-bd75-97b667f6e707_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/2471711a-fb59-436f-ade5-b61e4fd67732_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Wachturm Kobling See Geometry (2471711a-fb59-436f-ade5-b61e4fd67732_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/26f3beb0-0cb4-42a8-849d-38455b2d1b79_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Passau-Haibach Geometry (26f3beb0-0cb4-42a8-849d-38455b2d1b79_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/32371ca3-a871-475e-8d85-49ca8c26da3d_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Lauriacum Geometry (32371ca3-a871-475e-8d85-49ca8c26da3d_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/4c745423-da08-4414-93b9-bf0df2382c76_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Sommerau Geometry (4c745423-da08-4414-93b9-bf0df2382c76_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/4043d889-d9be-47b7-b9d3-afede593d67a_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Wachturm Sarling Geometry (4043d889-d9be-47b7-b9d3-afede593d67a_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/48f27058-f4ea-41f3-8319-888f59ffdd2d_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Au-Rotte Hof Geometry (48f27058-f4ea-41f3-8319-888f59ffdd2d_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/5028c3bd-efbb-43b3-a8f6-a30ab9844d1b_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Aggsbach-Dorf/Blashauskapelle Geometry (5028c3bd-efbb-43b3-a8f6-a30ab9844d1b_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/51607531-4767-41c1-94ca-86d68572c7c2_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kleinkastell Sankt Marienkirchen Geometry (51607531-4767-41c1-94ca-86d68572c7c2_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/58660c1d-c211-4cf7-90d6-b53a5957addc_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus St. Lorenz Geometry (58660c1d-c211-4cf7-90d6-b53a5957addc_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/64755b3a-9ff6-4c12-b9fb-778e3bde5b1f_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Legionslager Albing Geometry (64755b3a-9ff6-4c12-b9fb-778e3bde5b1f_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/7e23ed9a-8efc-48ec-a294-a7cc9b8285dc_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Milit\u00e4rziegelei Sankt Marienkirchen Geometry (7e23ed9a-8efc-48ec-a294-a7cc9b8285dc_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/71192446-c179-4a45-9214-44ef9a3a996b_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Bacharnsdorf Geometry (71192446-c179-4a45-9214-44ef9a3a996b_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/78b044f5-8a10-47ed-acf0-74658affbf22_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Lentia Geometry (78b044f5-8a10-47ed-acf0-74658affbf22_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/8f964055-7a95-4e88-bcef-5bd3a5824de9_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Cannabiaca Geometry (8f964055-7a95-4e88-bcef-5bd3a5824de9_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/80943cf4-f263-44f2-bd49-2a2c405b3be6_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kleinkastell Schl\u00f6gen Geometry (80943cf4-f263-44f2-bd49-2a2c405b3be6_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/8135cb6b-504d-4cae-9835-b9a7b0613163_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Ybbs Geometry (8135cb6b-504d-4cae-9835-b9a7b0613163_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/88218e4a-aa6a-421c-84ea-a646790b80cb_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Wachturm Kobling-Rossgraben Geometry (88218e4a-aa6a-421c-84ea-a646790b80cb_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/9f8f4e96-12d9-449b-b9ab-6e6080e34c9f_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Boiodurum Geometry (9f8f4e96-12d9-449b-b9ab-6e6080e34c9f_geom)",
        "data": {}
      },
      {
        "id": "http://www.opengis.net/ont/sf#Point",
        "parent": "http://www.opengis.net/ont/geosparql#Geometry",
        "type": "geoclass",
        "text": "Point [40]",
        "data": {
          "to": {
            "http://www.opengis.net/ont/geosparql#asWKT": {
              "instancecount": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.opengis.net/ont/geosparql#hasGeometry": {
              "instancecount": 0,
              "http://onto.squirrel.link/ontology#MilitaryCamp": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 0,
              "http://www.opengis.net/ont/geosparql#GeometryCollection": 1
            }
          }
        },
        "instancecount": 3
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/b3e7d110-127b-45a7-9195-5e8a694e4862",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Arelape (b3e7d110-127b-45a7-9195-5e8a694e4862)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/cfcfa4b0-501f-4563-8157-3c76054014a4",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Favianis (cfcfa4b0-501f-4563-8157-3c76054014a4)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/d0ef2a62-6c85-44ce-a995-65ab6d5a5f43",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Boiotro (d0ef2a62-6c85-44ce-a995-65ab6d5a5f43)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/d151609e-cb90-4faf-a74b-54d2f52e01a1",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Comagena (d151609e-cb90-4faf-a74b-54d2f52e01a1)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/d8bcb543-3948-43fd-937b-2782138b9deb",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Wallsee (d8bcb543-3948-43fd-937b-2782138b9deb)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/0e8a5ba3-887e-4540-92c3-d35fef2bd579",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Eferding (0e8a5ba3-887e-4540-92c3-d35fef2bd579)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/0f5c8dda-88a9-48ad-bf8f-e72f216a4066",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Zwentendorf (0f5c8dda-88a9-48ad-bf8f-e72f216a4066)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/13572025-f4dc-4503-8aad-72050202752b",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Melk (13572025-f4dc-4503-8aad-72050202752b)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/2bf44917-dd67-4ec8-9240-513476cdb60c",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Augustianis (2bf44917-dd67-4ec8-9240-513476cdb60c)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/78b044f5-8a10-47ed-acf0-74658affbf22",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Lentia (78b044f5-8a10-47ed-acf0-74658affbf22)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/8f964055-7a95-4e88-bcef-5bd3a5824de9",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Cannabiaca (8f964055-7a95-4e88-bcef-5bd3a5824de9)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/9f8f4e96-12d9-449b-b9ab-6e6080e34c9f",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Boiodurum  (9f8f4e96-12d9-449b-b9ab-6e6080e34c9f)",
        "data": {}
      },
      {
        "id": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoclass",
        "text": "MilitaryCamp [12]",
        "data": {
          "to": {
            "http://www.opengis.net/ont/geosparql#hasGeometry": {
              "instancecount": 1,
              "http://www.opengis.net/ont/sf#Point": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 0,
              "http://www.opengis.net/ont/geosparql#FeatureCollection": 1
            }
          }
        },
        "instancecount": 3
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/c2b75037-aed0-49b4-9e1c-39944efa5cb4",
        "parent": "http://onto.squirrel.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Wachturm S\u00e4usenstein (c2b75037-aed0-49b4-9e1c-39944efa5cb4)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/c589a7d3-f71c-4051-ac8b-c701902d3610",
        "parent": "http://onto.squirrel.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Wachturm/Stra\u00dfenstation Maria Gugging (c589a7d3-f71c-4051-ac8b-c701902d3610)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/cb7b6f3a-395f-48b6-a6e3-247e6c5a2ff5",
        "parent": "http://onto.squirrel.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Wachturm Maria Ponsee S\u00fcd (cb7b6f3a-395f-48b6-a6e3-247e6c5a2ff5)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/ed6779f9-6afd-4f34-b7ff-0a6e731d4846",
        "parent": "http://onto.squirrel.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Wachturm Freinberg  (ed6779f9-6afd-4f34-b7ff-0a6e731d4846)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/1d31fa5a-61cc-42df-b958-a5e9d83555a3",
        "parent": "http://onto.squirrel.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Wachturm Maria Ponsee West (1d31fa5a-61cc-42df-b958-a5e9d83555a3)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/2471711a-fb59-436f-ade5-b61e4fd67732",
        "parent": "http://onto.squirrel.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Wachturm Kobling See (2471711a-fb59-436f-ade5-b61e4fd67732)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/4043d889-d9be-47b7-b9d3-afede593d67a",
        "parent": "http://onto.squirrel.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Wachturm Sarling (4043d889-d9be-47b7-b9d3-afede593d67a)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/88218e4a-aa6a-421c-84ea-a646790b80cb",
        "parent": "http://onto.squirrel.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Wachturm Kobling-Rossgraben (88218e4a-aa6a-421c-84ea-a646790b80cb)",
        "data": {}
      },
      {
        "id": "http://onto.squirrel.link/ontology#Watchtower",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoclass",
        "text": "Watchtower [8]",
        "data": {
          "to": {
            "http://www.opengis.net/ont/geosparql#hasGeometry": {
              "instancecount": 1,
              "http://www.opengis.net/ont/sf#Point": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 0,
              "http://www.opengis.net/ont/geosparql#FeatureCollection": 1
            }
          }
        },
        "instancecount": 3
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/2e2c9ca5-61d1-459e-a151-fad5d81dd1b7",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Locus Felicis (2e2c9ca5-61d1-459e-a151-fad5d81dd1b7)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/32371ca3-a871-475e-8d85-49ca8c26da3d",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Lauriacum (32371ca3-a871-475e-8d85-49ca8c26da3d)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/7e23ed9a-8efc-48ec-a294-a7cc9b8285dc",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Milit\u00e4rziegelei Sankt Marienkirchen (7e23ed9a-8efc-48ec-a294-a7cc9b8285dc)",
        "data": {}
      },
      {
        "id": "http://archaeoinformatics.link/ontology#Limes",
        "parent": "http://www.opengis.net/ont/geosparql#Feature",
        "type": "geoclass",
        "text": "Limes [3]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 0,
              "http://lod.squirrel.link/data/limes/noricum/Kleinkastell": 3
            }
          }
        },
        "instancecount": 3
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/203478fb-4a78-48c7-bd75-97b667f6e707",
        "parent": "http://lod.squirrel.link/data/limes/noricum/Kleinkastell",
        "type": "geoinstance",
        "text": "Kleinkastell Eberranna (203478fb-4a78-48c7-bd75-97b667f6e707)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/51607531-4767-41c1-94ca-86d68572c7c2",
        "parent": "http://lod.squirrel.link/data/limes/noricum/Kleinkastell",
        "type": "geoinstance",
        "text": "Kleinkastell Sankt Marienkirchen (51607531-4767-41c1-94ca-86d68572c7c2)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/80943cf4-f263-44f2-bd49-2a2c405b3be6",
        "parent": "http://lod.squirrel.link/data/limes/noricum/Kleinkastell",
        "type": "geoinstance",
        "text": "Kleinkastell Schl\u00f6gen (80943cf4-f263-44f2-bd49-2a2c405b3be6)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/Kleinkastell",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoclass",
        "text": "Kleinkastell [3]",
        "data": {
          "to": {
            "http://www.opengis.net/ont/geosparql#hasGeometry": {
              "instancecount": 1,
              "http://www.opengis.net/ont/sf#Point": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 0,
              "http://www.opengis.net/ont/geosparql#FeatureCollection": 1
            }
          }
        },
        "instancecount": 3
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/64755b3a-9ff6-4c12-b9fb-778e3bde5b1f",
        "parent": "http://onto.squirrel.link/ontology#LegionaryCamp",
        "type": "geoinstance",
        "text": "Legionslager Albing (64755b3a-9ff6-4c12-b9fb-778e3bde5b1f)",
        "data": {}
      },
      {
        "id": "http://onto.squirrel.link/ontology#LegionaryCamp",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoclass",
        "text": "LegionaryCamp [1]",
        "data": {
          "to": {
            "http://www.opengis.net/ont/geosparql#hasGeometry": {
              "instancecount": 1,
              "http://www.opengis.net/ont/sf#Point": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 0,
              "http://www.opengis.net/ont/geosparql#FeatureCollection": 1
            }
          }
        },
        "instancecount": 3
      },
      {
        "id": "http://www.opengis.net/ont/geosparql#Feature",
        "parent": "http://www.opengis.net/ont/geosparql#SpatialObject",
        "type": "class",
        "text": "Feature",
        "data": {}
      },
      {
        "id": "http://www.opengis.net/ont/geosparql#Geometry",
        "parent": "http://www.opengis.net/ont/geosparql#SpatialObject",
        "type": "class",
        "text": "Geometry",
        "data": {}
      },
      {
        "id": "http://www.opengis.net/ont/geosparql#SpatialObject",
        "parent": "#",
        "type": "class",
        "text": "SpatialObject",
        "data": {}
      },
      {
        "id": "http://www.opengis.net/ont/geosparql#SpatialObjectCollection",
        "parent": "#",
        "type": "collectionclass",
        "text": "SpatialObjectCollection",
        "data": {}
      }
    ]
  }
}