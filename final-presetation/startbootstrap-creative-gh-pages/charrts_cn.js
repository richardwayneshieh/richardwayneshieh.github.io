 var myChart = echarts.init(document.getElementById('cn'));

 // 指定图表的配置项和数据
 // var zrColor = require('zrender\tool\color');
 // var colorList = [
 //     '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
 //     '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0'
 // ];
 // var itemStyle = {
 //     normal: {
 //         color: function(params) {
 //             if (params.dataIndex < 0) {
 //                 // for legend
 //                 return zrColor.lift(
 //                     colorList[colorList.length - 1], params.seriesIndex * 0.1
 //                 );
 //             } else {
 //                 // for bar
 //                 return zrColor.lift(
 //                     colorList[params.dataIndex], params.seriesIndex * 0.1
 //                 );
 //             }
 //         }
 //     }
 // }; 
 var option = {
     tooltip: {
         trigger: 'axis',
         axisPointer: { // 坐标轴指示器，坐标轴触发有效
             type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
         }
     },
     legend: {
         x: "center",
         textStyle: {
             color: '#ccc'
         },
         align: "left",
         data: ['BaoAn', 'FuTian', 'LuoGang', 'LuoHu', 'NanShan', 'YanTian']
     },
     grid: {
         left: '3%',
         right: '4%',
         bottom: '3%',
         containLabel: true
     },
     xAxis: {
         type: 'value',
         axisLine: {
             lineStyle: {
                 color: '#ccc',
             }
         },
         axisTick: {
             alignWithLabel: true
         },
         //  axisLabel: {
         //      textStyle: {
         //          fontFamily: 'sans-serif',
         //          fontWeight: 'bold'
         //      }
         //  },
         splitLine: {
             show: true,
             lineStyle: {
                 color: '#ccc',
                 type: 'dashed',
                 width: 0.5
             }
         },
     },
     yAxis: {
         type: 'category',
         axisLine: {
             lineStyle: {
                 color: '#ccc',
                 type: 'dashed',
                 width: 0.5
             }
         },
         axisLabel: {
             textStyle: {
                 fontFamily: 'sans-serif',
                 fontWeight: 'bold'
             }
         },

         data: ['Yun-Gui Cuisine', 'Northwest Cuisine', 'Northeastern Cuisine', 'Shandong Cuisine', 'Sichuan Cuisine', 'Hubei Cuisine', 'Anhui Cuisine', 'Jiang-Zhe Cuisine', 'Hunan Cuisine', 'Fujian Cuisine', 'Guangdong Cuisine']
     },
     series: [{
         name: 'BaoAn',
         type: 'bar',
         stack: '总量',
         label: {
             normal: {
                 show: false,
                 position: 'insideRight'
             }
         },
         data: [53, 188, 129, 4, 2957, 101, 7, 28, 3034, 7, 1888]
     }, {
         name: 'FuTian',
         type: 'bar',
         stack: '总量',
         label: {
             normal: {
                 show: false,
                 position: 'insideRight'
             }
         },
         data: [16, 59, 69, 7, 640, 15, 7, 56, 423, 2, 525]
     }, {
         name: 'LuoGang',
         type: 'bar',
         stack: '总量',
         label: {
             normal: {
                 show: false,
                 position: 'insideRight'
             }
         },
         data: [16, 55, 60, 4, 1465, 51, 6, 20, 1045, 4, 1003]
     }, {
         name: 'LuoHu',
         type: 'bar',
         stack: '总量',
         label: {
             normal: {
                 show: false,
                 position: 'insideRight'
             }
         },
         data: [3, 20, 40, 11, 420, 7, 1, 25, 227, 2, 316]
     }, {
         name: 'NanShan',
         type: 'bar',
         stack: '总量',
         label: {
             normal: {
                 show: false,
                 position: 'insideRight'
             }
         },
         data: [14, 58, 58, 4, 585, 22, 7, 36, 449, 3, 420]
     }, {
         name: 'YanTian',
         type: 'bar',
         stack: '总量',
         label: {
             normal: {
                 show: false,
                 position: 'insideRight'
             }
         },
         data: [1, 0, 10, 39, 1, 0, 0, 43, 0, 20]
     }]
 };


 // 使用刚指定的配置项和数据显示图表。
 myChart.setOption(option);

 $(window).on('resize', function() {
     if (chart != null && chart != undefined) {
         chart.resize();
         console.log(chart);
     }
 });