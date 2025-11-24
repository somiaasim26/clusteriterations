var wms_layers = [];


        var lyr_WorldStreets_0 = new ol.layer.Tile({
            'title': 'World Streets',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_NewJurisdictionTown_1 = new ol.format.GeoJSON();
var features_NewJurisdictionTown_1 = format_NewJurisdictionTown_1.readFeatures(json_NewJurisdictionTown_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NewJurisdictionTown_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NewJurisdictionTown_1.addFeatures(features_NewJurisdictionTown_1);
var lyr_NewJurisdictionTown_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NewJurisdictionTown_1, 
                style: style_NewJurisdictionTown_1,
                popuplayertitle: 'New Jurisdiction Town',
                interactive: true,
    title: 'New Jurisdiction Town<br />\
    <img src="styles/legend/NewJurisdictionTown_1_0.png" /> Allama Iqbal Town<br />\
    <img src="styles/legend/NewJurisdictionTown_1_1.png" /> Cantonment<br />\
    <img src="styles/legend/NewJurisdictionTown_1_2.png" /> Lahore City<br />\
    <img src="styles/legend/NewJurisdictionTown_1_3.png" /> Model Town<br />\
    <img src="styles/legend/NewJurisdictionTown_1_4.png" /> Nishtar Town<br />\
    <img src="styles/legend/NewJurisdictionTown_1_5.png" /> Raiwind Town<br />\
    <img src="styles/legend/NewJurisdictionTown_1_6.png" /> Ravi Town<br />\
    <img src="styles/legend/NewJurisdictionTown_1_7.png" /> Saddar Town<br />\
    <img src="styles/legend/NewJurisdictionTown_1_8.png" /> Shalimar Town<br />\
    <img src="styles/legend/NewJurisdictionTown_1_9.png" /> Wahga Town<br />\
    <img src="styles/legend/NewJurisdictionTown_1_10.png" /> <br />' });
var format_ClusterBoundary_2 = new ol.format.GeoJSON();
var features_ClusterBoundary_2 = format_ClusterBoundary_2.readFeatures(json_ClusterBoundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClusterBoundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClusterBoundary_2.addFeatures(features_ClusterBoundary_2);
var lyr_ClusterBoundary_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClusterBoundary_2, 
                style: style_ClusterBoundary_2,
                popuplayertitle: 'Cluster Boundary',
                interactive: true,
    title: 'Cluster Boundary<br />\
    <img src="styles/legend/ClusterBoundary_2_0.png" /> 0<br />\
    <img src="styles/legend/ClusterBoundary_2_1.png" /> 1<br />\
    <img src="styles/legend/ClusterBoundary_2_2.png" /> 2<br />\
    <img src="styles/legend/ClusterBoundary_2_3.png" /> 3<br />\
    <img src="styles/legend/ClusterBoundary_2_4.png" /> 4<br />\
    <img src="styles/legend/ClusterBoundary_2_5.png" /> 5<br />\
    <img src="styles/legend/ClusterBoundary_2_6.png" /> 6<br />\
    <img src="styles/legend/ClusterBoundary_2_7.png" /> 7<br />\
    <img src="styles/legend/ClusterBoundary_2_8.png" /> 8<br />\
    <img src="styles/legend/ClusterBoundary_2_9.png" /> 9<br />\
    <img src="styles/legend/ClusterBoundary_2_10.png" /> 10<br />\
    <img src="styles/legend/ClusterBoundary_2_11.png" /> 11<br />\
    <img src="styles/legend/ClusterBoundary_2_12.png" /> 12<br />\
    <img src="styles/legend/ClusterBoundary_2_13.png" /> 13<br />\
    <img src="styles/legend/ClusterBoundary_2_14.png" /> 14<br />\
    <img src="styles/legend/ClusterBoundary_2_15.png" /> 15<br />\
    <img src="styles/legend/ClusterBoundary_2_16.png" /> 16<br />\
    <img src="styles/legend/ClusterBoundary_2_17.png" /> 17<br />\
    <img src="styles/legend/ClusterBoundary_2_18.png" /> 18<br />\
    <img src="styles/legend/ClusterBoundary_2_19.png" /> 19<br />\
    <img src="styles/legend/ClusterBoundary_2_20.png" /> 20<br />\
    <img src="styles/legend/ClusterBoundary_2_21.png" /> 21<br />\
    <img src="styles/legend/ClusterBoundary_2_22.png" /> 22<br />\
    <img src="styles/legend/ClusterBoundary_2_23.png" /> 23<br />\
    <img src="styles/legend/ClusterBoundary_2_24.png" /> 24<br />\
    <img src="styles/legend/ClusterBoundary_2_25.png" /> 25<br />\
    <img src="styles/legend/ClusterBoundary_2_26.png" /> 26<br />\
    <img src="styles/legend/ClusterBoundary_2_27.png" /> 27<br />\
    <img src="styles/legend/ClusterBoundary_2_28.png" /> 28<br />\
    <img src="styles/legend/ClusterBoundary_2_29.png" /> 29<br />\
    <img src="styles/legend/ClusterBoundary_2_30.png" /> 30<br />\
    <img src="styles/legend/ClusterBoundary_2_31.png" /> 31<br />\
    <img src="styles/legend/ClusterBoundary_2_32.png" /> 32<br />\
    <img src="styles/legend/ClusterBoundary_2_33.png" /> 33<br />\
    <img src="styles/legend/ClusterBoundary_2_34.png" /> 34<br />\
    <img src="styles/legend/ClusterBoundary_2_35.png" /> 35<br />\
    <img src="styles/legend/ClusterBoundary_2_36.png" /> 36<br />\
    <img src="styles/legend/ClusterBoundary_2_37.png" /> 37<br />\
    <img src="styles/legend/ClusterBoundary_2_38.png" /> 38<br />\
    <img src="styles/legend/ClusterBoundary_2_39.png" /> 39<br />\
    <img src="styles/legend/ClusterBoundary_2_40.png" /> 40<br />\
    <img src="styles/legend/ClusterBoundary_2_41.png" /> 41<br />\
    <img src="styles/legend/ClusterBoundary_2_42.png" /> 42<br />\
    <img src="styles/legend/ClusterBoundary_2_43.png" /> 43<br />\
    <img src="styles/legend/ClusterBoundary_2_44.png" /> 44<br />\
    <img src="styles/legend/ClusterBoundary_2_45.png" /> 45<br />\
    <img src="styles/legend/ClusterBoundary_2_46.png" /> 46<br />\
    <img src="styles/legend/ClusterBoundary_2_47.png" /> 47<br />\
    <img src="styles/legend/ClusterBoundary_2_48.png" /> 48<br />\
    <img src="styles/legend/ClusterBoundary_2_49.png" /> 49<br />\
    <img src="styles/legend/ClusterBoundary_2_50.png" /> 50<br />\
    <img src="styles/legend/ClusterBoundary_2_51.png" /> 51<br />\
    <img src="styles/legend/ClusterBoundary_2_52.png" /> 52<br />\
    <img src="styles/legend/ClusterBoundary_2_53.png" /> 53<br />\
    <img src="styles/legend/ClusterBoundary_2_54.png" /> 54<br />\
    <img src="styles/legend/ClusterBoundary_2_55.png" /> 55<br />\
    <img src="styles/legend/ClusterBoundary_2_56.png" /> 56<br />\
    <img src="styles/legend/ClusterBoundary_2_57.png" /> 57<br />\
    <img src="styles/legend/ClusterBoundary_2_58.png" /> 58<br />\
    <img src="styles/legend/ClusterBoundary_2_59.png" /> 59<br />\
    <img src="styles/legend/ClusterBoundary_2_60.png" /> 60<br />\
    <img src="styles/legend/ClusterBoundary_2_61.png" /> 61<br />\
    <img src="styles/legend/ClusterBoundary_2_62.png" /> 62<br />\
    <img src="styles/legend/ClusterBoundary_2_63.png" /> 63<br />\
    <img src="styles/legend/ClusterBoundary_2_64.png" /> 64<br />\
    <img src="styles/legend/ClusterBoundary_2_65.png" /> 65<br />\
    <img src="styles/legend/ClusterBoundary_2_66.png" /> 66<br />\
    <img src="styles/legend/ClusterBoundary_2_67.png" /> 67<br />\
    <img src="styles/legend/ClusterBoundary_2_68.png" /> 68<br />\
    <img src="styles/legend/ClusterBoundary_2_69.png" /> 69<br />\
    <img src="styles/legend/ClusterBoundary_2_70.png" /> 70<br />\
    <img src="styles/legend/ClusterBoundary_2_71.png" /> 71<br />\
    <img src="styles/legend/ClusterBoundary_2_72.png" /> 72<br />\
    <img src="styles/legend/ClusterBoundary_2_73.png" /> 73<br />\
    <img src="styles/legend/ClusterBoundary_2_74.png" /> 74<br />\
    <img src="styles/legend/ClusterBoundary_2_75.png" /> 75<br />\
    <img src="styles/legend/ClusterBoundary_2_76.png" /> 76<br />\
    <img src="styles/legend/ClusterBoundary_2_77.png" /> 77<br />\
    <img src="styles/legend/ClusterBoundary_2_78.png" /> 78<br />\
    <img src="styles/legend/ClusterBoundary_2_79.png" /> 79<br />\
    <img src="styles/legend/ClusterBoundary_2_80.png" /> 80<br />\
    <img src="styles/legend/ClusterBoundary_2_81.png" /> 81<br />\
    <img src="styles/legend/ClusterBoundary_2_82.png" /> 82<br />\
    <img src="styles/legend/ClusterBoundary_2_83.png" /> 83<br />\
    <img src="styles/legend/ClusterBoundary_2_84.png" /> 84<br />\
    <img src="styles/legend/ClusterBoundary_2_85.png" /> 85<br />\
    <img src="styles/legend/ClusterBoundary_2_86.png" /> 86<br />\
    <img src="styles/legend/ClusterBoundary_2_87.png" /> 87<br />\
    <img src="styles/legend/ClusterBoundary_2_88.png" /> 88<br />\
    <img src="styles/legend/ClusterBoundary_2_89.png" /> 89<br />\
    <img src="styles/legend/ClusterBoundary_2_90.png" /> 90<br />\
    <img src="styles/legend/ClusterBoundary_2_91.png" /> 91<br />\
    <img src="styles/legend/ClusterBoundary_2_92.png" /> 92<br />\
    <img src="styles/legend/ClusterBoundary_2_93.png" /> 93<br />\
    <img src="styles/legend/ClusterBoundary_2_94.png" /> 94<br />\
    <img src="styles/legend/ClusterBoundary_2_95.png" /> 95<br />\
    <img src="styles/legend/ClusterBoundary_2_96.png" /> 96<br />\
    <img src="styles/legend/ClusterBoundary_2_97.png" /> 97<br />\
    <img src="styles/legend/ClusterBoundary_2_98.png" /> 98<br />\
    <img src="styles/legend/ClusterBoundary_2_99.png" /> 99<br />\
    <img src="styles/legend/ClusterBoundary_2_100.png" /> 100<br />\
    <img src="styles/legend/ClusterBoundary_2_101.png" /> 101<br />\
    <img src="styles/legend/ClusterBoundary_2_102.png" /> 102<br />\
    <img src="styles/legend/ClusterBoundary_2_103.png" /> 103<br />\
    <img src="styles/legend/ClusterBoundary_2_104.png" /> 104<br />\
    <img src="styles/legend/ClusterBoundary_2_105.png" /> 105<br />\
    <img src="styles/legend/ClusterBoundary_2_106.png" /> 106<br />\
    <img src="styles/legend/ClusterBoundary_2_107.png" /> 107<br />\
    <img src="styles/legend/ClusterBoundary_2_108.png" /> 108<br />\
    <img src="styles/legend/ClusterBoundary_2_109.png" /> 109<br />\
    <img src="styles/legend/ClusterBoundary_2_110.png" /> 110<br />\
    <img src="styles/legend/ClusterBoundary_2_111.png" /> 111<br />\
    <img src="styles/legend/ClusterBoundary_2_112.png" /> 112<br />\
    <img src="styles/legend/ClusterBoundary_2_113.png" /> 113<br />\
    <img src="styles/legend/ClusterBoundary_2_114.png" /> 114<br />\
    <img src="styles/legend/ClusterBoundary_2_115.png" /> 115<br />\
    <img src="styles/legend/ClusterBoundary_2_116.png" /> 116<br />\
    <img src="styles/legend/ClusterBoundary_2_117.png" /> 117<br />\
    <img src="styles/legend/ClusterBoundary_2_118.png" /> 118<br />\
    <img src="styles/legend/ClusterBoundary_2_119.png" /> 119<br />\
    <img src="styles/legend/ClusterBoundary_2_120.png" /> 120<br />\
    <img src="styles/legend/ClusterBoundary_2_121.png" /> 121<br />\
    <img src="styles/legend/ClusterBoundary_2_122.png" /> 122<br />\
    <img src="styles/legend/ClusterBoundary_2_123.png" /> 123<br />\
    <img src="styles/legend/ClusterBoundary_2_124.png" /> 124<br />\
    <img src="styles/legend/ClusterBoundary_2_125.png" /> 125<br />\
    <img src="styles/legend/ClusterBoundary_2_126.png" /> 126<br />\
    <img src="styles/legend/ClusterBoundary_2_127.png" /> 127<br />\
    <img src="styles/legend/ClusterBoundary_2_128.png" /> 128<br />\
    <img src="styles/legend/ClusterBoundary_2_129.png" /> 129<br />\
    <img src="styles/legend/ClusterBoundary_2_130.png" /> 130<br />\
    <img src="styles/legend/ClusterBoundary_2_131.png" /> 131<br />\
    <img src="styles/legend/ClusterBoundary_2_132.png" /> 132<br />\
    <img src="styles/legend/ClusterBoundary_2_133.png" /> 133<br />\
    <img src="styles/legend/ClusterBoundary_2_134.png" /> 134<br />\
    <img src="styles/legend/ClusterBoundary_2_135.png" /> 135<br />\
    <img src="styles/legend/ClusterBoundary_2_136.png" /> 136<br />\
    <img src="styles/legend/ClusterBoundary_2_137.png" /> 137<br />\
    <img src="styles/legend/ClusterBoundary_2_138.png" /> <br />' });
