var myChart = echarts.init(document.getElementById('coffee'));

// 指定图表的配置项和数据
var option = {
    backgroundColor: "",
    color: ["#43eec6", "#ff733f", "#43eec6", "#ff733f"],
    title: {
        // text: '2000-2016年中国汽车quantity of service及增长率',
        // textStyle: {
        //     color: '#fff'
    },
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
        verticalAlign: "bottom",
        data: ['tea store density', 'coffe store density', 'quantity of tea service', 'quantity of coffe service'],
        // Y: "bottom",
        // x: "center",
        // orient: "horizontal",
        textStyle: {
            color: '#ccc',
        }
    },
    xAxis: [{
        type: 'category',
        position: 'bottom',
        boundaryGap: true,
        axisLine: {
            lineStyle: {
                color: '#ccc'
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
        max: 18000,
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
        name: 'tea store density',
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
        data: [0.4, 4.4, 0.2, 2.0, 1.1, 0.2]
    }, {
        name: 'coffe store density',
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
        data: [0.7, 6.1, 0.3, 3.3, 3.1, 0.3]
    }, {
        name: 'quantity of tea service',
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
                        color: '#43eec6'
                    }, {
                        offset: 1,
                        color: '#14c8d4'
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
        data: [14985, 3889, 14355, 6075, 5623, 12735]
    }, {
        name: 'quantity of coffe service',
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
                        color: '#ffd285'
                    }, {
                        offset: 1,
                        color: '#ff733f'
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
        data: [8610, 2821, 8217, 3682, 1945, 8327]
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