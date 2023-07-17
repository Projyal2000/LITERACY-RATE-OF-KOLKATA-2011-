ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32645").setExtent([622627.513083, 2482773.173210, 660986.997971, 2504401.854520]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_LITERACYRATEOFKOLKATAWARDWISE2011_1 = new ol.format.GeoJSON();
var features_LITERACYRATEOFKOLKATAWARDWISE2011_1 = format_LITERACYRATEOFKOLKATAWARDWISE2011_1.readFeatures(json_LITERACYRATEOFKOLKATAWARDWISE2011_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32645'});
var jsonSource_LITERACYRATEOFKOLKATAWARDWISE2011_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LITERACYRATEOFKOLKATAWARDWISE2011_1.addFeatures(features_LITERACYRATEOFKOLKATAWARDWISE2011_1);
var lyr_LITERACYRATEOFKOLKATAWARDWISE2011_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LITERACYRATEOFKOLKATAWARDWISE2011_1, 
                style: style_LITERACYRATEOFKOLKATAWARDWISE2011_1,
                interactive: true,
    title: 'LITERACY RATE OF KOLKATA(WARD WISE, 2011)<br />\
    <img src="styles/legend/LITERACYRATEOFKOLKATAWARDWISE2011_1_0.png" /> 95 - 100<br />\
    <img src="styles/legend/LITERACYRATEOFKOLKATAWARDWISE2011_1_1.png" /> 90 - 95<br />\
    <img src="styles/legend/LITERACYRATEOFKOLKATAWARDWISE2011_1_2.png" /> 85 - 90<br />\
    <img src="styles/legend/LITERACYRATEOFKOLKATAWARDWISE2011_1_3.png" /> 80 - 85<br />\
    <img src="styles/legend/LITERACYRATEOFKOLKATAWARDWISE2011_1_4.png" /> 75 - 80<br />\
    <img src="styles/legend/LITERACYRATEOFKOLKATAWARDWISE2011_1_5.png" /> 70 - 75<br />\
    <img src="styles/legend/LITERACYRATEOFKOLKATAWARDWISE2011_1_6.png" /> 65 - 70<br />\
    <img src="styles/legend/LITERACYRATEOFKOLKATAWARDWISE2011_1_7.png" /> 60 - 65<br />\
    <img src="styles/legend/LITERACYRATEOFKOLKATAWARDWISE2011_1_8.png" /> Not available<br />'
        });
var format_HOOGHLYRIVER_2 = new ol.format.GeoJSON();
var features_HOOGHLYRIVER_2 = format_HOOGHLYRIVER_2.readFeatures(json_HOOGHLYRIVER_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32645'});
var jsonSource_HOOGHLYRIVER_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HOOGHLYRIVER_2.addFeatures(features_HOOGHLYRIVER_2);
var lyr_HOOGHLYRIVER_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HOOGHLYRIVER_2, 
                style: style_HOOGHLYRIVER_2,
                interactive: false,
                title: '<img src="styles/legend/HOOGHLYRIVER_2.png" /> HOOGHLY RIVER'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_LITERACYRATEOFKOLKATAWARDWISE2011_1.setVisible(true);lyr_HOOGHLYRIVER_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_LITERACYRATEOFKOLKATAWARDWISE2011_1,lyr_HOOGHLYRIVER_2];
lyr_LITERACYRATEOFKOLKATAWARDWISE2011_1.set('fieldAliases', {'ward_no': 'ward_no', 'Name': 'Name', 'TRU': 'TRU', 'No_HH': 'No_HH', 'TOT_P': 'TOT_P', 'P_LIT': 'P_LIT', 'M_LIT': 'M_LIT', 'F_LIT': 'F_LIT', 'P_ILL': 'P_ILL', 'M_ILL': 'M_ILL', 'F_ILL': 'F_ILL', 'LIT_RATE': 'LIT_RATE', 'Area_sqkm': 'Area_sqkm', });
lyr_HOOGHLYRIVER_2.set('fieldAliases', {'RIVER': 'RIVER', });
lyr_LITERACYRATEOFKOLKATAWARDWISE2011_1.set('fieldImages', {'ward_no': 'TextEdit', 'Name': 'TextEdit', 'TRU': 'TextEdit', 'No_HH': 'TextEdit', 'TOT_P': 'TextEdit', 'P_LIT': 'TextEdit', 'M_LIT': 'TextEdit', 'F_LIT': 'TextEdit', 'P_ILL': 'TextEdit', 'M_ILL': 'TextEdit', 'F_ILL': 'TextEdit', 'LIT_RATE': 'Range', 'Area_sqkm': 'TextEdit', });
lyr_HOOGHLYRIVER_2.set('fieldImages', {'RIVER': '', });
lyr_LITERACYRATEOFKOLKATAWARDWISE2011_1.set('fieldLabels', {'ward_no': 'inline label', 'Name': 'header label', 'TRU': 'inline label', 'No_HH': 'inline label', 'TOT_P': 'inline label', 'P_LIT': 'inline label', 'M_LIT': 'inline label', 'F_LIT': 'inline label', 'P_ILL': 'inline label', 'M_ILL': 'inline label', 'F_ILL': 'inline label', 'LIT_RATE': 'inline label', 'Area_sqkm': 'inline label', });
lyr_HOOGHLYRIVER_2.set('fieldLabels', {'RIVER': 'header label', });
lyr_HOOGHLYRIVER_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});