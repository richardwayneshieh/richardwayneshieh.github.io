 var myChart = echarts.init(document.getElementById('cn_part'));

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
         type: 'value'
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
         type: 'category',
         data: ['Yun-Gui Cuisine', 'Northwest Cuisine', 'Northeastern Cuisine', 'Shandong Cuisine', 'Hubei Cuisine', 'Anhui Cuisine', 'Jiang-Zhe Cuisine', 'Fujian Cuisine']
     },
     series: [{
         name: 'BaoAn',
         type: 'bar',
         stack: '总量',
         barWidth: 12,
         itemStyle: {
             normal: {
                 barBorderRadius: 5,
                 //  color: new echarts.graphic.LinearGradient(
                 //      0, 0, 0, 1, [{
                 //          offset: 0,
                 //          color: '#43eec6'
                 //      }, {
                 //          offset: 1,
                 //          color: '#14c8d4'
                 //      }]
                 //  )

             }
         },
         label: {
             normal: {
                 show: false,
                 position: 'insideRight'
             }
         },
         data: [53, 188, 129, 4, 101, 7, 28, 7]
     }, {
         name: 'FuTian',
         type: 'bar',
         stack: '总量',
         barWidth: 12,
         itemStyle: {
             normal: {
                 barBorderRadius: 5,
                 //  color: new echarts.graphic.LinearGradient(
                 //      0, 0, 0, 1, [{
                 //          offset: 0,
                 //          color: '#43eec6'
                 //      }, {
                 //          offset: 1,
                 //          color: '#14c8d4'
                 //      }]
                 //  )

             }
         },
         label: {
             normal: {
                 show: false,
                 position: 'insideRight'
             }
         },
         data: [16, 59, 69, 7, 15, 7, 56, 2]
     }, {
         name: 'LuoGang',
         type: 'bar',
         stack: '总量',
         barWidth: 12,
         itemStyle: {
             normal: {
                 barBorderRadius: 5,
                 //  color: new echarts.graphic.LinearGradient(
                 //      0, 0, 0, 1, [{
                 //          offset: 0,
                 //          color: '#43eec6'
                 //      }, {
                 //          offset: 1,
                 //          color: '#14c8d4'
                 //      }]
                 //  )

             }
         },
         label: {
             normal: {
                 show: false,
                 position: 'insideRight'
             }
         },
         data: [16, 55, 60, 4, 51, 6, 20, 4]
     }, {
         name: 'LuoHu',
         type: 'bar',
         stack: '总量',
         barWidth: 12,
         itemStyle: {
             normal: {
                 barBorderRadius: 5,
                 //  color: new echarts.graphic.LinearGradient(
                 //      0, 0, 0, 1, [{
                 //          offset: 0,
                 //          color: '#43eec6'
                 //      }, {
                 //          offset: 1,
                 //          color: '#14c8d4'
                 //      }]
                 //  )

             }
         },
         label: {
             normal: {
                 show: false,
                 position: 'insideRight'
             }
         },
         data: [3, 20, 40, 11, 7, 1, 25, 2]
     }, {
         name: 'NanShan',
         type: 'bar',
         stack: '总量',
         barWidth: 12,
         itemStyle: {
             normal: {
                 barBorderRadius: 5,
                 //  color: new echarts.graphic.LinearGradient(
                 //      0, 0, 0, 1, [{
                 //          offset: 0,
                 //          color: '#43eec6'
                 //      }, {
                 //          offset: 1,
                 //          color: '#14c8d4'
                 //      }]
                 //  )

             }
         },
         label: {
             normal: {
                 show: false,
                 position: 'insideRight'
             }
         },
         data: [14, 58, 58, 4, 22, 7, 36, 3]
     }, {
         name: 'YanTian',
         type: 'bar',
         stack: '总量',
         barWidth: 12,
         itemStyle: {
             normal: {
                 barBorderRadius: 5,
                 //  color: new echarts.graphic.LinearGradient(
                 //      0, 0, 0, 1, [{
                 //          offset: 0,
                 //          color: '#43eec6'
                 //      }, {
                 //          offset: 1,
                 //          color: '#14c8d4'
                 //      }]
                 //  )

             }
         },
         label: {
             normal: {
                 show: false,
                 position: 'insideRight'
             }
         },
         data: [1, 0, 10, 1, 0, 0, 0]
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