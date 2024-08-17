var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Western_1 = new ol.format.GeoJSON();
var features_Western_1 = format_Western_1.readFeatures(json_Western_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Western_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Western_1.addFeatures(features_Western_1);
var lyr_Western_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Western_1, 
                style: style_Western_1,
                popuplayertitle: "Western",
                interactive: true,
                title: '<img src="styles/legend/Western_1.png" /> Western'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Western_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Western_1];
lyr_Western_1.set('fieldAliases', {'PROVINCE_N': 'PROVINCE_N', 'DISTRICT_N': 'DISTRICT_N', 'DSD_N': 'DSD_N', 'DSD_C': 'DSD_C', 'GND_N': 'GND_N', 'GND_NO': 'GND_NO', 'GND_C': 'GND_C', 'PROVINCE_C': 'PROVINCE_C', 'DISTRICT_C': 'DISTRICT_C', 'GN_UID': 'GN_UID', 'OID_': 'OID_', 'UID_DIST_D': 'UID_DIST_D', 'TOT_POP': 'TOT_POP', 'MALE': 'MALE', 'FEMALE': 'FEMALE', 'RANK_POP': 'RANK_POP', 'RATIOSEX': 'RATIOSEX', 'RANK_SR': 'RANK_SR', '0TO14': '0TO14', '15TO59': '15TO59', 'OVER60': 'OVER60', 'RATIODEPEN': 'RATIODEPEN', 'RANK_DR': 'RANK_DR', 'BUDDHIST': 'BUDDHIST', 'HINDU': 'HINDU', 'ISLAM': 'ISLAM', 'ROMANCATHO': 'ROMANCATHO', 'OTHERCHRIS': 'OTHERCHRIS', 'OTHERELIGI': 'OTHERELIGI', 'SINHALESE': 'SINHALESE', 'SRILANKATA': 'SRILANKATA', 'INDIANTAMI': 'INDIANTAMI', 'SRILANKAMO': 'SRILANKAMO', 'OTHERETHGR': 'OTHERETHGR', 'NAME_DIST_': 'NAME_DIST_', 'NUM_GN': 'NUM_GN', 'Area': 'Area', 'CL': 'CL', 'density': 'density', });
lyr_Western_1.set('fieldImages', {'PROVINCE_N': '', 'DISTRICT_N': '', 'DSD_N': '', 'DSD_C': '', 'GND_N': '', 'GND_NO': '', 'GND_C': '', 'PROVINCE_C': '', 'DISTRICT_C': '', 'GN_UID': '', 'OID_': '', 'UID_DIST_D': '', 'TOT_POP': '', 'MALE': '', 'FEMALE': '', 'RANK_POP': '', 'RATIOSEX': '', 'RANK_SR': '', '0TO14': '', '15TO59': '', 'OVER60': '', 'RATIODEPEN': '', 'RANK_DR': '', 'BUDDHIST': '', 'HINDU': '', 'ISLAM': '', 'ROMANCATHO': '', 'OTHERCHRIS': '', 'OTHERELIGI': '', 'SINHALESE': '', 'SRILANKATA': '', 'INDIANTAMI': '', 'SRILANKAMO': '', 'OTHERETHGR': '', 'NAME_DIST_': '', 'NUM_GN': '', 'Area': '', 'CL': '', 'density': '', });
lyr_Western_1.set('fieldLabels', {'PROVINCE_N': 'no label', 'DISTRICT_N': 'no label', 'DSD_N': 'no label', 'DSD_C': 'no label', 'GND_N': 'no label', 'GND_NO': 'no label', 'GND_C': 'no label', 'PROVINCE_C': 'no label', 'DISTRICT_C': 'no label', 'GN_UID': 'no label', 'OID_': 'no label', 'UID_DIST_D': 'no label', 'TOT_POP': 'no label', 'MALE': 'no label', 'FEMALE': 'no label', 'RANK_POP': 'no label', 'RATIOSEX': 'no label', 'RANK_SR': 'no label', '0TO14': 'no label', '15TO59': 'no label', 'OVER60': 'no label', 'RATIODEPEN': 'no label', 'RANK_DR': 'no label', 'BUDDHIST': 'no label', 'HINDU': 'no label', 'ISLAM': 'no label', 'ROMANCATHO': 'no label', 'OTHERCHRIS': 'no label', 'OTHERELIGI': 'no label', 'SINHALESE': 'no label', 'SRILANKATA': 'no label', 'INDIANTAMI': 'no label', 'SRILANKAMO': 'no label', 'OTHERETHGR': 'no label', 'NAME_DIST_': 'no label', 'NUM_GN': 'no label', 'Area': 'no label', 'CL': 'no label', 'density': 'no label', });
lyr_Western_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});