var format_138Clusters_3 = new ol.format.GeoJSON();
var features_138Clusters_3 = format_138Clusters_3.readFeatures(json_138Clusters_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_138Clusters_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_138Clusters_3.addFeatures(features_138Clusters_3);
var lyr_138Clusters_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_138Clusters_3, 
                style: style_138Clusters_3,
                popuplayertitle: '138 Clusters',
                interactive: true,
    title: '138 Clusters<br />\
    <img src="styles/legend/138Clusters_3_0.png" /> -1<br />\
    <img src="styles/legend/138Clusters_3_1.png" /> 0<br />\
    <img src="styles/legend/138Clusters_3_2.png" /> 1<br />\
    <img src="styles/legend/138Clusters_3_3.png" /> 2<br />\
    <img src="styles/legend/138Clusters_3_4.png" /> 3<br />\
    <img src="styles/legend/138Clusters_3_5.png" /> 4<br />\
    <img src="styles/legend/138Clusters_3_6.png" /> 5<br />\
    <img src="styles/legend/138Clusters_3_7.png" /> 6<br />\
    <img src="styles/legend/138Clusters_3_8.png" /> 7<br />\
    <img src="styles/legend/138Clusters_3_9.png" /> 8<br />\
    <img src="styles/legend/138Clusters_3_10.png" /> 9<br />\
    <img src="styles/legend/138Clusters_3_11.png" /> 10<br />\
    <img src="styles/legend/138Clusters_3_12.png" /> 11<br />\
    <img src="styles/legend/138Clusters_3_13.png" /> 12<br />\
    <img src="styles/legend/138Clusters_3_14.png" /> 13<br />\
    <img src="styles/legend/138Clusters_3_15.png" /> 14<br />\
    <img src="styles/legend/138Clusters_3_16.png" /> 15<br />\
    <img src="styles/legend/138Clusters_3_17.png" /> 16<br />\
    <img src="styles/legend/138Clusters_3_18.png" /> 17<br />\
    <img src="styles/legend/138Clusters_3_19.png" /> 18<br />\
    <img src="styles/legend/138Clusters_3_20.png" /> 19<br />\
    <img src="styles/legend/138Clusters_3_21.png" /> 20<br />\
    <img src="styles/legend/138Clusters_3_22.png" /> 21<br />\
    <img src="styles/legend/138Clusters_3_23.png" /> 22<br />\
    <img src="styles/legend/138Clusters_3_24.png" /> 23<br />\
    <img src="styles/legend/138Clusters_3_25.png" /> 24<br />\
    <img src="styles/legend/138Clusters_3_26.png" /> 25<br />\
    <img src="styles/legend/138Clusters_3_27.png" /> 26<br />\
    <img src="styles/legend/138Clusters_3_28.png" /> 27<br />\
    <img src="styles/legend/138Clusters_3_29.png" /> 28<br />\
    <img src="styles/legend/138Clusters_3_30.png" /> 29<br />\
    <img src="styles/legend/138Clusters_3_31.png" /> 30<br />\
    <img src="styles/legend/138Clusters_3_32.png" /> 31<br />\
    <img src="styles/legend/138Clusters_3_33.png" /> 32<br />\
    <img src="styles/legend/138Clusters_3_34.png" /> 33<br />\
    <img src="styles/legend/138Clusters_3_35.png" /> 34<br />\
    <img src="styles/legend/138Clusters_3_36.png" /> 35<br />\
    <img src="styles/legend/138Clusters_3_37.png" /> 36<br />\
    <img src="styles/legend/138Clusters_3_38.png" /> 37<br />\
    <img src="styles/legend/138Clusters_3_39.png" /> 38<br />\
    <img src="styles/legend/138Clusters_3_40.png" /> 39<br />\
    <img src="styles/legend/138Clusters_3_41.png" /> 40<br />\
    <img src="styles/legend/138Clusters_3_42.png" /> 41<br />\
    <img src="styles/legend/138Clusters_3_43.png" /> 42<br />\
    <img src="styles/legend/138Clusters_3_44.png" /> 43<br />\
    <img src="styles/legend/138Clusters_3_45.png" /> 44<br />\
    <img src="styles/legend/138Clusters_3_46.png" /> 45<br />\
    <img src="styles/legend/138Clusters_3_47.png" /> 46<br />\
    <img src="styles/legend/138Clusters_3_48.png" /> 47<br />\
    <img src="styles/legend/138Clusters_3_49.png" /> 48<br />\
    <img src="styles/legend/138Clusters_3_50.png" /> 49<br />\
    <img src="styles/legend/138Clusters_3_51.png" /> 50<br />\
    <img src="styles/legend/138Clusters_3_52.png" /> 51<br />\
    <img src="styles/legend/138Clusters_3_53.png" /> 52<br />\
    <img src="styles/legend/138Clusters_3_54.png" /> 53<br />\
    <img src="styles/legend/138Clusters_3_55.png" /> 54<br />\
    <img src="styles/legend/138Clusters_3_56.png" /> 55<br />\
    <img src="styles/legend/138Clusters_3_57.png" /> 56<br />\
    <img src="styles/legend/138Clusters_3_58.png" /> 57<br />\
    <img src="styles/legend/138Clusters_3_59.png" /> 58<br />\
    <img src="styles/legend/138Clusters_3_60.png" /> 59<br />\
    <img src="styles/legend/138Clusters_3_61.png" /> 60<br />\
    <img src="styles/legend/138Clusters_3_62.png" /> 61<br />\
    <img src="styles/legend/138Clusters_3_63.png" /> 62<br />\
    <img src="styles/legend/138Clusters_3_64.png" /> 63<br />\
    <img src="styles/legend/138Clusters_3_65.png" /> 64<br />\
    <img src="styles/legend/138Clusters_3_66.png" /> 65<br />\
    <img src="styles/legend/138Clusters_3_67.png" /> 66<br />\
    <img src="styles/legend/138Clusters_3_68.png" /> 67<br />\
    <img src="styles/legend/138Clusters_3_69.png" /> 68<br />\
    <img src="styles/legend/138Clusters_3_70.png" /> 69<br />\
    <img src="styles/legend/138Clusters_3_71.png" /> 70<br />\
    <img src="styles/legend/138Clusters_3_72.png" /> 71<br />\
    <img src="styles/legend/138Clusters_3_73.png" /> 72<br />\
    <img src="styles/legend/138Clusters_3_74.png" /> 73<br />\
    <img src="styles/legend/138Clusters_3_75.png" /> 74<br />\
    <img src="styles/legend/138Clusters_3_76.png" /> 75<br />\
    <img src="styles/legend/138Clusters_3_77.png" /> 76<br />\
    <img src="styles/legend/138Clusters_3_78.png" /> 77<br />\
    <img src="styles/legend/138Clusters_3_79.png" /> 78<br />\
    <img src="styles/legend/138Clusters_3_80.png" /> 79<br />\
    <img src="styles/legend/138Clusters_3_81.png" /> 80<br />\
    <img src="styles/legend/138Clusters_3_82.png" /> 81<br />\
    <img src="styles/legend/138Clusters_3_83.png" /> 82<br />\
    <img src="styles/legend/138Clusters_3_84.png" /> 83<br />\
    <img src="styles/legend/138Clusters_3_85.png" /> 84<br />\
    <img src="styles/legend/138Clusters_3_86.png" /> 85<br />\
    <img src="styles/legend/138Clusters_3_87.png" /> 86<br />\
    <img src="styles/legend/138Clusters_3_88.png" /> 87<br />\
    <img src="styles/legend/138Clusters_3_89.png" /> 88<br />\
    <img src="styles/legend/138Clusters_3_90.png" /> 89<br />\
    <img src="styles/legend/138Clusters_3_91.png" /> 90<br />\
    <img src="styles/legend/138Clusters_3_92.png" /> 91<br />\
    <img src="styles/legend/138Clusters_3_93.png" /> 92<br />\
    <img src="styles/legend/138Clusters_3_94.png" /> 93<br />\
    <img src="styles/legend/138Clusters_3_95.png" /> 94<br />\
    <img src="styles/legend/138Clusters_3_96.png" /> 95<br />\
    <img src="styles/legend/138Clusters_3_97.png" /> 96<br />\
    <img src="styles/legend/138Clusters_3_98.png" /> 97<br />\
    <img src="styles/legend/138Clusters_3_99.png" /> 98<br />\
    <img src="styles/legend/138Clusters_3_100.png" /> 99<br />\
    <img src="styles/legend/138Clusters_3_101.png" /> 100<br />\
    <img src="styles/legend/138Clusters_3_102.png" /> 101<br />\
    <img src="styles/legend/138Clusters_3_103.png" /> 102<br />\
    <img src="styles/legend/138Clusters_3_104.png" /> 103<br />\
    <img src="styles/legend/138Clusters_3_105.png" /> 104<br />\
    <img src="styles/legend/138Clusters_3_106.png" /> 105<br />\
    <img src="styles/legend/138Clusters_3_107.png" /> 106<br />\
    <img src="styles/legend/138Clusters_3_108.png" /> 107<br />\
    <img src="styles/legend/138Clusters_3_109.png" /> 108<br />\
    <img src="styles/legend/138Clusters_3_110.png" /> 109<br />\
    <img src="styles/legend/138Clusters_3_111.png" /> 110<br />\
    <img src="styles/legend/138Clusters_3_112.png" /> 111<br />\
    <img src="styles/legend/138Clusters_3_113.png" /> 112<br />\
    <img src="styles/legend/138Clusters_3_114.png" /> 113<br />\
    <img src="styles/legend/138Clusters_3_115.png" /> 114<br />\
    <img src="styles/legend/138Clusters_3_116.png" /> 115<br />\
    <img src="styles/legend/138Clusters_3_117.png" /> 116<br />\
    <img src="styles/legend/138Clusters_3_118.png" /> 117<br />\
    <img src="styles/legend/138Clusters_3_119.png" /> 118<br />\
    <img src="styles/legend/138Clusters_3_120.png" /> 119<br />\
    <img src="styles/legend/138Clusters_3_121.png" /> 120<br />\
    <img src="styles/legend/138Clusters_3_122.png" /> 121<br />\
    <img src="styles/legend/138Clusters_3_123.png" /> 122<br />\
    <img src="styles/legend/138Clusters_3_124.png" /> 123<br />\
    <img src="styles/legend/138Clusters_3_125.png" /> 124<br />\
    <img src="styles/legend/138Clusters_3_126.png" /> 125<br />\
    <img src="styles/legend/138Clusters_3_127.png" /> 126<br />\
    <img src="styles/legend/138Clusters_3_128.png" /> 127<br />\
    <img src="styles/legend/138Clusters_3_129.png" /> 128<br />\
    <img src="styles/legend/138Clusters_3_130.png" /> 129<br />\
    <img src="styles/legend/138Clusters_3_131.png" /> 130<br />\
    <img src="styles/legend/138Clusters_3_132.png" /> 131<br />\
    <img src="styles/legend/138Clusters_3_133.png" /> 132<br />\
    <img src="styles/legend/138Clusters_3_134.png" /> 133<br />\
    <img src="styles/legend/138Clusters_3_135.png" /> 134<br />\
    <img src="styles/legend/138Clusters_3_136.png" /> 135<br />\
    <img src="styles/legend/138Clusters_3_137.png" /> 136<br />\
    <img src="styles/legend/138Clusters_3_138.png" /> 137<br />' });
