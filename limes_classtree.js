var tree={
  "plugins": [
    "defaults",
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
    "themes": {
      "responsive": true
    },
    "check_callback": true,
    "data": [
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/LimesDaicusFeatures",
        "parent": "http://www.opengis.net/ont/geosparql#FeatureCollection",
        "type": "featurecollection",
        "text": "Limes Daicus Features (LimesDaicusFeatures)",
        "data": {}
      },
      {
        "id": "http://www.opengis.net/ont/geosparql#FeatureCollection",
        "parent": "http://www.opengis.net/ont/geosparql#SpatialObjectCollection",
        "type": "collectionclass",
        "text": "FeatureCollection (gsp:FeatureCollection) [2]",
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
              "instancecount": 49,
              "http://archaeoinformatics.link/ontology#MilitaryCamp": 48,
              "http://archaeoinformatics.link/ontology#LegionaryCamp": 1
            }
          },
          "from": {}
        },
        "instancecount": 52
      },
      {
        "id": "http://www.opengis.net/ont/geosparql#SpatialObjectCollection",
        "parent": "#",
        "type": "collectionclass",
        "text": "SpatialObjectCollection (gsp:SpatialObjectCollection)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/LimesDaicusGeometries",
        "parent": "http://www.opengis.net/ont/geosparql#GeometryCollection",
        "type": "geocollection",
        "text": "Limes Daicus Geometries (LimesDaicusGeometries)",
        "data": {}
      },
      {
        "id": "http://www.opengis.net/ont/geosparql#GeometryCollection",
        "parent": "http://www.opengis.net/ont/geosparql#SpatialObjectCollection",
        "type": "collectionclass",
        "text": "GeometryCollection (gsp:GeometryCollection) [2]",
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
              "instancecount": 49,
              "http://www.opengis.net/ont/sf#Point": 49
            }
          },
          "from": {}
        },
        "instancecount": 52
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/a6ec226a-3c2a-444a-9221-839201e1135f",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell S\u0103pata de Jos I (a6ec226a-3c2a-444a-9221-839201e1135f)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/aadec8db-70f9-4c40-833a-2a7c39c631d2",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell C\u0103tunele (aadec8db-70f9-4c40-833a-2a7c39c631d2)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/ae458e0d-85d0-4756-b265-db4db5bb7fe2",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Inl\u0103ceni (ae458e0d-85d0-4756-b265-db4db5bb7fe2)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/af909713-68f5-4b6d-89d5-03f7fc7fd5c1",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell S\u0103mbotin (Castra Traiana) (af909713-68f5-4b6d-89d5-03f7fc7fd5c1)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/b0524f84-a9d2-45fa-9f69-d8164ad73440",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Olteni (b0524f84-a9d2-45fa-9f69-d8164ad73440)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/b0cccdd1-2478-40bc-add2-a0e1bad88feb",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Sl\u0103veni (b0cccdd1-2478-40bc-add2-a0e1bad88feb)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/b5cf0c45-ec51-4710-a03a-75e7dc30a7a3",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Romanasi (Largiana) (b5cf0c45-ec51-4710-a03a-75e7dc30a7a3)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/b6e369cd-722a-4a1c-a984-538bb26f3777",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Buciumi (b6e369cd-722a-4a1c-a984-538bb26f3777)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/bd14e9f3-dd38-4329-a655-60b00fd8d5b7",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Sighisoara (bd14e9f3-dd38-4329-a655-60b00fd8d5b7)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/bf339c52-9ac1-4b87-94ab-2dc33bc7d3e4",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Odorheiul Secuiesc (bf339c52-9ac1-4b87-94ab-2dc33bc7d3e4)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/c3451d14-c4ee-42be-b918-af9735167f5f",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Sarateni (c3451d14-c4ee-42be-b918-af9735167f5f)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/c3a471a8-ab67-4e9c-b127-1eff017b0cb4",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Albota (c3a471a8-ab67-4e9c-b127-1eff017b0cb4)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/c8ecf3da-c535-41df-b06e-298cd8542633",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Teregova (Ad Pannonios) (c8ecf3da-c535-41df-b06e-298cd8542633)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/cba75304-f136-465d-90fb-56dff3acc018",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Eno\u015fe\u015fti (Acidava) (cba75304-f136-465d-90fb-56dff3acc018)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/d2adbbd5-f4a7-471d-a817-b28e37bcbfb1",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Banatska Palanka (d2adbbd5-f4a7-471d-a817-b28e37bcbfb1)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/d92ef45f-91c4-442e-b279-61f17fbccb7c",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Ili\u015fua (Arcobara) (d92ef45f-91c4-442e-b279-61f17fbccb7c)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/e0423dfe-4fdf-4bf6-8453-97d7bee4d031",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Ghioca (e0423dfe-4fdf-4bf6-8453-97d7bee4d031)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/e2573931-d743-40c3-a6b7-08ffeb244daa",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Valea Urluii (e2573931-d743-40c3-a6b7-08ffeb244daa)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/e3899f66-1234-4a44-b16e-2ead1e0bf696",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Cincsor (e3899f66-1234-4a44-b16e-2ead1e0bf696)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/e69e6cb2-cded-446c-b159-daec78476f43",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell C\u0103ciul\u0103te\u0219ti (e69e6cb2-cded-446c-b159-daec78476f43)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/e811fe5a-92d2-43a0-a572-51bc5942e242",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Aizis (e811fe5a-92d2-43a0-a572-51bc5942e242)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/ec646e12-636f-4c8c-96c2-0f46833adf1c",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell R\u0103carii de Jos (ec646e12-636f-4c8c-96c2-0f46833adf1c)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/ed79872f-dcb1-48d0-a008-5a3c65432a67",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Aradul Nou (ed79872f-dcb1-48d0-a008-5a3c65432a67)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/f35f2d3f-8925-4139-9e9b-cf07ee5aaecb",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Borosneu Mare (f35f2d3f-8925-4139-9e9b-cf07ee5aaecb)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/f42bb013-afeb-4044-9886-ece53cc813d4",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Sutoru (f42bb013-afeb-4044-9886-ece53cc813d4)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/f81e10af-8e41-447d-b601-dcba5311199b",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Re\u015fca (Romula/Malva) (f81e10af-8e41-447d-b601-dcba5311199b)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/f8305d66-9429-43c0-b6e3-73721df9986b",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Urluieni II (f8305d66-9429-43c0-b6e3-73721df9986b)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/fb3dfa9f-ac48-4ced-a8dc-2b635594cfdd",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell V\u0103r\u0103dia (fb3dfa9f-ac48-4ced-a8dc-2b635594cfdd)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/0ab5e10e-4fb0-4854-835b-389043840ee0",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Li\u015fteava (0ab5e10e-4fb0-4854-835b-389043840ee0)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/0ccd99fd-62d1-4978-873a-106b1f5e3880",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Ruc\u0103r (0ccd99fd-62d1-4978-873a-106b1f5e3880)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/0e91c0e7-3991-4a45-89ed-382f7c74731a",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell S\u0103pata de Jos II (0e91c0e7-3991-4a45-89ed-382f7c74731a)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/0f25c729-a3c7-4cb4-b063-ff72c0124b4f",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Urluieni I (0f25c729-a3c7-4cb4-b063-ff72c0124b4f)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/0fe1d8dd-b425-4d55-ae80-2cd8d5d61ace",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell C\u0103\u015feiu (Samum) (0fe1d8dd-b425-4d55-ae80-2cd8d5d61ace)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/000d5176-6b9e-4065-a44f-d7b8f75b1199",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Or\u0103\u015ftioara de Sus (000d5176-6b9e-4065-a44f-d7b8f75b1199)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/01189de6-024d-4022-96ff-eec7e4efee0c",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Or\u0219ova (Dierna) (01189de6-024d-4022-96ff-eec7e4efee0c)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/0203af0b-bc52-4f9f-b490-b2bc3fe431fc",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Cigm\u0103u  (0203af0b-bc52-4f9f-b490-b2bc3fe431fc)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/06eb8de4-750e-4ed9-ad04-9bf16d61c975",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Momote\u015fti (Rusidava) (06eb8de4-750e-4ed9-ad04-9bf16d61c975)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/096a9a4c-020f-4ce0-a4a6-993d50d08fea",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Cop\u0103ceni (Praetorium I) (096a9a4c-020f-4ce0-a4a6-993d50d08fea)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/1b4b9c1f-cb64-4c02-976d-61c2147b0705",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell R\u00e2ul Vadului (1b4b9c1f-cb64-4c02-976d-61c2147b0705)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/1c936059-6af8-4f03-8e18-cc61f529c5f3",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastelle von Porolissum (1c936059-6af8-4f03-8e18-cc61f529c5f3)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/1d8f65a8-c30b-40f1-9676-2e1145691ac3",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Abrud (Alburnus Maior) (1d8f65a8-c30b-40f1-9676-2e1145691ac3)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/1e218e82-f264-4241-a8e0-5efd9a1ec8a4",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Islaz-Razovica (1e218e82-f264-4241-a8e0-5efd9a1ec8a4)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/10b043a5-bb2b-48af-a168-84046185d6f7",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Pinoasa (10b043a5-bb2b-48af-a168-84046185d6f7)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/120e3991-1f39-4359-b810-37bb24aff05c",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Romita (120e3991-1f39-4359-b810-37bb24aff05c)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/1795d125-e071-4153-b07e-e147bb19ad65",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Comal\u0103u (1795d125-e071-4153-b07e-e147bb19ad65)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/19360a61-a15a-4d56-a100-f3be57e93ff1",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Mofleni (Pelendava) (19360a61-a15a-4d56-a100-f3be57e93ff1)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/2c2fb600-f249-469e-a025-1961edf5132d",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell R\u0103zboieni (2c2fb600-f249-469e-a025-1961edf5132d)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/22bf9a4e-a715-43f7-9fd0-4a60b8b77288",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Tia Mare (22bf9a4e-a715-43f7-9fd0-4a60b8b77288)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/3af3a2c4-8038-482d-9fa9-a0e90584ef6d",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Bulci (3af3a2c4-8038-482d-9fa9-a0e90584ef6d)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/3b51185a-d7ca-4c22-b85d-a021b3727c4d",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Br\u00e2ncovene\u015fti (3b51185a-d7ca-4c22-b85d-a021b3727c4d)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/3f7e0b8c-1a5f-423f-85da-536d87bbdcc8",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Orheiul Bistri\u0163ei (3f7e0b8c-1a5f-423f-85da-536d87bbdcc8)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/322e89c0-f571-4be4-a08c-84b35efb69e5",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell S\u00e2npaul (322e89c0-f571-4be4-a08c-84b35efb69e5)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/34d0d768-2d4d-42b3-82ae-e29bad5c1eed",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Gresia (34d0d768-2d4d-42b3-82ae-e29bad5c1eed)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/340738ca-7444-4896-a0fd-cd9e6806eb30",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Mehadia (Praetorium) (340738ca-7444-4896-a0fd-cd9e6806eb30)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/3680e065-f377-4f4d-a9d6-84523dcb1727",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Bre\u021bcu  (3680e065-f377-4f4d-a9d6-84523dcb1727)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/4dbfae9e-f0f7-4dab-94ca-9bca2cec83aa",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Fl\u0103m\u0103nda (Poiana) (4dbfae9e-f0f7-4dab-94ca-9bca2cec83aa)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/4df4edbc-facd-42bd-b05e-076f94ae693b",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell IIone\u0219tii Govorii (Pons Aluti) (4df4edbc-facd-42bd-b05e-076f94ae693b)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/4e013c45-7445-4ea6-8356-2c9cc9e7ac6e",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Gil\u0103u (4e013c45-7445-4ea6-8356-2c9cc9e7ac6e)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/4198c975-e14a-4fb3-9b2e-7be9e145ecac",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Jiblea (4198c975-e14a-4fb3-9b2e-7be9e145ecac)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/42d9c007-47e1-4b2a-ab2c-c381f93cac96",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Grebenac (42d9c007-47e1-4b2a-ab2c-c381f93cac96)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/46e40ed7-3b02-4bb3-ba5c-8dcb5f55b990",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Plesa (46e40ed7-3b02-4bb3-ba5c-8dcb5f55b990)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/47a7d25e-6315-4256-b257-c2dfaea5e42f",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Z\u0103voi (Acmonia ?) (47a7d25e-6315-4256-b257-c2dfaea5e42f)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/5a43030f-b985-4444-8cf9-3e4a0b132d79",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell V\u00e2rtop (5a43030f-b985-4444-8cf9-3e4a0b132d79)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/5b90b8d5-ba6e-4789-94d2-db823824acbf",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell C\u0103ineni (Pons Vetus ?) (5b90b8d5-ba6e-4789-94d2-db823824acbf)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/5d0fac8e-53ae-4ae7-92a2-dd419eee0dce",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Hoghiz (5d0fac8e-53ae-4ae7-92a2-dd419eee0dce)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/5e33b468-4135-46b4-babc-99f5c423f966",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Szeged (5e33b468-4135-46b4-babc-99f5c423f966)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/5e6a65c9-32dd-4581-b6ab-a95afdc4d061",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell C\u00e2mpulung Muscel I (5e6a65c9-32dd-4581-b6ab-a95afdc4d061)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/5ea0f057-026f-4556-97f5-3e0e3a9471c3",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Gherla (5ea0f057-026f-4556-97f5-3e0e3a9471c3)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/50320dbe-929c-40e3-aebd-f8f257d6472a",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Castranova (50320dbe-929c-40e3-aebd-f8f257d6472a)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/59eaf728-6bdb-4f30-a9e7-abec5dbbaa5f",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell S\u00e2nnicolau Mare (59eaf728-6bdb-4f30-a9e7-abec5dbbaa5f)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/6c5d4f2f-8a7b-4ad5-8672-f4ecc7e80ff0",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell B\u0103neasa I (6c5d4f2f-8a7b-4ad5-8672-f4ecc7e80ff0)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/64ae9ea8-9dca-4e22-b32b-c2f95fd80b44",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell F\u00e2lfani (64ae9ea8-9dca-4e22-b32b-c2f95fd80b44)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/6689fc0e-01ff-4dbc-b3ed-49e35a3d397a",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Bologa (Resculum) (6689fc0e-01ff-4dbc-b3ed-49e35a3d397a)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/7a5a0685-4a85-48f0-a5ac-7b3b56efa3dc",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Ro\u0219iorii de Vede (7a5a0685-4a85-48f0-a5ac-7b3b56efa3dc)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/7aa137c0-3763-4bd3-a1ec-bd8a88b3d786",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell C\u0103lug\u0103reni (7aa137c0-3763-4bd3-a1ec-bd8a88b3d786)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/7b05b48b-cd48-4c66-916e-6ea581179843",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Islaz-Verdea (7b05b48b-cd48-4c66-916e-6ea581179843)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/7c3bf06c-8f79-457e-b56f-77da98c7a69b",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell B\u0103neasa II (7c3bf06c-8f79-457e-b56f-77da98c7a69b)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/7cadca30-bfd9-4628-9916-c20eecafa356",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Stolniceni (7cadca30-bfd9-4628-9916-c20eecafa356)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/7cb289bf-4a31-467d-9c9d-4271a8dc55c9",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Boi\u0163a (Caput Stenarum)  (7cb289bf-4a31-467d-9c9d-4271a8dc55c9)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/7dd1742c-a3a5-4494-b148-1d435d754d5d",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Vr\u0161ac (7dd1742c-a3a5-4494-b148-1d435d754d5d)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/70d51242-571e-43ce-bd01-3bffca8cb4be",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Feldioara (70d51242-571e-43ce-bd01-3bffca8cb4be)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/707cb61a-d04e-4c7b-a620-6587db82f116",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Purc\u0103reni (707cb61a-d04e-4c7b-a620-6587db82f116)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/7422f9df-da23-450f-8eac-db2d8dfca42e",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Livezile (7422f9df-da23-450f-8eac-db2d8dfca42e)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/8c5f1f84-f11a-48f0-8e9a-c629c7d346e2",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell C\u00e2mpulung Muscel II (8c5f1f84-f11a-48f0-8e9a-c629c7d346e2)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/8f823c04-d42b-49ec-879d-2c446d575885",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Voine\u015fti (8f823c04-d42b-49ec-879d-2c446d575885)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/8fa245f8-ffe5-4e74-b259-410c7be91afd",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Tite\u015fti (8fa245f8-ffe5-4e74-b259-410c7be91afd)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/80ce787b-1ab0-42e7-b03c-c641d3767774",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Perisani (80ce787b-1ab0-42e7-b03c-c641d3767774)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/815f5c63-8478-4aac-bafb-11eaafa9a923",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Dupljaja (815f5c63-8478-4aac-bafb-11eaafa9a923)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/86dae60a-c827-480d-bb38-04a480b9ea01",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Cenad (86dae60a-c827-480d-bb38-04a480b9ea01)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/9a084d40-bf5c-42fa-8aa7-8c678524c631",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Racovi\u0163a (Praetorium II) (9a084d40-bf5c-42fa-8aa7-8c678524c631)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/9a118e00-be2c-4c2d-a9f9-8cb86170e3d1",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell R\u0103d\u0103cine\u015fti (9a118e00-be2c-4c2d-a9f9-8cb86170e3d1)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/9ac48ee9-00b6-46ab-a597-b6aa5f2d784a",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Bivolari (Arutela) (9ac48ee9-00b6-46ab-a597-b6aa5f2d784a)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/9b62118c-9936-42f2-a6e7-49f649c937f2",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Bumbe\u015fti (9b62118c-9936-42f2-a6e7-49f649c937f2)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/9ba7d74c-175e-48c8-9403-dbbdd650ed22",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Criste\u015fti (9ba7d74c-175e-48c8-9403-dbbdd650ed22)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/9d1c0c0d-98f5-4728-86ee-4288dde6d0fa",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell R\u00e2\u0219nov  (9d1c0c0d-98f5-4728-86ee-4288dde6d0fa)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/9f76d5fd-4ee3-4985-9fb6-c22bfdf43436",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Putineiu (9f76d5fd-4ee3-4985-9fb6-c22bfdf43436)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/918ef494-4408-4a91-8ee0-61f6087ffee7",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Surducul Mare (918ef494-4408-4a91-8ee0-61f6087ffee7)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/986efe66-cf8a-4b64-a488-ad95d0f2dd79",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Tih\u0103u (986efe66-cf8a-4b64-a488-ad95d0f2dd79)",
        "data": {}
      },
      {
        "id": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "parent": "http://www.opengis.net/ont/geosparql#Feature",
        "type": "geoclass",
        "text": "MilitaryCamp [98]",
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
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
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
        "instancecount": 4
      },
      {
        "id": "http://www.opengis.net/ont/geosparql#Feature",
        "parent": "http://www.opengis.net/ont/geosparql#SpatialObject",
        "type": "class",
        "text": "Feature (gsp:Feature)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/a6ec226a-3c2a-444a-9221-839201e1135f_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell S\u0103pata de Jos I Geometry (a6ec226a-3c2a-444a-9221-839201e1135f_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/aadec8db-70f9-4c40-833a-2a7c39c631d2_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell C\u0103tunele Geometry (aadec8db-70f9-4c40-833a-2a7c39c631d2_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/ae458e0d-85d0-4756-b265-db4db5bb7fe2_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Inl\u0103ceni Geometry (ae458e0d-85d0-4756-b265-db4db5bb7fe2_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/af909713-68f5-4b6d-89d5-03f7fc7fd5c1_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell S\u0103mbotin (Castra Traiana) Geometry (af909713-68f5-4b6d-89d5-03f7fc7fd5c1_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/b0524f84-a9d2-45fa-9f69-d8164ad73440_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Olteni Geometry (b0524f84-a9d2-45fa-9f69-d8164ad73440_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/b0cccdd1-2478-40bc-add2-a0e1bad88feb_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Sl\u0103veni Geometry (b0cccdd1-2478-40bc-add2-a0e1bad88feb_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/b5cf0c45-ec51-4710-a03a-75e7dc30a7a3_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Romanasi (Largiana) Geometry (b5cf0c45-ec51-4710-a03a-75e7dc30a7a3_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/b6e369cd-722a-4a1c-a984-538bb26f3777_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Buciumi Geometry (b6e369cd-722a-4a1c-a984-538bb26f3777_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/bd14e9f3-dd38-4329-a655-60b00fd8d5b7_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Sighisoara Geometry (bd14e9f3-dd38-4329-a655-60b00fd8d5b7_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/bf339c52-9ac1-4b87-94ab-2dc33bc7d3e4_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Odorheiul Secuiesc Geometry (bf339c52-9ac1-4b87-94ab-2dc33bc7d3e4_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/c3451d14-c4ee-42be-b918-af9735167f5f_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Sarateni Geometry (c3451d14-c4ee-42be-b918-af9735167f5f_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/c3a471a8-ab67-4e9c-b127-1eff017b0cb4_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Albota Geometry (c3a471a8-ab67-4e9c-b127-1eff017b0cb4_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/c8ecf3da-c535-41df-b06e-298cd8542633_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Teregova (Ad Pannonios) Geometry (c8ecf3da-c535-41df-b06e-298cd8542633_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/cba75304-f136-465d-90fb-56dff3acc018_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Eno\u015fe\u015fti (Acidava) Geometry (cba75304-f136-465d-90fb-56dff3acc018_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/d2adbbd5-f4a7-471d-a817-b28e37bcbfb1_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Banatska Palanka Geometry (d2adbbd5-f4a7-471d-a817-b28e37bcbfb1_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/d92ef45f-91c4-442e-b279-61f17fbccb7c_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Ili\u015fua (Arcobara) Geometry (d92ef45f-91c4-442e-b279-61f17fbccb7c_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/e0423dfe-4fdf-4bf6-8453-97d7bee4d031_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Ghioca Geometry (e0423dfe-4fdf-4bf6-8453-97d7bee4d031_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/e2573931-d743-40c3-a6b7-08ffeb244daa_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Valea Urluii Geometry (e2573931-d743-40c3-a6b7-08ffeb244daa_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/e3899f66-1234-4a44-b16e-2ead1e0bf696_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Cincsor Geometry (e3899f66-1234-4a44-b16e-2ead1e0bf696_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/e69e6cb2-cded-446c-b159-daec78476f43_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell C\u0103ciul\u0103te\u0219ti Geometry (e69e6cb2-cded-446c-b159-daec78476f43_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/e811fe5a-92d2-43a0-a572-51bc5942e242_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Aizis Geometry (e811fe5a-92d2-43a0-a572-51bc5942e242_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/ec646e12-636f-4c8c-96c2-0f46833adf1c_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell R\u0103carii de Jos Geometry (ec646e12-636f-4c8c-96c2-0f46833adf1c_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/ed79872f-dcb1-48d0-a008-5a3c65432a67_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Aradul Nou Geometry (ed79872f-dcb1-48d0-a008-5a3c65432a67_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/f35f2d3f-8925-4139-9e9b-cf07ee5aaecb_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Borosneu Mare Geometry (f35f2d3f-8925-4139-9e9b-cf07ee5aaecb_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/f42bb013-afeb-4044-9886-ece53cc813d4_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Sutoru Geometry (f42bb013-afeb-4044-9886-ece53cc813d4_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/f81e10af-8e41-447d-b601-dcba5311199b_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Re\u015fca (Romula/Malva) Geometry (f81e10af-8e41-447d-b601-dcba5311199b_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/f8305d66-9429-43c0-b6e3-73721df9986b_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Urluieni II Geometry (f8305d66-9429-43c0-b6e3-73721df9986b_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/fb3dfa9f-ac48-4ced-a8dc-2b635594cfdd_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell V\u0103r\u0103dia Geometry (fb3dfa9f-ac48-4ced-a8dc-2b635594cfdd_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/fddcce1d-ea5f-4dc2-a2d1-740ca41fa97e_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Legionslager Alba Julia Geometry (fddcce1d-ea5f-4dc2-a2d1-740ca41fa97e_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/ffd99607-0513-4fa5-8073-c80bddbfab84_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Tibiscum Geometry (ffd99607-0513-4fa5-8073-c80bddbfab84_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/0ab5e10e-4fb0-4854-835b-389043840ee0_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Li\u015fteava Geometry (0ab5e10e-4fb0-4854-835b-389043840ee0_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/0ccd99fd-62d1-4978-873a-106b1f5e3880_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Ruc\u0103r Geometry (0ccd99fd-62d1-4978-873a-106b1f5e3880_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/0e91c0e7-3991-4a45-89ed-382f7c74731a_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell S\u0103pata de Jos II Geometry (0e91c0e7-3991-4a45-89ed-382f7c74731a_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/0f25c729-a3c7-4cb4-b063-ff72c0124b4f_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Urluieni I Geometry (0f25c729-a3c7-4cb4-b063-ff72c0124b4f_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/0fe1d8dd-b425-4d55-ae80-2cd8d5d61ace_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell C\u0103\u015feiu (Samum) Geometry (0fe1d8dd-b425-4d55-ae80-2cd8d5d61ace_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/000d5176-6b9e-4065-a44f-d7b8f75b1199_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Or\u0103\u015ftioara de Sus Geometry (000d5176-6b9e-4065-a44f-d7b8f75b1199_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/01189de6-024d-4022-96ff-eec7e4efee0c_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Or\u0219ova (Dierna) Geometry (01189de6-024d-4022-96ff-eec7e4efee0c_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/0203af0b-bc52-4f9f-b490-b2bc3fe431fc_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Cigm\u0103u Geometry (0203af0b-bc52-4f9f-b490-b2bc3fe431fc_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/06eb8de4-750e-4ed9-ad04-9bf16d61c975_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Momote\u015fti (Rusidava) Geometry (06eb8de4-750e-4ed9-ad04-9bf16d61c975_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/096a9a4c-020f-4ce0-a4a6-993d50d08fea_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Cop\u0103ceni (Praetorium I) Geometry (096a9a4c-020f-4ce0-a4a6-993d50d08fea_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/1b4b9c1f-cb64-4c02-976d-61c2147b0705_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell R\u00e2ul Vadului Geometry (1b4b9c1f-cb64-4c02-976d-61c2147b0705_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/1c936059-6af8-4f03-8e18-cc61f529c5f3_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastelle von Porolissum Geometry (1c936059-6af8-4f03-8e18-cc61f529c5f3_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/1d8f65a8-c30b-40f1-9676-2e1145691ac3_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Abrud (Alburnus Maior) Geometry (1d8f65a8-c30b-40f1-9676-2e1145691ac3_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/1e218e82-f264-4241-a8e0-5efd9a1ec8a4_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Islaz-Razovica Geometry (1e218e82-f264-4241-a8e0-5efd9a1ec8a4_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/10b043a5-bb2b-48af-a168-84046185d6f7_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Pinoasa Geometry (10b043a5-bb2b-48af-a168-84046185d6f7_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/120e3991-1f39-4359-b810-37bb24aff05c_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Romita Geometry (120e3991-1f39-4359-b810-37bb24aff05c_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/1795d125-e071-4153-b07e-e147bb19ad65_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Comal\u0103u Geometry (1795d125-e071-4153-b07e-e147bb19ad65_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/19360a61-a15a-4d56-a100-f3be57e93ff1_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Mofleni (Pelendava) Geometry (19360a61-a15a-4d56-a100-f3be57e93ff1_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/2c2fb600-f249-469e-a025-1961edf5132d_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell R\u0103zboieni Geometry (2c2fb600-f249-469e-a025-1961edf5132d_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/22bf9a4e-a715-43f7-9fd0-4a60b8b77288_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Tia Mare Geometry (22bf9a4e-a715-43f7-9fd0-4a60b8b77288_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/3af3a2c4-8038-482d-9fa9-a0e90584ef6d_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Bulci Geometry (3af3a2c4-8038-482d-9fa9-a0e90584ef6d_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/3b51185a-d7ca-4c22-b85d-a021b3727c4d_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Br\u00e2ncovene\u015fti Geometry (3b51185a-d7ca-4c22-b85d-a021b3727c4d_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/3f7e0b8c-1a5f-423f-85da-536d87bbdcc8_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Orheiul Bistri\u0163ei Geometry (3f7e0b8c-1a5f-423f-85da-536d87bbdcc8_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/322e89c0-f571-4be4-a08c-84b35efb69e5_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell S\u00e2npaul Geometry (322e89c0-f571-4be4-a08c-84b35efb69e5_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/34d0d768-2d4d-42b3-82ae-e29bad5c1eed_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Gresia Geometry (34d0d768-2d4d-42b3-82ae-e29bad5c1eed_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/340738ca-7444-4896-a0fd-cd9e6806eb30_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Mehadia (Praetorium) Geometry (340738ca-7444-4896-a0fd-cd9e6806eb30_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/3680e065-f377-4f4d-a9d6-84523dcb1727_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Bre\u021bcu Geometry (3680e065-f377-4f4d-a9d6-84523dcb1727_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/4dbfae9e-f0f7-4dab-94ca-9bca2cec83aa_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Fl\u0103m\u0103nda (Poiana) Geometry (4dbfae9e-f0f7-4dab-94ca-9bca2cec83aa_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/4df4edbc-facd-42bd-b05e-076f94ae693b_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell IIone\u0219tii Govorii (Pons Aluti) Geometry (4df4edbc-facd-42bd-b05e-076f94ae693b_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/4e013c45-7445-4ea6-8356-2c9cc9e7ac6e_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Gil\u0103u Geometry (4e013c45-7445-4ea6-8356-2c9cc9e7ac6e_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/4198c975-e14a-4fb3-9b2e-7be9e145ecac_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Jiblea Geometry (4198c975-e14a-4fb3-9b2e-7be9e145ecac_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/42d9c007-47e1-4b2a-ab2c-c381f93cac96_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Grebenac Geometry (42d9c007-47e1-4b2a-ab2c-c381f93cac96_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/46e40ed7-3b02-4bb3-ba5c-8dcb5f55b990_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Plesa Geometry (46e40ed7-3b02-4bb3-ba5c-8dcb5f55b990_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/47a7d25e-6315-4256-b257-c2dfaea5e42f_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Z\u0103voi (Acmonia ?) Geometry (47a7d25e-6315-4256-b257-c2dfaea5e42f_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/497eff64-e309-4704-b5f0-3e2872ff379d_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Legionslager Potaissa Geometry (497eff64-e309-4704-b5f0-3e2872ff379d_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/5a43030f-b985-4444-8cf9-3e4a0b132d79_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell V\u00e2rtop Geometry (5a43030f-b985-4444-8cf9-3e4a0b132d79_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/5b90b8d5-ba6e-4789-94d2-db823824acbf_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell C\u0103ineni (Pons Vetus ?) Geometry (5b90b8d5-ba6e-4789-94d2-db823824acbf_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/5d0fac8e-53ae-4ae7-92a2-dd419eee0dce_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Hoghiz Geometry (5d0fac8e-53ae-4ae7-92a2-dd419eee0dce_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/5e33b468-4135-46b4-babc-99f5c423f966_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Szeged Geometry (5e33b468-4135-46b4-babc-99f5c423f966_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/5e6a65c9-32dd-4581-b6ab-a95afdc4d061_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell C\u00e2mpulung Muscel I Geometry (5e6a65c9-32dd-4581-b6ab-a95afdc4d061_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/5ea0f057-026f-4556-97f5-3e0e3a9471c3_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Gherla Geometry (5ea0f057-026f-4556-97f5-3e0e3a9471c3_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/50320dbe-929c-40e3-aebd-f8f257d6472a_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Castranova Geometry (50320dbe-929c-40e3-aebd-f8f257d6472a_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/5709a2bb-8d86-44af-b582-19151b918068_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Sarmizegetusa (Ulpia Traiana) Geometry (5709a2bb-8d86-44af-b582-19151b918068_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/59eaf728-6bdb-4f30-a9e7-abec5dbbaa5f_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell S\u00e2nnicolau Mare Geometry (59eaf728-6bdb-4f30-a9e7-abec5dbbaa5f_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/6c5d4f2f-8a7b-4ad5-8672-f4ecc7e80ff0_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell B\u0103neasa I Geometry (6c5d4f2f-8a7b-4ad5-8672-f4ecc7e80ff0_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/64ae9ea8-9dca-4e22-b32b-c2f95fd80b44_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell F\u00e2lfani Geometry (64ae9ea8-9dca-4e22-b32b-c2f95fd80b44_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/6689fc0e-01ff-4dbc-b3ed-49e35a3d397a_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Bologa (Resculum) Geometry (6689fc0e-01ff-4dbc-b3ed-49e35a3d397a_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/7a5a0685-4a85-48f0-a5ac-7b3b56efa3dc_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Ro\u0219iorii de Vede Geometry (7a5a0685-4a85-48f0-a5ac-7b3b56efa3dc_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/7aa137c0-3763-4bd3-a1ec-bd8a88b3d786_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell C\u0103lug\u0103reni Geometry (7aa137c0-3763-4bd3-a1ec-bd8a88b3d786_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/7b05b48b-cd48-4c66-916e-6ea581179843_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Islaz-Verdea Geometry (7b05b48b-cd48-4c66-916e-6ea581179843_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/7c3bf06c-8f79-457e-b56f-77da98c7a69b_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell B\u0103neasa II Geometry (7c3bf06c-8f79-457e-b56f-77da98c7a69b_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/7cadca30-bfd9-4628-9916-c20eecafa356_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Stolniceni Geometry (7cadca30-bfd9-4628-9916-c20eecafa356_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/7cb289bf-4a31-467d-9c9d-4271a8dc55c9_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Boi\u0163a (Caput Stenarum) Geometry (7cb289bf-4a31-467d-9c9d-4271a8dc55c9_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/7dd1742c-a3a5-4494-b148-1d435d754d5d_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Vr\u0161ac Geometry (7dd1742c-a3a5-4494-b148-1d435d754d5d_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/7e6b0abd-392e-48da-a973-52db57e43459_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Berzovia Geometry (7e6b0abd-392e-48da-a973-52db57e43459_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/70d51242-571e-43ce-bd01-3bffca8cb4be_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Feldioara Geometry (70d51242-571e-43ce-bd01-3bffca8cb4be_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/707cb61a-d04e-4c7b-a620-6587db82f116_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Purc\u0103reni Geometry (707cb61a-d04e-4c7b-a620-6587db82f116_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/7422f9df-da23-450f-8eac-db2d8dfca42e_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Livezile Geometry (7422f9df-da23-450f-8eac-db2d8dfca42e_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/8c5f1f84-f11a-48f0-8e9a-c629c7d346e2_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell C\u00e2mpulung Muscel II Geometry (8c5f1f84-f11a-48f0-8e9a-c629c7d346e2_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/8f823c04-d42b-49ec-879d-2c446d575885_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Voine\u015fti Geometry (8f823c04-d42b-49ec-879d-2c446d575885_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/8fa245f8-ffe5-4e74-b259-410c7be91afd_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Tite\u015fti Geometry (8fa245f8-ffe5-4e74-b259-410c7be91afd_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/80ce787b-1ab0-42e7-b03c-c641d3767774_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Perisani Geometry (80ce787b-1ab0-42e7-b03c-c641d3767774_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/815f5c63-8478-4aac-bafb-11eaafa9a923_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Dupljaja Geometry (815f5c63-8478-4aac-bafb-11eaafa9a923_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/86dae60a-c827-480d-bb38-04a480b9ea01_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Cenad Geometry (86dae60a-c827-480d-bb38-04a480b9ea01_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/87009579-c2cc-4c7a-9b02-901bf75a0ee6_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Ve\u021bel Geometry (87009579-c2cc-4c7a-9b02-901bf75a0ee6_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/9a084d40-bf5c-42fa-8aa7-8c678524c631_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Racovi\u0163a (Praetorium II) Geometry (9a084d40-bf5c-42fa-8aa7-8c678524c631_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/9a118e00-be2c-4c2d-a9f9-8cb86170e3d1_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell R\u0103d\u0103cine\u015fti Geometry (9a118e00-be2c-4c2d-a9f9-8cb86170e3d1_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/9ac48ee9-00b6-46ab-a597-b6aa5f2d784a_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Bivolari (Arutela) Geometry (9ac48ee9-00b6-46ab-a597-b6aa5f2d784a_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/9b62118c-9936-42f2-a6e7-49f649c937f2_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Bumbe\u015fti Geometry (9b62118c-9936-42f2-a6e7-49f649c937f2_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/9ba7d74c-175e-48c8-9403-dbbdd650ed22_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Criste\u015fti Geometry (9ba7d74c-175e-48c8-9403-dbbdd650ed22_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/9d1c0c0d-98f5-4728-86ee-4288dde6d0fa_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell R\u00e2\u0219nov Geometry (9d1c0c0d-98f5-4728-86ee-4288dde6d0fa_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/9f76d5fd-4ee3-4985-9fb6-c22bfdf43436_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Putineiu Geometry (9f76d5fd-4ee3-4985-9fb6-c22bfdf43436_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/918ef494-4408-4a91-8ee0-61f6087ffee7_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Surducul Mare Geometry (918ef494-4408-4a91-8ee0-61f6087ffee7_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/986efe66-cf8a-4b64-a488-ad95d0f2dd79_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Tih\u0103u Geometry (986efe66-cf8a-4b64-a488-ad95d0f2dd79_geom)",
        "data": {}
      },
      {
        "id": "http://www.opengis.net/ont/sf#Point",
        "parent": "http://www.opengis.net/ont/geosparql#Geometry",
        "type": "geoclass",
        "text": "Point (sf:Point) [144]",
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
              "http://archaeoinformatics.link/ontology#MilitaryCamp": 1
            }
          }
        },
        "instancecount": 3
      },
      {
        "id": "http://www.opengis.net/ont/geosparql#Geometry",
        "parent": "http://www.opengis.net/ont/geosparql#SpatialObject",
        "type": "class",
        "text": "Geometry (gsp:Geometry)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/fddcce1d-ea5f-4dc2-a2d1-740ca41fa97e",
        "parent": "http://archaeoinformatics.link/ontology#LegionaryCamp",
        "type": "geoinstance",
        "text": "Legionslager Alba Julia (fddcce1d-ea5f-4dc2-a2d1-740ca41fa97e)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/ffd99607-0513-4fa5-8073-c80bddbfab84",
        "parent": "http://archaeoinformatics.link/ontology#LegionaryCamp",
        "type": "geoinstance",
        "text": "Kastell Tibiscum (ffd99607-0513-4fa5-8073-c80bddbfab84)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/497eff64-e309-4704-b5f0-3e2872ff379d",
        "parent": "http://archaeoinformatics.link/ontology#LegionaryCamp",
        "type": "geoinstance",
        "text": "Legionslager Potaissa (497eff64-e309-4704-b5f0-3e2872ff379d)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/5709a2bb-8d86-44af-b582-19151b918068",
        "parent": "http://archaeoinformatics.link/ontology#LegionaryCamp",
        "type": "geoinstance",
        "text": "Kastell Sarmizegetusa (Ulpia Traiana) (5709a2bb-8d86-44af-b582-19151b918068)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/7e6b0abd-392e-48da-a973-52db57e43459",
        "parent": "http://archaeoinformatics.link/ontology#LegionaryCamp",
        "type": "geoinstance",
        "text": "Kastell Berzovia  (7e6b0abd-392e-48da-a973-52db57e43459)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/87009579-c2cc-4c7a-9b02-901bf75a0ee6",
        "parent": "http://archaeoinformatics.link/ontology#LegionaryCamp",
        "type": "geoinstance",
        "text": "Kastell Ve\u021bel (87009579-c2cc-4c7a-9b02-901bf75a0ee6)",
        "data": {}
      },
      {
        "id": "http://archaeoinformatics.link/ontology#LegionaryCamp",
        "parent": "http://www.opengis.net/ont/geosparql#Feature",
        "type": "geoclass",
        "text": "LegionaryCamp [6]",
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
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 4
      },
      {
        "id": "http://www.opengis.net/ont/geosparql#SpatialObject",
        "parent": "#",
        "type": "class",
        "text": "SpatialObject (gsp:SpatialObject)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/LimesNoricumFeatures",
        "parent": "http://www.opengis.net/ont/geosparql#FeatureCollection",
        "type": "featurecollection",
        "text": "Limes Noricum Features (LimesNoricumFeatures)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/LimesNoricumGeometries",
        "parent": "http://www.opengis.net/ont/geosparql#GeometryCollection",
        "type": "geocollection",
        "text": "Limes Noricum Geometries (LimesNoricumGeometries)",
        "data": {}
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
        "id": "http://lod.squirrel.link/data/limes/nonns_Limes.html",
        "parent": "http://www.opengis.net/ont/geosparql#Feature",
        "type": "geoclass",
        "text": "Limes (Limes)",
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
      }
    ]
  }
}