var myChart = echarts.init(document.getElementById('cake'));

// 指定图表的配置项和数据
var option = {
    backgroundColor: "",
    color: ["#CD853F", "#FF6347", "#CD853F", "#FF6347"],
    // title: {
    //     text: '2000-2016年中国汽车quantity of service及增长率'
    // },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            label: {
                show: true,
                backgroundColor: '#333'
            }
        }
    },

    grid: {
        containLabel: true
    },
    legend: {
        align: "left",
        data: ['baking store density', 'dessert store density', 'quantity of baking service', 'quantity of dessert service'],
        Y: "bottom",
        textStyle: {
            color: '#ccc'
        }
    },
    xAxis: [{
        type: 'category',
        position: 'bottom',
        boundaryGap: true,
        axisLine: {
            lineStyle: {
                color: '#ccc',
                type: 'dashed',
                width: 0.5
            }
        },
        axisTick: {
            alignWithLabel: true
        },
        axisLabel: {
            // show: true,
            // interval: 'auto', // {number}
            // rotate: 45,
            // margin: 8,
            // formatter: '{value}district',
            textStyle: {
                // color: 'blue',
                fontFamily: 'sans-serif',
                // fontSize: 15,
                // fontStyle: 'italic',
                fontWeight: 'bold'
            }
        },
        data: ['BaoAn', 'FuTian', 'LongGang', 'LuoHu', 'NanShan', 'YanTian']
    }],

    yAxis: [{
        type: 'value',
        show: false,
        // splitLine: {
        //     show: false
        // },
        // name: 'store density(/km2)',
        // min: 0,
        // max: 8,
        // position: 'right',
        // axisLine: {
        //     lineStyle: {
        //         color: '#ccc'
        //     }
        // },
    }, {
        type: 'value',
        name: 'quantity of service(/person)',
        min: 1000,
        max: 5000,
        splitLine: {
            show: false
        },
        position: 'right',
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#ccc',
                type: 'dashed',
                width: 0.5
            }
        },
    }],
    series: [{
        name: 'baking store density',
        type: 'line',
        // stack: 'tea store density',
        smooth: true,
        showAllSymbol: true,
        symbol: 'emptyCircle',
        symbolSize: 6,
        label: {
            normal: {
                show: true,
                position: 'top',
            }
        },
        lineStyle: {
            normal: {
                width: 1.5,
                // shadowColor: 'rgba(0,0,0,0.4)',
                // shadowBlur: 10,
                // shadowOffsetY: 10
            }
        },
        data: [2.4, 7.1, 1.2, 4.9, 2.6, 0.7]
    }, {
        name: 'dessert store density',
        type: 'line',
        // stack: 'coffe store density',
        smooth: true,
        showAllSymbol: true,
        symbol: 'emptyCircle',
        symbolSize: 6,
        label: {
            normal: {
                show: true,
                position: 'top',
            }
        },
        lineStyle: {
            normal: {
                width: 1.5,
                // shadowColor: 'rgba(0,0,0,0.4)',
                // shadowBlur: 10,
                // shadowOffsetY: 10
            }
        },
        data: [4.6, 11.0, 1.9, 7.9, 4.5, 1.0]
    }, {
        name: 'quantity of baking service',
        type: 'bar',
        yAxisIndex: 1,
        // stack: 'quantity of tea service',
        barWidth: 10,
        itemStyle: {
            normal: {
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1, [{
                        offset: 0,
                        color: '#F4A460'
                    }, {
                        offset: 1,
                        color: '#CD853F'
                    }]
                )

            }
        },
        label: {
            normal: {
                // show: true,
                position: 'top',
            }
        },
        data: [2679, 2441, 2390, 2503, 2332, 4245]
    }, {
        name: 'quantity of dessert service',
        type: 'bar',
        yAxisIndex: 1,
        // stack: 'quantity of coffe service',
        barWidth: 10,
        itemStyle: {
            normal: {
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1, [{
                        offset: 0,
                        color: '#FA8072'
                    }, {
                        offset: 1,
                        color: '#FF6347'
                    }]
                )

            }
        },
        label: {
            normal: {
                // show: true,
                position: 'top'
            }
        },
        data: [1401, 1576, 1508, 1538, 1347, 2966]
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