var format_ClusterBoundary_4 = new ol.format.GeoJSON();
var features_ClusterBoundary_4 = format_ClusterBoundary_4.readFeatures(json_ClusterBoundary_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClusterBoundary_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClusterBoundary_4.addFeatures(features_ClusterBoundary_4);
var lyr_ClusterBoundary_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClusterBoundary_4, 
                style: style_ClusterBoundary_4,
                popuplayertitle: 'Cluster Boundary',
                interactive: true,
    title: 'Cluster Boundary<br />\
    <img src="styles/legend/ClusterBoundary_4_0.png" /> 0<br />\
    <img src="styles/legend/ClusterBoundary_4_1.png" /> 1<br />\
    <img src="styles/legend/ClusterBoundary_4_2.png" /> 2<br />\
    <img src="styles/legend/ClusterBoundary_4_3.png" /> 3<br />\
    <img src="styles/legend/ClusterBoundary_4_4.png" /> 4<br />\
    <img src="styles/legend/ClusterBoundary_4_5.png" /> 5<br />\
    <img src="styles/legend/ClusterBoundary_4_6.png" /> 6<br />\
    <img src="styles/legend/ClusterBoundary_4_7.png" /> 7<br />\
    <img src="styles/legend/ClusterBoundary_4_8.png" /> 8<br />\
    <img src="styles/legend/ClusterBoundary_4_9.png" /> 9<br />\
    <img src="styles/legend/ClusterBoundary_4_10.png" /> 10<br />\
    <img src="styles/legend/ClusterBoundary_4_11.png" /> 11<br />\
    <img src="styles/legend/ClusterBoundary_4_12.png" /> 12<br />\
    <img src="styles/legend/ClusterBoundary_4_13.png" /> 13<br />\
    <img src="styles/legend/ClusterBoundary_4_14.png" /> 14<br />\
    <img src="styles/legend/ClusterBoundary_4_15.png" /> 15<br />\
    <img src="styles/legend/ClusterBoundary_4_16.png" /> 16<br />\
    <img src="styles/legend/ClusterBoundary_4_17.png" /> 17<br />\
    <img src="styles/legend/ClusterBoundary_4_18.png" /> 18<br />\
    <img src="styles/legend/ClusterBoundary_4_19.png" /> 19<br />\
    <img src="styles/legend/ClusterBoundary_4_20.png" /> 20<br />\
    <img src="styles/legend/ClusterBoundary_4_21.png" /> 21<br />\
    <img src="styles/legend/ClusterBoundary_4_22.png" /> 22<br />\
    <img src="styles/legend/ClusterBoundary_4_23.png" /> 23<br />\
    <img src="styles/legend/ClusterBoundary_4_24.png" /> 24<br />\
    <img src="styles/legend/ClusterBoundary_4_25.png" /> 25<br />\
    <img src="styles/legend/ClusterBoundary_4_26.png" /> 26<br />\
    <img src="styles/legend/ClusterBoundary_4_27.png" /> 27<br />\
    <img src="styles/legend/ClusterBoundary_4_28.png" /> 28<br />\
    <img src="styles/legend/ClusterBoundary_4_29.png" /> 29<br />\
    <img src="styles/legend/ClusterBoundary_4_30.png" /> 30<br />\
    <img src="styles/legend/ClusterBoundary_4_31.png" /> 31<br />\
    <img src="styles/legend/ClusterBoundary_4_32.png" /> 32<br />\
    <img src="styles/legend/ClusterBoundary_4_33.png" /> 33<br />\
    <img src="styles/legend/ClusterBoundary_4_34.png" /> 34<br />\
    <img src="styles/legend/ClusterBoundary_4_35.png" /> 35<br />\
    <img src="styles/legend/ClusterBoundary_4_36.png" /> 36<br />\
    <img src="styles/legend/ClusterBoundary_4_37.png" /> 37<br />\
    <img src="styles/legend/ClusterBoundary_4_38.png" /> 38<br />\
    <img src="styles/legend/ClusterBoundary_4_39.png" /> 39<br />\
    <img src="styles/legend/ClusterBoundary_4_40.png" /> 40<br />\
    <img src="styles/legend/ClusterBoundary_4_41.png" /> 41<br />\
    <img src="styles/legend/ClusterBoundary_4_42.png" /> 42<br />\
    <img src="styles/legend/ClusterBoundary_4_43.png" /> 43<br />\
    <img src="styles/legend/ClusterBoundary_4_44.png" /> 44<br />\
    <img src="styles/legend/ClusterBoundary_4_45.png" /> 45<br />\
    <img src="styles/legend/ClusterBoundary_4_46.png" /> 46<br />\
    <img src="styles/legend/ClusterBoundary_4_47.png" /> 47<br />\
    <img src="styles/legend/ClusterBoundary_4_48.png" /> 48<br />\
    <img src="styles/legend/ClusterBoundary_4_49.png" /> 49<br />\
    <img src="styles/legend/ClusterBoundary_4_50.png" /> 50<br />\
    <img src="styles/legend/ClusterBoundary_4_51.png" /> 51<br />\
    <img src="styles/legend/ClusterBoundary_4_52.png" /> 52<br />\
    <img src="styles/legend/ClusterBoundary_4_53.png" /> 53<br />\
    <img src="styles/legend/ClusterBoundary_4_54.png" /> 54<br />\
    <img src="styles/legend/ClusterBoundary_4_55.png" /> 55<br />\
    <img src="styles/legend/ClusterBoundary_4_56.png" /> 56<br />\
    <img src="styles/legend/ClusterBoundary_4_57.png" /> 57<br />\
    <img src="styles/legend/ClusterBoundary_4_58.png" /> 58<br />\
    <img src="styles/legend/ClusterBoundary_4_59.png" /> 59<br />\
    <img src="styles/legend/ClusterBoundary_4_60.png" /> 60<br />\
    <img src="styles/legend/ClusterBoundary_4_61.png" /> 61<br />\
    <img src="styles/legend/ClusterBoundary_4_62.png" /> 62<br />\
    <img src="styles/legend/ClusterBoundary_4_63.png" /> 63<br />\
    <img src="styles/legend/ClusterBoundary_4_64.png" /> 64<br />\
    <img src="styles/legend/ClusterBoundary_4_65.png" /> 65<br />\
    <img src="styles/legend/ClusterBoundary_4_66.png" /> 66<br />\
    <img src="styles/legend/ClusterBoundary_4_67.png" /> 67<br />\
    <img src="styles/legend/ClusterBoundary_4_68.png" /> 68<br />\
    <img src="styles/legend/ClusterBoundary_4_69.png" /> 69<br />\
    <img src="styles/legend/ClusterBoundary_4_70.png" /> 70<br />\
    <img src="styles/legend/ClusterBoundary_4_71.png" /> 71<br />\
    <img src="styles/legend/ClusterBoundary_4_72.png" /> 72<br />\
    <img src="styles/legend/ClusterBoundary_4_73.png" /> 73<br />\
    <img src="styles/legend/ClusterBoundary_4_74.png" /> 74<br />\
    <img src="styles/legend/ClusterBoundary_4_75.png" /> 75<br />\
    <img src="styles/legend/ClusterBoundary_4_76.png" /> 76<br />\
    <img src="styles/legend/ClusterBoundary_4_77.png" /> 77<br />\
    <img src="styles/legend/ClusterBoundary_4_78.png" /> 78<br />\
    <img src="styles/legend/ClusterBoundary_4_79.png" /> 79<br />\
    <img src="styles/legend/ClusterBoundary_4_80.png" /> 80<br />\
    <img src="styles/legend/ClusterBoundary_4_81.png" /> 81<br />\
    <img src="styles/legend/ClusterBoundary_4_82.png" /> 82<br />\
    <img src="styles/legend/ClusterBoundary_4_83.png" /> 83<br />\
    <img src="styles/legend/ClusterBoundary_4_84.png" /> 84<br />\
    <img src="styles/legend/ClusterBoundary_4_85.png" /> 85<br />\
    <img src="styles/legend/ClusterBoundary_4_86.png" /> 86<br />\
    <img src="styles/legend/ClusterBoundary_4_87.png" /> 87<br />\
    <img src="styles/legend/ClusterBoundary_4_88.png" /> 88<br />\
    <img src="styles/legend/ClusterBoundary_4_89.png" /> 89<br />\
    <img src="styles/legend/ClusterBoundary_4_90.png" /> 90<br />\
    <img src="styles/legend/ClusterBoundary_4_91.png" /> 91<br />\
    <img src="styles/legend/ClusterBoundary_4_92.png" /> 92<br />\
    <img src="styles/legend/ClusterBoundary_4_93.png" /> 93<br />\
    <img src="styles/legend/ClusterBoundary_4_94.png" /> 94<br />\
    <img src="styles/legend/ClusterBoundary_4_95.png" /> 95<br />\
    <img src="styles/legend/ClusterBoundary_4_96.png" /> 96<br />\
    <img src="styles/legend/ClusterBoundary_4_97.png" /> 97<br />\
    <img src="styles/legend/ClusterBoundary_4_98.png" /> 98<br />\
    <img src="styles/legend/ClusterBoundary_4_99.png" /> 99<br />\
    <img src="styles/legend/ClusterBoundary_4_100.png" /> 100<br />\
    <img src="styles/legend/ClusterBoundary_4_101.png" /> 101<br />\
    <img src="styles/legend/ClusterBoundary_4_102.png" /> 102<br />\
    <img src="styles/legend/ClusterBoundary_4_103.png" /> 103<br />\
    <img src="styles/legend/ClusterBoundary_4_104.png" /> <br />' });
