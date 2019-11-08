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
var format_MarinePrioritizationAreas_1 = new ol.format.GeoJSON();
var features_MarinePrioritizationAreas_1 = format_MarinePrioritizationAreas_1.readFeatures(json_MarinePrioritizationAreas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MarinePrioritizationAreas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MarinePrioritizationAreas_1.addFeatures(features_MarinePrioritizationAreas_1);
var lyr_MarinePrioritizationAreas_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MarinePrioritizationAreas_1, 
                style: style_MarinePrioritizationAreas_1,
                interactive: true,
                title: '<img src="styles/legend/MarinePrioritizationAreas_1.png" /> Marine Prioritization Areas'
            });
var format_IntactMangroves_2 = new ol.format.GeoJSON();
var features_IntactMangroves_2 = format_IntactMangroves_2.readFeatures(json_IntactMangroves_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IntactMangroves_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IntactMangroves_2.addFeatures(features_IntactMangroves_2);
var lyr_IntactMangroves_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IntactMangroves_2, 
                style: style_IntactMangroves_2,
                interactive: true,
                title: '<img src="styles/legend/IntactMangroves_2.png" /> Intact Mangroves'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_MarinePrioritizationAreas_1.setVisible(true);lyr_IntactMangroves_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_MarinePrioritizationAreas_1,lyr_IntactMangroves_2];
lyr_MarinePrioritizationAreas_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'COV_': 'COV_', 'COV_ID': 'COV_ID', 'REGION_ID': 'REGION_ID', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'BIODIV': 'BIODIV', 'AMENAZA': 'AMENAZA', 'USO': 'USO', 'INFORMA': 'INFORMA', });
lyr_IntactMangroves_2.set('fieldAliases', {'Clase': 'Clase', 'Fecha': 'Fecha', 'ha': 'ha', 'Descrip': 'Descrip', 'COV_': 'COV_', 'COV_ID': 'COV_ID', });
lyr_MarinePrioritizationAreas_1.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'COV_': 'TextEdit', 'COV_ID': 'TextEdit', 'REGION_ID': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'BIODIV': 'TextEdit', 'AMENAZA': 'TextEdit', 'USO': 'TextEdit', 'INFORMA': 'TextEdit', });
lyr_IntactMangroves_2.set('fieldImages', {'Clase': 'Range', 'Fecha': 'Range', 'ha': 'TextEdit', 'Descrip': 'TextEdit', 'COV_': 'TextEdit', 'COV_ID': 'TextEdit', });
lyr_MarinePrioritizationAreas_1.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'COV_': 'no label', 'COV_ID': 'no label', 'REGION_ID': 'no label', 'REGION': 'no label', 'PROVINCIA': 'no label', 'BIODIV': 'no label', 'AMENAZA': 'no label', 'USO': 'no label', 'INFORMA': 'no label', });
lyr_IntactMangroves_2.set('fieldLabels', {'Clase': 'no label', 'Fecha': 'no label', 'ha': 'no label', 'Descrip': 'no label', 'COV_': 'no label', 'COV_ID': 'no label', });
lyr_IntactMangroves_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});