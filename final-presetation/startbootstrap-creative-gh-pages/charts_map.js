 var myChart = echarts.init(document.getElementById('map'));

 var yearArr = ["Chinese Restaurant", "Restaurant Related", "Fast Food Restaurant", "Dessert Shop", "Cake Shop", "Coffee & Tea Shop", "Foreign Restaurant"];
 var yearIndex = 1;
 var selectedRange = null;
 var option = null;
 var str = "";
 var data = [];
 var geoCoordMap = {};


 // console.log(Math.round(Math.random() * 100 + 10))
 var mapFeatures = echarts.getMap('shenzhen').geoJson.features;
 mapFeatures.forEach(function(v) {
     // 地区名称
     var name = v.properties.name;
     // 地区经纬度
     geoCoordMap[name] = v.properties.cp;
 });
 data = [{
     name: '南山区',
     value: [{
         name: 'Chinese Restaurant',
         value: 55
     }, {
         name: 'Restaurant Related',
         value: 15.7
     }, {
         name: 'Fast Food Restaurant',
         value: 8.2
     }, {
         name: 'Dessert Shop',
         value: 6.3
     }, {
         name: 'Cake Shop',
         value: 3.6
     }, {
         name: 'Coffee & Tea Shop',
         value: 5.9
     }, {
         name: 'Foreign Restaurant',
         value: 5.2
     }]
 }, {
     name: '盐田区',
     value: [{
         name: 'Chinese Restaurant',
         value: 59.8
     }, {
         name: 'Restaurant Related',
         value: 13.3
     }, {
         name: 'Fast Food Restaurant',
         value: 9.1
     }, {
         name: 'Dessert Shop',
         value: 6.4
     }, {
         name: 'Cake Shop',
         value: 4.5
     }, {
         name: 'Coffee & Tea Shop',
         value: 4.0
     }, {
         name: 'Foreign Restaurant',
         value: 2.8
     }]
 }, {
     name: '罗湖区',
     value: [{
         name: 'Chinese Restaurant',
         value: 53.6
     }, {
         name: 'Restaurant Related',
         value: 18.5
     }, {
         name: 'Fast Food Restaurant',
         value: 8.2
     }, {
         name: 'Dessert Shop',
         value: 6.7
     }, {
         name: 'Cake Shop',
         value: 4.1
     }, {
         name: 'Coffee & Tea Shop',
         value: 4.5
     }, {
         name: 'Foreign Restaurant',
         value: 4.4
     }]
 }, {
     name: '福田区',
     value: [{
         name: 'Chinese Restaurant',
         value: 54.2
     }, {
         name: 'Restaurant Related',
         value: 16.2
     }, {
         name: 'Fast Food Restaurant',
         value: 9.8
     }, {
         name: 'Dessert Shop',
         value: 5.8
     }, {
         name: 'Cake Shop',
         value: 3.8
     }, {
         name: 'Coffee & Tea Shop',
         value: 5.7
     }, {
         name: 'Foreign Restaurant',
         value: 4.6
     }]
 }, {
     name: '宝安区',
     value: [{
         name: 'Chinese Restaurant',
         value: 65.9
     }, {
         name: 'Restaurant Related',
         value: 14.7
     }, {
         name: 'Fast Food Restaurant',
         value: 7.3
     }, {
         name: 'Dessert Shop',
         value: 6.0
     }, {
         name: 'Cake Shop',
         value: 3.1
     }, {
         name: 'Coffee & Tea Shop',
         value: 1.5
     }, {
         name: 'Foreign Restaurant',
         value: 1.5
     }]
 }, {
     name: '龙岗区',
     value: [{
         name: 'Chinese Restaurant',
         value: 64.9
     }, {
         name: 'Restaurant Related',
         value: 16.1
     }, {
         name: 'Fast Food Restaurant',
         value: 6.0
     }, {
         name: 'Dessert Shop',
         value: 6.0
     }, {
         name: 'Cake Shop',
         value: 3.8
     }, {
         name: 'Coffee & Tea Shop',
         value: 1.7
     }, {
         name: 'Foreign Restaurant',
         value: 1.5
     }]
 }];

 function convertMapDta(year, data) {
     var mapData = [];
     data.forEach(function(v) {
         v.value.forEach(function(v1) {
             if (String(v1.name) === String(year)) {
                 mapData.push({
                     "name": v.name,
                     "value": v1.value
                 })
             }
         })
     });
     return mapData;
 }

 function resetPie(myChart, params, geoCoordMap, yearIndex) {
     var op = myChart.getOption();
     var ops = op.series;
     ops.forEach(function(v, i) {
         if (i > 0) {
             var geoCoord = geoCoordMap[v.name];
             var p = myChart.convertToPixel({
                 seriesIndex: 0
             }, geoCoord);
             v.center = p;
             if (params != 0 && params.zoom) {
                 v.radius = v.radius * params.zoom;
             }
             if (params != 0 && params.selected) {
                 var rangeFirstNumber = params.selected[0];
                 var rangeSecondNumber = params.selected[1];
                 var pd = v.data[yearIndex].value;
                 if (pd < rangeFirstNumber || pd > rangeSecondNumber) {
                     v.itemStyle.normal.opacity = 0;
                 } else {
                     v.itemStyle.normal.opacity = 1;
                 }
             }
         }
     });
     myChart.setOption(op, true);
 }

 function addPie(chart, data) {
     var op = chart.getOption();
     var sd = option.series;
     for (var i = 0; i < data.length; i++) {
         var randomValue = Math.round(Math.random() * 30);
         var radius = 30;
         var radius = randomValue <= 10 ? 10 : randomValue;
         // var radius = [{
         //     name: 'BaoAn',
         //     value: 50
         // }, {
         //     name: 'FuTian',
         //     value: 50
         // }, {
         //     name: 'LongGang',
         //     value: 50
         // }, {
         //     name: 'LuoHu',
         //     value: 50
         // }, {
         //     name: 'NanShan',
         //     value: 50
         // }, {
         //     name: 'YanTian',
         //     value: 50
         // }];


         var geoCoord = geoCoordMap[data[i].name];
         if (geoCoord) {
             var vr = [];
             (data[i].value).map(function(v, j) {
                 vr.push({
                     name: v.name,
                     value: v.value
                 });
             });
             var p = chart.convertToPixel({
                 seriesIndex: 0
             }, geoCoord);
             sd.push({
                 name: data[i].name,
                 type: 'pie',
                 tooltip: {
                     formatter: function(params) {
                         return params.seriesName + "<br/>" + params.name + " : " + params.value;
                     }
                 },
                 radius: radius,
                 // radius: radius.value,
                 center: p,
                 data: vr,
                 zlevel: 4,
                 label: {
                     normal: {
                         show: false,
                     },
                 },
                 labelLine: {
                     normal: {
                         show: false
                     }
                 },
                 itemStyle: {
                     mormal: {
                         opacity: 1
                     }
                 }
             });
         }
     }
     return sd;
 };

 // 指定图表的配置项和数据
 var option = {
     title: {
         text: 'Statistics Of Food In Various Districts Of ShenZhen ',
         left: 'center',
         textStyle: {
             color: '#fff'
         }
     },
     tooltip: {
         trigger: 'item',
         formatter: function(params) {
             if (params.value) {
                 return params.name + "<br/>" + yearArr[yearIndex] + ": " + params.value;
             }
         }
     },
     visualMap: {
         min: 14,
         max: 18,
         left: '40',
         top: 'bottom',
         seriesIndex: 0,
         text: ["high", "low"],
         calculable: true,
         color: ['#3aa3bc', '#448798', '#4e6c74'],
     },
     series: [{
         name: 'chinaMap',
         type: 'map',
         mapType: 'shenzhen',
         roam: true,
         label: {
             normal: {
                 show: true
             },
             emphasis: {
                 show: true
             }
         },
         itemStyle: {
             normal: {
                 areaColor: "#eee"
             }
         },
         data: convertMapDta(yearArr[yearIndex], data),
         /*zlevel:3*/
     }]
 };

 if (option && typeof option === "object") {
     myChart.setOption(option, true);
 }

 addPie(myChart, data);
 myChart.setOption(option, true);


 myChart.on('georoam', function(params) {
     resetPie(myChart, params, geoCoordMap, yearIndex);
 });

 myChart.on('datarangeselected', function(params) {
     resetPie(myChart, params, geoCoordMap, yearIndex);
 });

 window.addEventListener("resize", function() {
     myChart.resize();
     resetPie(myChart, 0, geoCoordMap);
 })
 console.log(data)
     // 使用刚指定的配置项和数据显示图表。
 myChart.setOption(option);


 //  chart.setOption(option);
 $(window).on('resize', function() {
     if (chart != null && chart != undefined) {
         chart.resize();
         console.log(chart);
     }
 });