var format_104Clusters_5 = new ol.format.GeoJSON();
var features_104Clusters_5 = format_104Clusters_5.readFeatures(json_104Clusters_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_104Clusters_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_104Clusters_5.addFeatures(features_104Clusters_5);
var lyr_104Clusters_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_104Clusters_5, 
                style: style_104Clusters_5,
                popuplayertitle: '104 Clusters',
                interactive: true,
    title: '104 Clusters<br />\
    <img src="styles/legend/104Clusters_5_0.png" /> -1<br />\
    <img src="styles/legend/104Clusters_5_1.png" /> 0<br />\
    <img src="styles/legend/104Clusters_5_2.png" /> 1<br />\
    <img src="styles/legend/104Clusters_5_3.png" /> 2<br />\
    <img src="styles/legend/104Clusters_5_4.png" /> 3<br />\
    <img src="styles/legend/104Clusters_5_5.png" /> 4<br />\
    <img src="styles/legend/104Clusters_5_6.png" /> 5<br />\
    <img src="styles/legend/104Clusters_5_7.png" /> 6<br />\
    <img src="styles/legend/104Clusters_5_8.png" /> 7<br />\
    <img src="styles/legend/104Clusters_5_9.png" /> 8<br />\
    <img src="styles/legend/104Clusters_5_10.png" /> 9<br />\
    <img src="styles/legend/104Clusters_5_11.png" /> 10<br />\
    <img src="styles/legend/104Clusters_5_12.png" /> 11<br />\
    <img src="styles/legend/104Clusters_5_13.png" /> 12<br />\
    <img src="styles/legend/104Clusters_5_14.png" /> 13<br />\
    <img src="styles/legend/104Clusters_5_15.png" /> 14<br />\
    <img src="styles/legend/104Clusters_5_16.png" /> 15<br />\
    <img src="styles/legend/104Clusters_5_17.png" /> 16<br />\
    <img src="styles/legend/104Clusters_5_18.png" /> 17<br />\
    <img src="styles/legend/104Clusters_5_19.png" /> 18<br />\
    <img src="styles/legend/104Clusters_5_20.png" /> 19<br />\
    <img src="styles/legend/104Clusters_5_21.png" /> 20<br />\
    <img src="styles/legend/104Clusters_5_22.png" /> 21<br />\
    <img src="styles/legend/104Clusters_5_23.png" /> 22<br />\
    <img src="styles/legend/104Clusters_5_24.png" /> 23<br />\
    <img src="styles/legend/104Clusters_5_25.png" /> 24<br />\
    <img src="styles/legend/104Clusters_5_26.png" /> 25<br />\
    <img src="styles/legend/104Clusters_5_27.png" /> 26<br />\
    <img src="styles/legend/104Clusters_5_28.png" /> 27<br />\
    <img src="styles/legend/104Clusters_5_29.png" /> 28<br />\
    <img src="styles/legend/104Clusters_5_30.png" /> 29<br />\
    <img src="styles/legend/104Clusters_5_31.png" /> 30<br />\
    <img src="styles/legend/104Clusters_5_32.png" /> 31<br />\
    <img src="styles/legend/104Clusters_5_33.png" /> 32<br />\
    <img src="styles/legend/104Clusters_5_34.png" /> 33<br />\
    <img src="styles/legend/104Clusters_5_35.png" /> 34<br />\
    <img src="styles/legend/104Clusters_5_36.png" /> 35<br />\
    <img src="styles/legend/104Clusters_5_37.png" /> 36<br />\
    <img src="styles/legend/104Clusters_5_38.png" /> 37<br />\
    <img src="styles/legend/104Clusters_5_39.png" /> 38<br />\
    <img src="styles/legend/104Clusters_5_40.png" /> 39<br />\
    <img src="styles/legend/104Clusters_5_41.png" /> 40<br />\
    <img src="styles/legend/104Clusters_5_42.png" /> 41<br />\
    <img src="styles/legend/104Clusters_5_43.png" /> 42<br />\
    <img src="styles/legend/104Clusters_5_44.png" /> 43<br />\
    <img src="styles/legend/104Clusters_5_45.png" /> 44<br />\
    <img src="styles/legend/104Clusters_5_46.png" /> 45<br />\
    <img src="styles/legend/104Clusters_5_47.png" /> 46<br />\
    <img src="styles/legend/104Clusters_5_48.png" /> 47<br />\
    <img src="styles/legend/104Clusters_5_49.png" /> 48<br />\
    <img src="styles/legend/104Clusters_5_50.png" /> 49<br />\
    <img src="styles/legend/104Clusters_5_51.png" /> 50<br />\
    <img src="styles/legend/104Clusters_5_52.png" /> 51<br />\
    <img src="styles/legend/104Clusters_5_53.png" /> 52<br />\
    <img src="styles/legend/104Clusters_5_54.png" /> 53<br />\
    <img src="styles/legend/104Clusters_5_55.png" /> 54<br />\
    <img src="styles/legend/104Clusters_5_56.png" /> 55<br />\
    <img src="styles/legend/104Clusters_5_57.png" /> 56<br />\
    <img src="styles/legend/104Clusters_5_58.png" /> 57<br />\
    <img src="styles/legend/104Clusters_5_59.png" /> 58<br />\
    <img src="styles/legend/104Clusters_5_60.png" /> 59<br />\
    <img src="styles/legend/104Clusters_5_61.png" /> 60<br />\
    <img src="styles/legend/104Clusters_5_62.png" /> 61<br />\
    <img src="styles/legend/104Clusters_5_63.png" /> 62<br />\
    <img src="styles/legend/104Clusters_5_64.png" /> 63<br />\
    <img src="styles/legend/104Clusters_5_65.png" /> 64<br />\
    <img src="styles/legend/104Clusters_5_66.png" /> 65<br />\
    <img src="styles/legend/104Clusters_5_67.png" /> 66<br />\
    <img src="styles/legend/104Clusters_5_68.png" /> 67<br />\
    <img src="styles/legend/104Clusters_5_69.png" /> 68<br />\
    <img src="styles/legend/104Clusters_5_70.png" /> 69<br />\
    <img src="styles/legend/104Clusters_5_71.png" /> 70<br />\
    <img src="styles/legend/104Clusters_5_72.png" /> 71<br />\
    <img src="styles/legend/104Clusters_5_73.png" /> 72<br />\
    <img src="styles/legend/104Clusters_5_74.png" /> 73<br />\
    <img src="styles/legend/104Clusters_5_75.png" /> 74<br />\
    <img src="styles/legend/104Clusters_5_76.png" /> 75<br />\
    <img src="styles/legend/104Clusters_5_77.png" /> 76<br />\
    <img src="styles/legend/104Clusters_5_78.png" /> 77<br />\
    <img src="styles/legend/104Clusters_5_79.png" /> 78<br />\
    <img src="styles/legend/104Clusters_5_80.png" /> 79<br />\
    <img src="styles/legend/104Clusters_5_81.png" /> 80<br />\
    <img src="styles/legend/104Clusters_5_82.png" /> 81<br />\
    <img src="styles/legend/104Clusters_5_83.png" /> 82<br />\
    <img src="styles/legend/104Clusters_5_84.png" /> 83<br />\
    <img src="styles/legend/104Clusters_5_85.png" /> 84<br />\
    <img src="styles/legend/104Clusters_5_86.png" /> 85<br />\
    <img src="styles/legend/104Clusters_5_87.png" /> 86<br />\
    <img src="styles/legend/104Clusters_5_88.png" /> 87<br />\
    <img src="styles/legend/104Clusters_5_89.png" /> 88<br />\
    <img src="styles/legend/104Clusters_5_90.png" /> 89<br />\
    <img src="styles/legend/104Clusters_5_91.png" /> 90<br />\
    <img src="styles/legend/104Clusters_5_92.png" /> 91<br />\
    <img src="styles/legend/104Clusters_5_93.png" /> 92<br />\
    <img src="styles/legend/104Clusters_5_94.png" /> 93<br />\
    <img src="styles/legend/104Clusters_5_95.png" /> 94<br />\
    <img src="styles/legend/104Clusters_5_96.png" /> 95<br />\
    <img src="styles/legend/104Clusters_5_97.png" /> 96<br />\
    <img src="styles/legend/104Clusters_5_98.png" /> 97<br />\
    <img src="styles/legend/104Clusters_5_99.png" /> 98<br />\
    <img src="styles/legend/104Clusters_5_100.png" /> 99<br />\
    <img src="styles/legend/104Clusters_5_101.png" /> 100<br />\
    <img src="styles/legend/104Clusters_5_102.png" /> 101<br />\
    <img src="styles/legend/104Clusters_5_103.png" /> 102<br />\
    <img src="styles/legend/104Clusters_5_104.png" /> 103<br />' });
