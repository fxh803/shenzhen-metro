function buttonClick19() {
    var content21 = document.getElementById("container21");
    var content20 = document.getElementById("container20");
    var content19 = document.getElementById("container19");
    var button19 = document.getElementById("button19");
    var button20 = document.getElementById("button20");
    var button21 = document.getElementById("button21");
    content21.style.display = 'none';
    content19.style.display = 'block';
    content20.style.display = 'none';
    button19.style.backgroundColor = '#0d6efd';
    button20.style.backgroundColor = '#838383';
    button21.style.backgroundColor = '#838383';
    button19.style.color = 'white';
    button20.style.color = 'black';
    button21.style.color = 'black';
    var dom19 = document.getElementById("container19");
    var myChart19 = echarts.init(dom19);
    myChart19.resize();
    var app = {};

    var option19;

    option19 = {
        color: ["#7EC0EE", "#FF9F7F", "#FFD700", "#C9C9C9", "#E066FF", "#C0FF3E"],
        title: {
            text: '2019深圳地铁月流量'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['一号线', '二号线', '三号线', '五号线', '七号线', '九号线', '十一号线']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '一号线',
                type: 'line',
                stack: 'Total',
                data: [3559.9, 2481.3, 3762.1, 3624.2, 3684.1, 3549.1, 3979.4, 3810.6, 3491.7, 3498.9, 3506.8, 3629.9]
            },
            {
                name: '二号线',
                type: 'line',
                stack: 'Total',
                data: [1718.3, 1196.5, 1827.2, 1750.4, 1782.5, 1704.2, 1929.7, 1856.5, 1766.1, 1793.1, 1834.2, 1863.4]
            },
            {
                name: '三号线',
                type: 'line',
                stack: 'Total',
                data: [2529.1, 1756.5, 2738.2, 2609.2, 2685.1, 2596.2, 2869.2, 2751.4, 2611.2, 2650.8, 2697.3, 2754.1]
            },
            {
                name: '五号线',
                type: 'line',
                stack: 'Total',
                data: [2674.9, 1851.1, 2964.9, 2837.9, 2907, 2808.3, 3140, 3051.9, 2914.8, 3010.6, 3100.6, 3241.1]
            },
            {
                name: '七号线',
                type: 'line',
                stack: 'Total',
                data: [1519.4, 1020.1, 1667.4, 1589.5, 1641.3, 1607.6, 1788.4, 1717.1, 1714, 1781.3, 1856.9, 1924]
            },
            {
                name: '九号线',
                type: 'line',
                stack: 'Total',
                data: [951, 699.1, 1071.2, 1007.2, 1033.8, 998.8, 1128.6, 1087, 1061.1, 1116.1, 1124.6, 1401.2]
            },
            {
                name: '十一号线',
                type: 'line',
                stack: 'Total',
                data: [1248.6, 917.2, 1386.9, 1323.2, 1366.9, 1318.1, 1477.4, 1439.7, 1355.2, 1407, 1405, 1437.2]
            }
        ]
    };
    window.onresize = myChart19.resize;
    myChart19.clear();
    if (option19 && typeof option19 === 'object') {
        myChart19.setOption(option19);
    }
}
function buttonClick20() {
    var content21 = document.getElementById("container21");
    var content20 = document.getElementById("container20");
    var content19 = document.getElementById("container19");
    var button19 = document.getElementById("button19");
    var button20 = document.getElementById("button20");
    var button21 = document.getElementById("button21");
    content21.style.display = 'none';
    content19.style.display = 'none';
    content20.style.display = 'block';
    button19.style.backgroundColor = '#838383';
    button20.style.backgroundColor = '#0d6efd';
    button21.style.backgroundColor = '#838383';
    button19.style.color = 'black';
    button20.style.color = 'white';
    button21.style.color = 'black';

    var dom20 = document.getElementById("container20");
    var myChart20 = echarts.init(dom20);
    myChart20.resize();
    var app = {};

    var option20;

    option20 = {
        color: ["#7EC0EE", "#FF9F7F", "#FFD700", "#C9C9C9", "#E066FF", "#C0FF3E"],
        title: {
            text: '2020深圳地铁月流量'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['一号线', '二号线', '三号线', '五号线', '六号线', '七号线', '八号线', '九号线', '十号线', '十一号线']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '一号线',
                type: 'line',
                stack: 'Total',
                data: [2486.9, 336, 1265.7, 2027.4, 2355.8, 2600, 2968, 2919.7, 2868.8, 2806.3, 2986, 3123]
            },
            {
                name: '二号线',
                type: 'line',
                stack: 'Total',
                data: [1224.5, 172.6, 635, 982.4, 1185.1, 1332.6, 1512.2, 1452.6, 1457.1, 1430.3, 1738, 1788]
            },
            {
                name: '三号线',
                type: 'line',
                stack: 'Total',
                data: [1873.3, 263.7, 959.1, 1542.9, 1875.4, 2043.1, 2272.4, 2264.8, 2286.1, 2317.9, 2482, 2580]
            },
            {
                name: '五号线',
                type: 'line',
                stack: 'Total',
                data: [2174.7, 356, 1304, 2058.8, 2425, 2662.7, 2979, 2948.6, 2963.8, 2954.3, 3133, 3271]
            },
            {
                name: '六号线',
                type: 'line',
                stack: 'Total',
                data: [0, 0, 0, 0, 0, 0, 0, 317.8, 706, 822.7, 878, 909]
            },
            {
                name: '七号线',
                type: 'line',
                stack: 'Total',
                data: [1257.6, 184.1, 694.1, 1086.6, 1292.5, 1432, 1604.7, 1559.1, 1560.1, 1494.5, 1620, 1693]
            },
            {
                name: '八号线',
                type: 'line',
                stack: 'Total',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 223.7, 197]
            },
            {
                name: '九号线',
                type: 'line',
                stack: 'Total',
                data: [1012.6, 152.3, 570.2, 933.5, 1141.7, 1264.6, 1438.2, 1431, 1467.1, 1425.8, 1538, 1626]
            },
            {
                name: '十号线',
                type: 'line',
                stack: 'Total',
                data: [0, 0, 0, 0, 0, 0, 0, 348, 815, 846.3, 925.1, 998]
            },
            {
                name: '十一号线',
                type: 'line',
                stack: 'Total',
                data: [978.9, 157.9, 563, 7, 872.1, 1043.4, 1131.4, 1282.2, 1291.2, 1264, 1296.9, 1351, 1378]
            }
        ]
    };
    window.onresize = myChart20.resize;
    myChart20.clear();
    if (option20 && typeof option20 === 'object') {
        myChart20.setOption(option20);
    }
}
function buttonClick21() {
    var content21 = document.getElementById("container21");
    var content20 = document.getElementById("container20");
    var content19 = document.getElementById("container19");
    var button19 = document.getElementById("button19");
    var button20 = document.getElementById("button20");
    var button21 = document.getElementById("button21");
    content21.style.display = 'block';
    content19.style.display = 'none';
    content20.style.display = 'none';
    button19.style.backgroundColor = '#838383';
    button20.style.backgroundColor = '#838383';
    button21.style.backgroundColor = '#0d6efd';
    button19.style.color = 'black';
    button20.style.color = 'black';
    button21.style.color = 'white';

    var dom21 = document.getElementById("container21");
    var myChart21 = echarts.init(dom21);
    myChart21.resize();
    var app = {};
    var option21;
    option21 = {
        color: ["#7EC0EE", "#FF9F7F", "#FFD700", "#C9C9C9", "#E066FF", "#C0FF3E"],
        title: {
            text: '2021深圳地铁月流量'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['一号线', '二号线', '三号线', '五号线', '六号线', '七号线', '八号线', '九号线', '十号线', '十一号线']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '一号线',
                type: 'line',
                stack: 'Total',
                data: [2869.2, 1985.1, 3117.4, 3031.6, 2966.4, 2532.7, 3015.5, 3010.9, 2942.1, 2854.9, 3019.5]
            },
            {
                name: '二号线',
                type: 'line',
                stack: 'Total',
                data: [1673.9, 1211.6, 1818.8, 1724, 1683, 1416.3, 1659.8, 1672.5, 1664.4, 1621, 1737.5]
            },
            {
                name: '三号线',
                type: 'line',
                stack: 'Total',
                data: [2403.9, 1654.8, 2586.7, 2520.5, 2472, 2074.4, 2474.8, 2441.2, 2384.2, 2369.7, 2490]
            },
            {
                name: '五号线',
                type: 'line',
                stack: 'Total',
                data: [3029.1, 2126.4, 3397.8, 3304.8, 3252.7, 2809.6, 3245.1, 3226.6, 3223.4, 3121.6, 3308.9]
            },
            {
                name: '六号线',
                type: 'line',
                stack: 'Total',
                data: [857.6, 637.1, 1013.1, 1033, 1052.9, 847.1, 1047.6, 1041.7, 1047.3, 1073, 1098.5]
            },
            {
                name: '七号线',
                type: 'line',
                stack: 'Total',
                data: [1571.7, 1061, 1684.2, 1608.9, 1581.3, 1453.2, 1609.3, 1596.3, 1558.6, 1495.7, 1627.5]
            },
            {
                name: '八号线',
                type: 'line',
                stack: 'Total',
                data: [198.7, 180.6, 207.9, 213, 217, 112.3, 186.1, 195.8, 194.9, 225.5, 204.9]
            },
            {
                name: '九号线',
                type: 'line',
                stack: 'Total',
                data: [1512, 1092.5, 1647, 1598.7, 1561.7, 1399.7, 1594.1, 1578.5, 1552.5, 1474.5, 1602.9]
            },
            {
                name: '十号线',
                type: 'line',
                stack: 'Total',
                data: [952.5, 654, 1069.7, 1052.2, 1042.3, 965.3, 1095.5, 1098.6, 1093.4, 1055.5, 1140.2]
            },
            {
                name: '十一号线',
                type: 'line',
                stack: 'Total',
                data: [1247.9, 898.8, 1423.7, 1407.7, 1377.7, 1103.7, 1327.7, 1332.2, 1341.2, 1330.1, 1353.6]
            }
        ]
    };
    window.onresize = myChart21.resize;
    myChart21.clear();
    if (option21 && typeof option21 === 'object') {
        myChart21.setOption(option21);
    }
}

$('.pass').click(function () {

    buttonClick21();
});
