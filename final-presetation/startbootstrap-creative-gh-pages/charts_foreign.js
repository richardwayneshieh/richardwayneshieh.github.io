var myChart = echarts.init(document.getElementById('foreign'));

labelTop = {
    normal: {
        label: {
            show: true,
            position: 'center',
            formatter: '{b}',
            textStyle: {
                baseline: 'bottom'
            }
        },
        labelLine: {
            show: false
        }
    }
};
var labelFromatter = {
    normal: {
        label: {
            formatter: function(params) {
                return 100 - params.value + '%'
            },
            textStyle: {
                baseline: 'top'
            }
        }
    },
}
var labelBottom = {
    normal: {
        color: '#ccc',
        label: {
            show: true,
            position: 'center'
        },
        labelLine: {
            show: false
        }
    },
    emphasis: {
        color: 'rgba(0,0,0,0)'
    }
};
var radius = [40, 55];

// 指定图表的配置项和数据
option = {
    legend: {
        x: 'center',
        y: 'center',
        data: [
            'Japanese Cuisine', 'Korean Cuisine', 'Italy cuisine', 'American Cuisine', 'Thailand Cuisine',
        ]
    },
    title: {
        text: 'The Most Popular Foreign Food ——top5',
        // subtext: '原始数据来自豆瓣',
        x: 'center'
    },
    toolbox: {
        show: true,
        feature: {
            // dataView: {
            //     show: true,
            //     readOnly: false
            // },
            magicType: {
                show: true,
                type: ['pie', 'funnel'],
                option: {
                    funnel: {
                        width: '20%',
                        height: '30%',
                        itemStyle: {
                            normal: {
                                label: {
                                    formatter: function(params) {
                                        return 'other\n' + params.value + '%\n'
                                    },
                                    textStyle: {
                                        baseline: 'middle'
                                    }
                                }
                            },
                        }
                    }
                }
            },
            // restore: {
            //     show: true
            // },
            // saveAsImage: {
            //     show: true
            // }
        }
    },
    series: [{
        type: 'pie',
        center: ['10%', '30%'],
        radius: radius,
        x: '0%', // for funnel
        itemStyle: labelFromatter,
        data: [{
            name: 'other',
            value: 77,
            itemStyle: labelBottom
        }, {
            name: 'Japanese Cuisine',
            value: 23,
            itemStyle: labelTop
        }]
    }, {
        type: 'pie',
        center: ['30%', '30%'],
        radius: radius,
        x: '20%', // for funnel
        itemStyle: labelFromatter,
        data: [{
            name: 'other',
            value: 85,
            itemStyle: labelBottom
        }, {
            name: 'Korean Cuisine',
            value: 15,
            itemStyle: labelTop
        }]
    }, {
        type: 'pie',
        center: ['50%', '30%'],
        radius: radius,
        x: '40%', // for funnel
        itemStyle: labelFromatter,
        data: [{
            name: 'other',
            value: 94,
            itemStyle: labelBottom
        }, {
            name: 'Italy cuisine',
            value: 6,
            itemStyle: labelTop
        }]
    }, {
        type: 'pie',
        center: ['70%', '30%'],
        radius: radius,
        x: '60%', // for funnel
        itemStyle: labelFromatter,
        data: [{
            name: 'other',
            value: 97,
            itemStyle: labelBottom
        }, {
            name: 'American Cuisine',
            value: 3,
            itemStyle: labelTop
        }]
    }, {
        type: 'pie',
        center: ['90%', '30%'],
        radius: radius,
        x: '80%', // for funnel
        itemStyle: labelFromatter,
        data: [{
            name: 'other',
            value: 98,
            itemStyle: labelBottom
        }, {
            name: 'Thailand Cuisine',
            value: 2,
            itemStyle: labelTop
        }]
    }]
};
myChart.setOption(option);

$(window).on('resize', function() {
    if (chart != null && chart != undefined) {
        chart.resize();
        console.log(chart);
    }
});