var format_ClusterBoundary_6 = new ol.format.GeoJSON();
var features_ClusterBoundary_6 = format_ClusterBoundary_6.readFeatures(json_ClusterBoundary_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClusterBoundary_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClusterBoundary_6.addFeatures(features_ClusterBoundary_6);
var lyr_ClusterBoundary_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClusterBoundary_6, 
                style: style_ClusterBoundary_6,
                popuplayertitle: 'Cluster Boundary',
                interactive: true,
    title: 'Cluster Boundary<br />\
    <img src="styles/legend/ClusterBoundary_6_0.png" /> 0<br />\
    <img src="styles/legend/ClusterBoundary_6_1.png" /> 1<br />\
    <img src="styles/legend/ClusterBoundary_6_2.png" /> 2<br />\
    <img src="styles/legend/ClusterBoundary_6_3.png" /> 3<br />\
    <img src="styles/legend/ClusterBoundary_6_4.png" /> 4<br />\
    <img src="styles/legend/ClusterBoundary_6_5.png" /> 5<br />\
    <img src="styles/legend/ClusterBoundary_6_6.png" /> 6<br />\
    <img src="styles/legend/ClusterBoundary_6_7.png" /> 7<br />\
    <img src="styles/legend/ClusterBoundary_6_8.png" /> 8<br />\
    <img src="styles/legend/ClusterBoundary_6_9.png" /> 9<br />\
    <img src="styles/legend/ClusterBoundary_6_10.png" /> 10<br />\
    <img src="styles/legend/ClusterBoundary_6_11.png" /> 11<br />\
    <img src="styles/legend/ClusterBoundary_6_12.png" /> 12<br />\
    <img src="styles/legend/ClusterBoundary_6_13.png" /> 13<br />\
    <img src="styles/legend/ClusterBoundary_6_14.png" /> 14<br />\
    <img src="styles/legend/ClusterBoundary_6_15.png" /> 15<br />\
    <img src="styles/legend/ClusterBoundary_6_16.png" /> 16<br />\
    <img src="styles/legend/ClusterBoundary_6_17.png" /> 17<br />\
    <img src="styles/legend/ClusterBoundary_6_18.png" /> 18<br />\
    <img src="styles/legend/ClusterBoundary_6_19.png" /> 19<br />\
    <img src="styles/legend/ClusterBoundary_6_20.png" /> 20<br />\
    <img src="styles/legend/ClusterBoundary_6_21.png" /> 21<br />\
    <img src="styles/legend/ClusterBoundary_6_22.png" /> 22<br />\
    <img src="styles/legend/ClusterBoundary_6_23.png" /> 23<br />\
    <img src="styles/legend/ClusterBoundary_6_24.png" /> 24<br />\
    <img src="styles/legend/ClusterBoundary_6_25.png" /> 25<br />\
    <img src="styles/legend/ClusterBoundary_6_26.png" /> 26<br />\
    <img src="styles/legend/ClusterBoundary_6_27.png" /> 27<br />\
    <img src="styles/legend/ClusterBoundary_6_28.png" /> 28<br />\
    <img src="styles/legend/ClusterBoundary_6_29.png" /> 29<br />\
    <img src="styles/legend/ClusterBoundary_6_30.png" /> 30<br />\
    <img src="styles/legend/ClusterBoundary_6_31.png" /> 31<br />\
    <img src="styles/legend/ClusterBoundary_6_32.png" /> 32<br />\
    <img src="styles/legend/ClusterBoundary_6_33.png" /> 33<br />\
    <img src="styles/legend/ClusterBoundary_6_34.png" /> 34<br />\
    <img src="styles/legend/ClusterBoundary_6_35.png" /> 35<br />\
    <img src="styles/legend/ClusterBoundary_6_36.png" /> 36<br />\
    <img src="styles/legend/ClusterBoundary_6_37.png" /> 37<br />\
    <img src="styles/legend/ClusterBoundary_6_38.png" /> 38<br />\
    <img src="styles/legend/ClusterBoundary_6_39.png" /> 39<br />\
    <img src="styles/legend/ClusterBoundary_6_40.png" /> 40<br />\
    <img src="styles/legend/ClusterBoundary_6_41.png" /> 41<br />\
    <img src="styles/legend/ClusterBoundary_6_42.png" /> 42<br />\
    <img src="styles/legend/ClusterBoundary_6_43.png" /> 43<br />\
    <img src="styles/legend/ClusterBoundary_6_44.png" /> 44<br />\
    <img src="styles/legend/ClusterBoundary_6_45.png" /> 45<br />\
    <img src="styles/legend/ClusterBoundary_6_46.png" /> 46<br />\
    <img src="styles/legend/ClusterBoundary_6_47.png" /> 47<br />\
    <img src="styles/legend/ClusterBoundary_6_48.png" /> 48<br />\
    <img src="styles/legend/ClusterBoundary_6_49.png" /> 49<br />\
    <img src="styles/legend/ClusterBoundary_6_50.png" /> 50<br />\
    <img src="styles/legend/ClusterBoundary_6_51.png" /> 51<br />\
    <img src="styles/legend/ClusterBoundary_6_52.png" /> 52<br />\
    <img src="styles/legend/ClusterBoundary_6_53.png" /> 53<br />\
    <img src="styles/legend/ClusterBoundary_6_54.png" /> 54<br />\
    <img src="styles/legend/ClusterBoundary_6_55.png" /> 55<br />\
    <img src="styles/legend/ClusterBoundary_6_56.png" /> 56<br />\
    <img src="styles/legend/ClusterBoundary_6_57.png" /> 57<br />\
    <img src="styles/legend/ClusterBoundary_6_58.png" /> 58<br />\
    <img src="styles/legend/ClusterBoundary_6_59.png" /> 59<br />\
    <img src="styles/legend/ClusterBoundary_6_60.png" /> 60<br />\
    <img src="styles/legend/ClusterBoundary_6_61.png" /> 61<br />\
    <img src="styles/legend/ClusterBoundary_6_62.png" /> 62<br />\
    <img src="styles/legend/ClusterBoundary_6_63.png" /> 63<br />\
    <img src="styles/legend/ClusterBoundary_6_64.png" /> 64<br />\
    <img src="styles/legend/ClusterBoundary_6_65.png" /> 65<br />\
    <img src="styles/legend/ClusterBoundary_6_66.png" /> 66<br />\
    <img src="styles/legend/ClusterBoundary_6_67.png" /> 67<br />\
    <img src="styles/legend/ClusterBoundary_6_68.png" /> 68<br />\
    <img src="styles/legend/ClusterBoundary_6_69.png" /> 69<br />\
    <img src="styles/legend/ClusterBoundary_6_70.png" /> 70<br />\
    <img src="styles/legend/ClusterBoundary_6_71.png" /> 71<br />\
    <img src="styles/legend/ClusterBoundary_6_72.png" /> <br />' });
var format_72Clusters_7 = new ol.format.GeoJSON();
var features_72Clusters_7 = format_72Clusters_7.readFeatures(json_72Clusters_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_72Clusters_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_72Clusters_7.addFeatures(features_72Clusters_7);
var lyr_72Clusters_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_72Clusters_7, 
                style: style_72Clusters_7,
                popuplayertitle: '72 Clusters',
                interactive: true,
    title: '72 Clusters<br />\
    <img src="styles/legend/72Clusters_7_0.png" /> -1<br />\
    <img src="styles/legend/72Clusters_7_1.png" /> 0<br />\
    <img src="styles/legend/72Clusters_7_2.png" /> 1<br />\
    <img src="styles/legend/72Clusters_7_3.png" /> 2<br />\
    <img src="styles/legend/72Clusters_7_4.png" /> 3<br />\
    <img src="styles/legend/72Clusters_7_5.png" /> 4<br />\
    <img src="styles/legend/72Clusters_7_6.png" /> 5<br />\
    <img src="styles/legend/72Clusters_7_7.png" /> 6<br />\
    <img src="styles/legend/72Clusters_7_8.png" /> 7<br />\
    <img src="styles/legend/72Clusters_7_9.png" /> 8<br />\
    <img src="styles/legend/72Clusters_7_10.png" /> 9<br />\
    <img src="styles/legend/72Clusters_7_11.png" /> 10<br />\
    <img src="styles/legend/72Clusters_7_12.png" /> 11<br />\
    <img src="styles/legend/72Clusters_7_13.png" /> 12<br />\
    <img src="styles/legend/72Clusters_7_14.png" /> 13<br />\
    <img src="styles/legend/72Clusters_7_15.png" /> 14<br />\
    <img src="styles/legend/72Clusters_7_16.png" /> 15<br />\
    <img src="styles/legend/72Clusters_7_17.png" /> 16<br />\
    <img src="styles/legend/72Clusters_7_18.png" /> 17<br />\
    <img src="styles/legend/72Clusters_7_19.png" /> 18<br />\
    <img src="styles/legend/72Clusters_7_20.png" /> 19<br />\
    <img src="styles/legend/72Clusters_7_21.png" /> 20<br />\
    <img src="styles/legend/72Clusters_7_22.png" /> 21<br />\
    <img src="styles/legend/72Clusters_7_23.png" /> 22<br />\
    <img src="styles/legend/72Clusters_7_24.png" /> 23<br />\
    <img src="styles/legend/72Clusters_7_25.png" /> 24<br />\
    <img src="styles/legend/72Clusters_7_26.png" /> 25<br />\
    <img src="styles/legend/72Clusters_7_27.png" /> 26<br />\
    <img src="styles/legend/72Clusters_7_28.png" /> 27<br />\
    <img src="styles/legend/72Clusters_7_29.png" /> 28<br />\
    <img src="styles/legend/72Clusters_7_30.png" /> 29<br />\
    <img src="styles/legend/72Clusters_7_31.png" /> 30<br />\
    <img src="styles/legend/72Clusters_7_32.png" /> 31<br />\
    <img src="styles/legend/72Clusters_7_33.png" /> 32<br />\
    <img src="styles/legend/72Clusters_7_34.png" /> 33<br />\
    <img src="styles/legend/72Clusters_7_35.png" /> 34<br />\
    <img src="styles/legend/72Clusters_7_36.png" /> 35<br />\
    <img src="styles/legend/72Clusters_7_37.png" /> 36<br />\
    <img src="styles/legend/72Clusters_7_38.png" /> 37<br />\
    <img src="styles/legend/72Clusters_7_39.png" /> 38<br />\
    <img src="styles/legend/72Clusters_7_40.png" /> 39<br />\
    <img src="styles/legend/72Clusters_7_41.png" /> 40<br />\
    <img src="styles/legend/72Clusters_7_42.png" /> 41<br />\
    <img src="styles/legend/72Clusters_7_43.png" /> 42<br />\
    <img src="styles/legend/72Clusters_7_44.png" /> 43<br />\
    <img src="styles/legend/72Clusters_7_45.png" /> 44<br />\
    <img src="styles/legend/72Clusters_7_46.png" /> 45<br />\
    <img src="styles/legend/72Clusters_7_47.png" /> 46<br />\
    <img src="styles/legend/72Clusters_7_48.png" /> 47<br />\
    <img src="styles/legend/72Clusters_7_49.png" /> 48<br />\
    <img src="styles/legend/72Clusters_7_50.png" /> 49<br />\
    <img src="styles/legend/72Clusters_7_51.png" /> 50<br />\
    <img src="styles/legend/72Clusters_7_52.png" /> 51<br />\
    <img src="styles/legend/72Clusters_7_53.png" /> 52<br />\
    <img src="styles/legend/72Clusters_7_54.png" /> 53<br />\
    <img src="styles/legend/72Clusters_7_55.png" /> 54<br />\
    <img src="styles/legend/72Clusters_7_56.png" /> 55<br />\
    <img src="styles/legend/72Clusters_7_57.png" /> 56<br />\
    <img src="styles/legend/72Clusters_7_58.png" /> 57<br />\
    <img src="styles/legend/72Clusters_7_59.png" /> 58<br />\
    <img src="styles/legend/72Clusters_7_60.png" /> 59<br />\
    <img src="styles/legend/72Clusters_7_61.png" /> 60<br />\
    <img src="styles/legend/72Clusters_7_62.png" /> 61<br />\
    <img src="styles/legend/72Clusters_7_63.png" /> 62<br />\
    <img src="styles/legend/72Clusters_7_64.png" /> 63<br />\
    <img src="styles/legend/72Clusters_7_65.png" /> 64<br />\
    <img src="styles/legend/72Clusters_7_66.png" /> 65<br />\
    <img src="styles/legend/72Clusters_7_67.png" /> 66<br />\
    <img src="styles/legend/72Clusters_7_68.png" /> 67<br />\
    <img src="styles/legend/72Clusters_7_69.png" /> 68<br />\
    <img src="styles/legend/72Clusters_7_70.png" /> 69<br />\
    <img src="styles/legend/72Clusters_7_71.png" /> 70<br />\
    <img src="styles/legend/72Clusters_7_72.png" /> 71<br />' });
var group_Clusteringby103 = new ol.layer.Group({
                                layers: [lyr_ClusterBoundary_6,lyr_72Clusters_7,],
                                fold: 'close',
                                title: 'Clustering by 10-3'});
var group_Clusteringby83 = new ol.layer.Group({
                                layers: [lyr_ClusterBoundary_4,lyr_104Clusters_5,],
                                fold: 'close',
                                title: 'Clustering by 8-3'});
var group_Clusteringby63 = new ol.layer.Group({
                                layers: [lyr_ClusterBoundary_2,lyr_138Clusters_3,],
                                fold: 'close',
                                title: 'Clustering by 6-3'});

lyr_WorldStreets_0.setVisible(true);lyr_NewJurisdictionTown_1.setVisible(true);lyr_ClusterBoundary_2.setVisible(true);lyr_138Clusters_3.setVisible(false);lyr_ClusterBoundary_4.setVisible(true);lyr_104Clusters_5.setVisible(false);lyr_ClusterBoundary_6.setVisible(true);lyr_72Clusters_7.setVisible(false);
var layersList = [lyr_WorldStreets_0,lyr_NewJurisdictionTown_1,group_Clusteringby63,group_Clusteringby83,group_Clusteringby103];
lyr_NewJurisdictionTown_1.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', });
lyr_ClusterBoundary_2.set('fieldAliases', {'fid': 'fid', 'cluster_id': 'cluster_id', 'n_points': 'n_points', 'alpha': 'alpha', });
lyr_138Clusters_3.set('fieldAliases', {'Source_ID': 'Source_ID', 'final_lat': 'final_lat', 'final_long': 'final_long', 'reassigned': 'reassigned', });
lyr_ClusterBoundary_4.set('fieldAliases', {'fid': 'fid', 'cluster_id': 'cluster_id', 'n_points': 'n_points', 'alpha': 'alpha', });
lyr_104Clusters_5.set('fieldAliases', {'ID': 'ID', 'ID_X': 'ID_X', 'ID_Y': 'ID_Y', 'SR': 'SR', 'final_lat': 'final_lat', 'final_long': 'final_long', 'PNTN': 'PNTN', 'NTN_Final': 'NTN_Final', 'NTN_Final_': 'NTN_Final_', 'NTN_Final1': 'NTN_Final1', 'Branch': 'Branch', 'FORMALITY_': 'FORMALITY_', 'RESTAURANT': 'RESTAURANT', 'SURVEY_STA': 'SURVEY_STA', 'REGISTRATI': 'REGISTRATI', 'FINAL_CLUS': 'FINAL_CLUS', 'REGISTERED': 'REGISTERED', 'TOTAL_CLUS': 'TOTAL_CLUS', 'UC_NAME_DI': 'UC_NAME_DI', 'RANK_DICT': 'RANK_DICT', 'final_name': 'final_name', 'final_addr': 'final_addr', 'Restaura_1': 'Restaura_1', 'REG_NTN': 'REG_NTN', 'REG_REGIST': 'REG_REGIST', 'REG_SCODE': 'REG_SCODE', 'REG_CITY_N': 'REG_CITY_N', '_dict_ntn_': '_dict_ntn_', '_matched_o': '_matched_o', '_dict_ntn1': '_dict_ntn1', 'RET_NTN': 'RET_NTN', 'RET_COMPUT': 'RET_COMPUT', 'RET_NAME': 'RET_NAME', 'RET_TAX_PE': 'RET_TAX_PE', 'Tax_Period': 'Tax_Period', 'Fiscal_Yea': 'Fiscal_Yea', 'Fiscal_Mon': 'Fiscal_Mon', 'RET_SUBMIS': 'RET_SUBMIS', '_matched_i': '_matched_i', '_no_return': '_no_return', 'RET_SNTN': 'RET_SNTN', 'RET_ACCUMU': 'RET_ACCUMU', 'RET_AVAILA': 'RET_AVAILA', 'RET_BALANC': 'RET_BALANC', 'RET_CARRY_': 'RET_CARRY_', 'RET_CREDIT': 'RET_CREDIT', 'RET_EXPORT': 'RET_EXPORT', 'RET_EXPO_1': 'RET_EXPO_1', 'RET_IMPORT': 'RET_IMPORT', 'RET_IMPO_1': 'RET_IMPO_1', 'RET_INPUT_': 'RET_INPUT_', 'RET_INPUT1': 'RET_INPUT1', 'RET_InputT': 'RET_InputT', 'RET_Inputa': 'RET_Inputa', 'RET_Inputf': 'RET_Inputf', 'RET_NON_CR': 'RET_NON_CR', 'RET_NameSu': 'RET_NameSu', 'RET_OUTPUT': 'RET_OUTPUT', 'RET_PURCHA': 'RET_PURCHA', 'RET_PURC_1': 'RET_PURC_1', 'RET_SALES_': 'RET_SALES_', 'RET_SCODE': 'RET_SCODE', 'RET_SERVIC': 'RET_SERVIC', 'RET_SERV_1': 'RET_SERV_1', 'RET_SERV_2': 'RET_SERV_2', 'RET_ST_WIT': 'RET_ST_WIT', 'RET_TAX_RE': 'RET_TAX_RE', 'RET_TOTAL_': 'RET_TOTAL_', 'RET_TOTAL1': 'RET_TOTAL1', 'Source_ID': 'Source_ID', 'Source_ID_': 'Source_ID_', 'Source_ID1': 'Source_ID1', 'hdbscan_cl': 'hdbscan_cl', 'reassigned': 'reassigned', });
lyr_ClusterBoundary_6.set('fieldAliases', {'fid': 'fid', 'cluster_id': 'cluster_id', 'n_points': 'n_points', 'alpha': 'alpha', });
lyr_72Clusters_7.set('fieldAliases', {'ID': 'ID', 'SR': 'SR', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'PNTN': 'PNTN', 'NTN_Final': 'NTN_Final', 'Branch': 'Branch', 'FORMALITY_': 'FORMALITY_', 'RESTAURANT': 'RESTAURANT', 'SURVEY_STA': 'SURVEY_STA', 'REGISTRATI': 'REGISTRATI', 'final_name': 'final_name', 'final_addr': 'final_addr', 'Restaura_1': 'Restaura_1', 'REG_NTN': 'REG_NTN', 'REG_REGIST': 'REG_REGIST', 'REG_SCODE': 'REG_SCODE', 'REG_CITY_N': 'REG_CITY_N', '_dict_ntn_': '_dict_ntn_', '_matched_o': '_matched_o', '_dict_ntn1': '_dict_ntn1', 'RET_NTN': 'RET_NTN', 'RET_COMPUT': 'RET_COMPUT', 'RET_NAME': 'RET_NAME', 'RET_TAX_PE': 'RET_TAX_PE', 'Tax_Period': 'Tax_Period', 'Fiscal_Yea': 'Fiscal_Yea', 'Fiscal_Mon': 'Fiscal_Mon', 'RET_SUBMIS': 'RET_SUBMIS', '_matched_i': '_matched_i', '_no_return': '_no_return', 'RET_SNTN': 'RET_SNTN', 'RET_ACCUMU': 'RET_ACCUMU', 'RET_AVAILA': 'RET_AVAILA', 'RET_BALANC': 'RET_BALANC', 'RET_CARRY_': 'RET_CARRY_', 'RET_CREDIT': 'RET_CREDIT', 'RET_EXPORT': 'RET_EXPORT', 'RET_EXPO_1': 'RET_EXPO_1', 'RET_IMPORT': 'RET_IMPORT', 'RET_IMPO_1': 'RET_IMPO_1', 'RET_INPUT_': 'RET_INPUT_', 'RET_INPUT1': 'RET_INPUT1', 'RET_InputT': 'RET_InputT', 'RET_Inputa': 'RET_Inputa', 'RET_Inputf': 'RET_Inputf', 'RET_NON_CR': 'RET_NON_CR', 'RET_NameSu': 'RET_NameSu', 'RET_OUTPUT': 'RET_OUTPUT', 'RET_PURCHA': 'RET_PURCHA', 'RET_PURC_1': 'RET_PURC_1', 'RET_SALES_': 'RET_SALES_', 'RET_SCODE': 'RET_SCODE', 'RET_SERVIC': 'RET_SERVIC', 'RET_SERV_1': 'RET_SERV_1', 'RET_SERV_2': 'RET_SERV_2', 'RET_ST_WIT': 'RET_ST_WIT', 'RET_TAX_RE': 'RET_TAX_RE', 'RET_TOTAL_': 'RET_TOTAL_', 'RET_TOTAL1': 'RET_TOTAL1', 'Source_ID': 'Source_ID', 'hdbscan_cl': 'hdbscan_cl', 'reassigned': 'reassigned', });
lyr_NewJurisdictionTown_1.set('fieldImages', {'Id': 'Range', 'Name': 'TextEdit', });
lyr_ClusterBoundary_2.set('fieldImages', {'fid': 'TextEdit', 'cluster_id': 'TextEdit', 'n_points': 'TextEdit', 'alpha': 'TextEdit', });
lyr_138Clusters_3.set('fieldImages', {'Source_ID': 'TextEdit', 'final_lat': 'TextEdit', 'final_long': 'TextEdit', 'reassigned': 'TextEdit', });
lyr_ClusterBoundary_4.set('fieldImages', {'fid': 'TextEdit', 'cluster_id': 'TextEdit', 'n_points': 'TextEdit', 'alpha': 'TextEdit', });
lyr_104Clusters_5.set('fieldImages', {'ID': 'TextEdit', 'ID_X': 'TextEdit', 'ID_Y': 'TextEdit', 'SR': 'TextEdit', 'final_lat': 'TextEdit', 'final_long': 'TextEdit', 'PNTN': 'TextEdit', 'NTN_Final': 'TextEdit', 'NTN_Final_': 'TextEdit', 'NTN_Final1': 'TextEdit', 'Branch': 'TextEdit', 'FORMALITY_': 'TextEdit', 'RESTAURANT': 'TextEdit', 'SURVEY_STA': 'TextEdit', 'REGISTRATI': 'TextEdit', 'FINAL_CLUS': 'TextEdit', 'REGISTERED': 'TextEdit', 'TOTAL_CLUS': 'TextEdit', 'UC_NAME_DI': 'TextEdit', 'RANK_DICT': 'TextEdit', 'final_name': 'TextEdit', 'final_addr': 'TextEdit', 'Restaura_1': 'TextEdit', 'REG_NTN': 'TextEdit', 'REG_REGIST': 'TextEdit', 'REG_SCODE': 'TextEdit', 'REG_CITY_N': 'TextEdit', '_dict_ntn_': 'TextEdit', '_matched_o': 'TextEdit', '_dict_ntn1': 'TextEdit', 'RET_NTN': 'TextEdit', 'RET_COMPUT': 'TextEdit', 'RET_NAME': 'TextEdit', 'RET_TAX_PE': 'TextEdit', 'Tax_Period': 'DateTime', 'Fiscal_Yea': 'TextEdit', 'Fiscal_Mon': 'TextEdit', 'RET_SUBMIS': 'TextEdit', '_matched_i': 'TextEdit', '_no_return': 'TextEdit', 'RET_SNTN': 'TextEdit', 'RET_ACCUMU': 'TextEdit', 'RET_AVAILA': 'TextEdit', 'RET_BALANC': 'TextEdit', 'RET_CARRY_': 'TextEdit', 'RET_CREDIT': 'TextEdit', 'RET_EXPORT': 'TextEdit', 'RET_EXPO_1': 'TextEdit', 'RET_IMPORT': 'TextEdit', 'RET_IMPO_1': 'TextEdit', 'RET_INPUT_': 'TextEdit', 'RET_INPUT1': 'TextEdit', 'RET_InputT': 'TextEdit', 'RET_Inputa': 'TextEdit', 'RET_Inputf': 'TextEdit', 'RET_NON_CR': 'TextEdit', 'RET_NameSu': 'TextEdit', 'RET_OUTPUT': 'TextEdit', 'RET_PURCHA': 'TextEdit', 'RET_PURC_1': 'TextEdit', 'RET_SALES_': 'TextEdit', 'RET_SCODE': 'TextEdit', 'RET_SERVIC': 'TextEdit', 'RET_SERV_1': 'TextEdit', 'RET_SERV_2': 'TextEdit', 'RET_ST_WIT': 'TextEdit', 'RET_TAX_RE': 'TextEdit', 'RET_TOTAL_': 'TextEdit', 'RET_TOTAL1': 'TextEdit', 'Source_ID': 'TextEdit', 'Source_ID_': 'TextEdit', 'Source_ID1': 'TextEdit', 'hdbscan_cl': 'TextEdit', 'reassigned': 'TextEdit', });
lyr_ClusterBoundary_6.set('fieldImages', {'fid': 'TextEdit', 'cluster_id': 'TextEdit', 'n_points': 'TextEdit', 'alpha': 'TextEdit', });
lyr_72Clusters_7.set('fieldImages', {'ID': 'TextEdit', 'SR': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'PNTN': 'TextEdit', 'NTN_Final': 'TextEdit', 'Branch': 'TextEdit', 'FORMALITY_': 'TextEdit', 'RESTAURANT': 'TextEdit', 'SURVEY_STA': 'TextEdit', 'REGISTRATI': 'TextEdit', 'final_name': 'TextEdit', 'final_addr': 'TextEdit', 'Restaura_1': 'TextEdit', 'REG_NTN': 'TextEdit', 'REG_REGIST': 'TextEdit', 'REG_SCODE': 'TextEdit', 'REG_CITY_N': 'TextEdit', '_dict_ntn_': 'TextEdit', '_matched_o': 'TextEdit', '_dict_ntn1': 'TextEdit', 'RET_NTN': 'TextEdit', 'RET_COMPUT': 'TextEdit', 'RET_NAME': 'TextEdit', 'RET_TAX_PE': 'TextEdit', 'Tax_Period': 'DateTime', 'Fiscal_Yea': 'TextEdit', 'Fiscal_Mon': 'TextEdit', 'RET_SUBMIS': 'TextEdit', '_matched_i': 'TextEdit', '_no_return': 'TextEdit', 'RET_SNTN': 'TextEdit', 'RET_ACCUMU': 'TextEdit', 'RET_AVAILA': 'TextEdit', 'RET_BALANC': 'TextEdit', 'RET_CARRY_': 'TextEdit', 'RET_CREDIT': 'TextEdit', 'RET_EXPORT': 'TextEdit', 'RET_EXPO_1': 'TextEdit', 'RET_IMPORT': 'TextEdit', 'RET_IMPO_1': 'TextEdit', 'RET_INPUT_': 'TextEdit', 'RET_INPUT1': 'TextEdit', 'RET_InputT': 'TextEdit', 'RET_Inputa': 'TextEdit', 'RET_Inputf': 'TextEdit', 'RET_NON_CR': 'TextEdit', 'RET_NameSu': 'TextEdit', 'RET_OUTPUT': 'TextEdit', 'RET_PURCHA': 'TextEdit', 'RET_PURC_1': 'TextEdit', 'RET_SALES_': 'TextEdit', 'RET_SCODE': 'TextEdit', 'RET_SERVIC': 'TextEdit', 'RET_SERV_1': 'TextEdit', 'RET_SERV_2': 'TextEdit', 'RET_ST_WIT': 'TextEdit', 'RET_TAX_RE': 'TextEdit', 'RET_TOTAL_': 'TextEdit', 'RET_TOTAL1': 'TextEdit', 'Source_ID': 'TextEdit', 'hdbscan_cl': 'TextEdit', 'reassigned': 'TextEdit', });
lyr_NewJurisdictionTown_1.set('fieldLabels', {'Id': 'no label', 'Name': 'inline label - visible with data', });
lyr_ClusterBoundary_2.set('fieldLabels', {'fid': 'no label', 'cluster_id': 'no label', 'n_points': 'no label', 'alpha': 'no label', });
lyr_138Clusters_3.set('fieldLabels', {'Source_ID': 'no label', 'final_lat': 'no label', 'final_long': 'no label', 'reassigned': 'no label', });
lyr_ClusterBoundary_4.set('fieldLabels', {'fid': 'no label', 'cluster_id': 'no label', 'n_points': 'no label', 'alpha': 'no label', });
lyr_104Clusters_5.set('fieldLabels', {'ID': 'no label', 'ID_X': 'no label', 'ID_Y': 'no label', 'SR': 'no label', 'final_lat': 'no label', 'final_long': 'no label', 'PNTN': 'no label', 'NTN_Final': 'no label', 'NTN_Final_': 'no label', 'NTN_Final1': 'no label', 'Branch': 'no label', 'FORMALITY_': 'no label', 'RESTAURANT': 'no label', 'SURVEY_STA': 'no label', 'REGISTRATI': 'no label', 'FINAL_CLUS': 'no label', 'REGISTERED': 'no label', 'TOTAL_CLUS': 'no label', 'UC_NAME_DI': 'no label', 'RANK_DICT': 'no label', 'final_name': 'no label', 'final_addr': 'no label', 'Restaura_1': 'no label', 'REG_NTN': 'no label', 'REG_REGIST': 'no label', 'REG_SCODE': 'no label', 'REG_CITY_N': 'no label', '_dict_ntn_': 'no label', '_matched_o': 'no label', '_dict_ntn1': 'no label', 'RET_NTN': 'no label', 'RET_COMPUT': 'no label', 'RET_NAME': 'no label', 'RET_TAX_PE': 'no label', 'Tax_Period': 'no label', 'Fiscal_Yea': 'no label', 'Fiscal_Mon': 'no label', 'RET_SUBMIS': 'no label', '_matched_i': 'no label', '_no_return': 'no label', 'RET_SNTN': 'no label', 'RET_ACCUMU': 'no label', 'RET_AVAILA': 'no label', 'RET_BALANC': 'no label', 'RET_CARRY_': 'no label', 'RET_CREDIT': 'no label', 'RET_EXPORT': 'no label', 'RET_EXPO_1': 'no label', 'RET_IMPORT': 'no label', 'RET_IMPO_1': 'no label', 'RET_INPUT_': 'no label', 'RET_INPUT1': 'no label', 'RET_InputT': 'no label', 'RET_Inputa': 'no label', 'RET_Inputf': 'no label', 'RET_NON_CR': 'no label', 'RET_NameSu': 'no label', 'RET_OUTPUT': 'no label', 'RET_PURCHA': 'no label', 'RET_PURC_1': 'no label', 'RET_SALES_': 'no label', 'RET_SCODE': 'no label', 'RET_SERVIC': 'no label', 'RET_SERV_1': 'no label', 'RET_SERV_2': 'no label', 'RET_ST_WIT': 'no label', 'RET_TAX_RE': 'no label', 'RET_TOTAL_': 'no label', 'RET_TOTAL1': 'no label', 'Source_ID': 'no label', 'Source_ID_': 'no label', 'Source_ID1': 'no label', 'hdbscan_cl': 'no label', 'reassigned': 'no label', });
lyr_ClusterBoundary_6.set('fieldLabels', {'fid': 'no label', 'cluster_id': 'no label', 'n_points': 'no label', 'alpha': 'no label', });
lyr_72Clusters_7.set('fieldLabels', {'ID': 'no label', 'SR': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'PNTN': 'no label', 'NTN_Final': 'inline label - visible with data', 'Branch': 'inline label - visible with data', 'FORMALITY_': 'no label', 'RESTAURANT': 'no label', 'SURVEY_STA': 'no label', 'REGISTRATI': 'no label', 'final_name': 'inline label - visible with data', 'final_addr': 'no label', 'Restaura_1': 'no label', 'REG_NTN': 'no label', 'REG_REGIST': 'inline label - visible with data', 'REG_SCODE': 'no label', 'REG_CITY_N': 'no label', '_dict_ntn_': 'no label', '_matched_o': 'no label', '_dict_ntn1': 'no label', 'RET_NTN': 'no label', 'RET_COMPUT': 'no label', 'RET_NAME': 'no label', 'RET_TAX_PE': 'no label', 'Tax_Period': 'no label', 'Fiscal_Yea': 'no label', 'Fiscal_Mon': 'no label', 'RET_SUBMIS': 'no label', '_matched_i': 'no label', '_no_return': 'no label', 'RET_SNTN': 'no label', 'RET_ACCUMU': 'no label', 'RET_AVAILA': 'no label', 'RET_BALANC': 'no label', 'RET_CARRY_': 'no label', 'RET_CREDIT': 'no label', 'RET_EXPORT': 'no label', 'RET_EXPO_1': 'no label', 'RET_IMPORT': 'no label', 'RET_IMPO_1': 'no label', 'RET_INPUT_': 'no label', 'RET_INPUT1': 'no label', 'RET_InputT': 'no label', 'RET_Inputa': 'no label', 'RET_Inputf': 'no label', 'RET_NON_CR': 'no label', 'RET_NameSu': 'no label', 'RET_OUTPUT': 'no label', 'RET_PURCHA': 'no label', 'RET_PURC_1': 'no label', 'RET_SALES_': 'no label', 'RET_SCODE': 'no label', 'RET_SERVIC': 'no label', 'RET_SERV_1': 'no label', 'RET_SERV_2': 'no label', 'RET_ST_WIT': 'no label', 'RET_TAX_RE': 'no label', 'RET_TOTAL_': 'no label', 'RET_TOTAL1': 'no label', 'Source_ID': 'no label', 'hdbscan_cl': 'no label', 'reassigned': 'inline label - visible with data', });
lyr_72Clusters_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});