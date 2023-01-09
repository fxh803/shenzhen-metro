// 初始化图表	
var myChart1 = echarts.init(document.getElementById('3d_1'), null, { devicePixelRatio: 2.5 });
//  window.onresize = myChart1.resize;
// JSON文件(地图数据)路径
var uploadedDataURL = "data/440300.json";

// var option = {};

// 显示加载动画效果,可以在加载数据前手动调用该接口显示加载动画，在数据加载完成后调用 hideLoading 隐藏加载动画。
myChart1.showLoading();

// 引入JSON文件
$.get(uploadedDataURL, function (geoJson) {

    // 注册地图名字(tongren)和数据(geoJson)
    echarts.registerMap('shenzhen', geoJson);

    // 隐藏动画加载效果。
    myChart1.hideLoading();

    // 图表配置项		
    option1 = {

        title: { // 标题
            top: '5%',
            text: '深铁各区里程数统计',
            subtext: '',
            x: 'center',
            textStyle: {
                color: '#2c2c2c'
            }
        },

        tooltip: { // 提示框
            trigger: 'item',
            formatter: function (params) {
                return params.name + '</br>' + "里程数:" + params.value + 'km '
            }
        },
        visualMap: {
            min: 0,
            max: 100,
            text: ['100km', '0km'],
            orient: 'horizontal',
            itemWidth: 15,
            itemHeight: 120,
            right: 30,
            bottom: 30,
            precision: 2,
            inRange: {
                color: ['#ffbd59', '#4b371a']
            },
            textStyle: {
                color: 'black'
            }
        },
        series: [{
            type: 'map3D', // 系列类型
            name: 'map3D', // 系列名称
            map: 'shenzhen', // 地图类型。echarts-gl 中使用的地图类型同 geo 组件相同(ECharts 中提供了两种格式的地图数据，一种是可以直接 script 标签引入的 js 文件，引入后会自动注册地图名字和数据。还有一种是 JSON 文件，需要通过 AJAX 异步加载后手动注册。)
            // 环境贴图，支持純颜色值，渐变色，全景贴图的 url。默认为 'auto'，在配置有 light.ambientCubemap.texture 的时候会使用该纹理作为环境贴图。否则则不显示环境贴图。
            environment: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ // 配置为垂直渐变的背景
                offset: 0,
                color: '#000000' // 天空颜色           
            }, {
                offset: 1,
                color: '#ffffff' // 地面颜色
            }, {
                offset: 0.5,
                color: '#ffffff' // 地面颜色
            }], false),

            label: { // 标签的相关设置
                show: true, // (地图上的城市名称)是否显示标签 [ default: false ]
                //distance: 50,               // 标签距离图形的距离，在三维的散点图中这个距离是屏幕空间的像素值，其它图中这个距离是相对的三维距离
                //formatter:,               // 标签内容格式器
                textStyle: { // 标签的字体样式
                    color: '#FFFFFF', // 地图初始化区域字体颜色
                    fontSize: 12, // 字体大小
                    opacity: 1, // 字体透明度
                    backgroundColor: 'rgba(0,23,11,0)' // 字体背景色
                },
            },

            itemStyle: { // 三维地理坐标系组件 中三维图形的视觉属性，包括颜色，透明度，描边等。
                areaColor: '#084D7F', // 地图板块的颜色
                opacity: 0.7, // 图形的不透明度 [ default: 1 ]
                borderWidth: 0.5, // (地图板块间的分隔线)图形描边的宽度。加上描边后可以更清晰的区分每个区域   [ default: 0 ]
                borderColor: '#ffffff' // 图形描边的颜色。[ default: #333 ]
            },

            emphasis: { // 鼠标 hover 高亮时图形和标签的样式 (当鼠标放上去时  label和itemStyle 的样式) 
                label: { // label高亮时的配置
                    show: true,
                    textStyle: {
                        color: '#FFFFFF', // 高亮时标签颜色变为 白色
                        fontSize: 15, // 高亮时标签字体 变大
                    }
                },
                itemStyle: { // itemStyle高亮时的配置
                    areaColor: '#4BC0F8', // 高亮时地图板块颜色改变
                }
            },

            groundPlane: { // 地面可以让整个组件有个“摆放”的地方，从而使整个场景看起来更真实，更有模型感。
                show: false, // 是否显示地面。[ default: false ]
                color: '#aaa' // 地面颜色。[ default: '#aaa' ]
            },
            light: { // 光照相关的设置。在 shading 为 'color' 的时候无效。  光照的设置会影响到组件以及组件所在坐标系上的所有图表。合理的光照设置能够让整个场景的明暗变得更丰富，更有层次。
                main: { // 场景主光源的设置，在 globe 组件中就是太阳光。
                    color: '#fff', //主光源的颜色。[ default: #fff ] 
                    intensity: 1, //主光源的强度。[ default: 1 ]
                    shadow: false, //主光源是否投射阴影。默认关闭。    开启阴影可以给场景带来更真实和有层次的光照效果。但是同时也会增加程序的运行开销。
                    // shadowQuality: 'ultra',      // 阴影的质量。可选'low', 'medium', 'high', 'ultra' [ default: 'medium' ]
                    alpha: 55, // 主光源绕 x 轴，即上下旋转的角度。配合 beta 控制光源的方向。[ default: 40 ]
                    beta: 10 // 主光源绕 y 轴，即左右旋转的角度。[ default: 40 ]
                },
                ambient: { // 全局的环境光设置。
                    color: '#f6f6f6', // 环境光的颜色。[ default: #fff ]
                    intensity: 0.5 // 环境光的强度。[ default: 0.2 ]
                }
            },

            viewControl: { // 用于鼠标的旋转，缩放等视角控制。
                projection: 'perspective', // 投影方式，默认为透视投影'perspective'，也支持设置为正交投影'orthographic'。
                autoRotate: false, // 是否开启视角绕物体的自动旋转查看。[ default: false ] 
                autoRotateDirection: 'cw', // 物体自传的方向。默认是 'cw' 也就是从上往下看是顺时针方向，也可以取 'ccw'，既从上往下看为逆时针方向。
                autoRotateSpeed: 10, // 物体自传的速度。单位为角度 / 秒，默认为10 ，也就是36秒转一圈。
                autoRotateAfterStill: 3, // 在鼠标静止操作后恢复自动旋转的时间间隔。在开启 autoRotate 后有效。[ default: 3 ]
                damping: 0.9, // 鼠标进行旋转，缩放等操作时的迟滞因子，在大于等于 1 的时候鼠标在停止操作后，视角仍会因为一定的惯性继续运动（旋转和缩放）。[ default: 0.8 ]
                distance: 200, // [ default: 100 ] 默认视角距离主体的距离，对于 grid3D 和 geo3D 等其它组件来说是距离中心原点的距离,对于 globe 来说是距离地球表面的距离。在 projection 为'perspective'的时候有效。
                minDistance: 40, // [ default: 40 ] 视角通过鼠标控制能拉近到主体的最小距离。在 projection 为'perspective'的时候有效。
                maxDistance: 400, // [ default: 400 ] 视角通过鼠标控制能拉远到主体的最大距离。在 projection 为'perspective'的时候有效。
                alpha: 40, // 视角绕 x 轴，即上下旋转的角度。配合 beta 可以控制视角的方向。[ default: 40 ]
                beta: 15, // 视角绕 y 轴，即左右旋转的角度。[ default: 0 ]
                minAlpha: 20, // 上下旋转的最小 alpha 值。即视角能旋转到达最上面的角度。[ default: 5 ]
                maxAlpha: 160, // 上下旋转的最大 alpha 值。即视角能旋转到达最下面的角度。[ default: 90 ]
                minBeta: -360, // 左右旋转的最小 beta 值。即视角能旋转到达最左的角度。[ default: -80 ]
                maxBeta: 360, // 左右旋转的最大 beta 值。即视角能旋转到达最右的角度。[ default: 80 ]
                center: [0, 0, 0], // 视角中心点，旋转也会围绕这个中心点旋转，默认为[0,0,0]。
                animation: true, // 是否开启动画。[ default: true ]
                animationDurationUpdate: 1000, // 过渡动画的时长。[ default: 1000 ]
            },
            boxWidth: 150,
            boxHeight: 300,
            // regionHeight: 5,
            data: [{ // 可对单个地图区域进行设置
                name: '福田区', // 所对应的地图区域的名称
                value: [89.82],
            },
            { // 可对单个地图区域进行设置
                name: '罗湖区', // 所对应的地图区域的名称
                value: [34.05],
            }, { // 可对单个地图区域进行设置
                name: '盐田区', // 所对应的地图区域的名称
                value: [10.88],
            }, { // 可对单个地图区域进行设置
                name: '南山区', // 所对应的地图区域的名称
                value: [95.76],
            }, { // 可对单个地图区域进行设置
                name: '宝安区', // 所对应的地图区域的名称
                value: [75.16],
            }, { // 可对单个地图区域进行设置
                name: '龙岗区', // 所对应的地图区域的名称
                value: [43.42],
            }, { // 可对单个地图区域进行设置
                name: '龙华区', // 所对应的地图区域的名称
                value: [50.35],
            }, { // 可对单个地图区域进行设置
                name: '坪山区', // 所对应的地图区域的名称
                value: [0],
            }, { // 可对单个地图区域进行设置
                name: '光明区', // 所对应的地图区域的名称
                value: [11.72],
            }, { // 可对单个地图区域进行设置
                name: '大鹏新区', // 所对应的地图区域的名称
                value: [0],
            }]
        }]
    };
    myChart1.setOption(option1);

});


// 初始化图表	
var myChart2 = echarts.init(document.getElementById('3d_2'), null, { devicePixelRatio: 2.5 });
//  window.onresize = myChart2.resize;
// JSON文件(地图数据)路径
// var uploadedDataURL = "440300.json";

// var option = {};

// 显示加载动画效果,可以在加载数据前手动调用该接口显示加载动画，在数据加载完成后调用 hideLoading 隐藏加载动画。
myChart2.showLoading();

// 引入JSON文件
$.get(uploadedDataURL, function (geoJson) {

    // 注册地图名字(tongren)和数据(geoJson)
    echarts.registerMap('shenzhen', geoJson);

    // 隐藏动画加载效果。
    myChart2.hideLoading();

    // 图表配置项		
    option2 = {

        title: { // 标题
            top: '5%',
            text: '深铁各区站点数统计',
            subtext: '',
            x: 'center',
            textStyle: {
                color: '#2c2c2c'
            }
        },

        tooltip: { // 提示框
            trigger: 'item',
            formatter: function (params) {
                return params.name + '</br>' + "站点数:" + params.value
            }
        },
        visualMap: {
            min: 0,
            max: 75,
            text: ['75', '0'],
            orient: 'horizontal',
            itemWidth: 15,
            itemHeight: 120,
            right: 30,
            bottom: 30,
            inRange: {
                color: ['#c48fff', '#4b3664']
            },
            textStyle: {
                color: 'black'
            }
        },
        series: [{
            type: 'map3D', // 系列类型
            name: 'map3D', // 系列名称
            map: 'shenzhen', // 地图类型。echarts-gl 中使用的地图类型同 geo 组件相同(ECharts 中提供了两种格式的地图数据，一种是可以直接 script 标签引入的 js 文件，引入后会自动注册地图名字和数据。还有一种是 JSON 文件，需要通过 AJAX 异步加载后手动注册。)
            // 环境贴图，支持純颜色值，渐变色，全景贴图的 url。默认为 'auto'，在配置有 light.ambientCubemap.texture 的时候会使用该纹理作为环境贴图。否则则不显示环境贴图。
            environment: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ // 配置为垂直渐变的背景
                offset: 0,
                color: '#000000' // 天空颜色           
            }, {
                offset: 1,
                color: '#ffffff' // 地面颜色
            }, {
                offset: 0.5,
                color: '#ffffff' // 地面颜色
            }], false),

            label: { // 标签的相关设置
                show: true, // (地图上的城市名称)是否显示标签 [ default: false ]
                //distance: 50,               // 标签距离图形的距离，在三维的散点图中这个距离是屏幕空间的像素值，其它图中这个距离是相对的三维距离
                //formatter:,               // 标签内容格式器
                textStyle: { // 标签的字体样式
                    color: '#FFFFFF', // 地图初始化区域字体颜色
                    fontSize: 12, // 字体大小
                    opacity: 1, // 字体透明度
                    backgroundColor: 'rgba(0,23,11,0)' // 字体背景色
                },
            },

            itemStyle: { // 三维地理坐标系组件 中三维图形的视觉属性，包括颜色，透明度，描边等。
                areaColor: '#084D7F', // 地图板块的颜色
                opacity: 0.7, // 图形的不透明度 [ default: 1 ]
                borderWidth: 0.5, // (地图板块间的分隔线)图形描边的宽度。加上描边后可以更清晰的区分每个区域   [ default: 0 ]
                borderColor: '#ffffff' // 图形描边的颜色。[ default: #333 ]
            },

            emphasis: { // 鼠标 hover 高亮时图形和标签的样式 (当鼠标放上去时  label和itemStyle 的样式) 
                label: { // label高亮时的配置
                    show: true,
                    textStyle: {
                        color: '#FFFFFF', // 高亮时标签颜色变为 白色
                        fontSize: 15, // 高亮时标签字体 变大
                    }
                },
                itemStyle: { // itemStyle高亮时的配置
                    areaColor: '#4BC0F8', // 高亮时地图板块颜色改变
                }
            },

            groundPlane: { // 地面可以让整个组件有个“摆放”的地方，从而使整个场景看起来更真实，更有模型感。
                show: false, // 是否显示地面。[ default: false ]
                color: '#aaa' // 地面颜色。[ default: '#aaa' ]
            },
            light: { // 光照相关的设置。在 shading 为 'color' 的时候无效。  光照的设置会影响到组件以及组件所在坐标系上的所有图表。合理的光照设置能够让整个场景的明暗变得更丰富，更有层次。
                main: { // 场景主光源的设置，在 globe 组件中就是太阳光。
                    color: '#fff', //主光源的颜色。[ default: #fff ] 
                    intensity: 1, //主光源的强度。[ default: 1 ]
                    shadow: false, //主光源是否投射阴影。默认关闭。    开启阴影可以给场景带来更真实和有层次的光照效果。但是同时也会增加程序的运行开销。
                    //shadowQuality: 'high',      // 阴影的质量。可选'low', 'medium', 'high', 'ultra' [ default: 'medium' ]
                    alpha: 55, // 主光源绕 x 轴，即上下旋转的角度。配合 beta 控制光源的方向。[ default: 40 ]
                    beta: 10 // 主光源绕 y 轴，即左右旋转的角度。[ default: 40 ]
                },
                ambient: { // 全局的环境光设置。
                    color: '#f6f6f6', // 环境光的颜色。[ default: #fff ]
                    intensity: 0.5 // 环境光的强度。[ default: 0.2 ]
                }
            },

            viewControl: { // 用于鼠标的旋转，缩放等视角控制。
                projection: 'perspective', // 投影方式，默认为透视投影'perspective'，也支持设置为正交投影'orthographic'。
                autoRotate: false, // 是否开启视角绕物体的自动旋转查看。[ default: false ] 
                autoRotateDirection: 'cw', // 物体自传的方向。默认是 'cw' 也就是从上往下看是顺时针方向，也可以取 'ccw'，既从上往下看为逆时针方向。
                autoRotateSpeed: 10, // 物体自传的速度。单位为角度 / 秒，默认为10 ，也就是36秒转一圈。
                autoRotateAfterStill: 3, // 在鼠标静止操作后恢复自动旋转的时间间隔。在开启 autoRotate 后有效。[ default: 3 ]
                damping: 0.9, // 鼠标进行旋转，缩放等操作时的迟滞因子，在大于等于 1 的时候鼠标在停止操作后，视角仍会因为一定的惯性继续运动（旋转和缩放）。[ default: 0.8 ]
                distance: 200, // [ default: 100 ] 默认视角距离主体的距离，对于 grid3D 和 geo3D 等其它组件来说是距离中心原点的距离,对于 globe 来说是距离地球表面的距离。在 projection 为'perspective'的时候有效。
                minDistance: 40, // [ default: 40 ] 视角通过鼠标控制能拉近到主体的最小距离。在 projection 为'perspective'的时候有效。
                maxDistance: 400, // [ default: 400 ] 视角通过鼠标控制能拉远到主体的最大距离。在 projection 为'perspective'的时候有效。
                alpha: 40, // 视角绕 x 轴，即上下旋转的角度。配合 beta 可以控制视角的方向。[ default: 40 ]
                beta: 15, // 视角绕 y 轴，即左右旋转的角度。[ default: 0 ]
                minAlpha: 20, // 上下旋转的最小 alpha 值。即视角能旋转到达最上面的角度。[ default: 5 ]
                maxAlpha: 160, // 上下旋转的最大 alpha 值。即视角能旋转到达最下面的角度。[ default: 90 ]
                minBeta: -360, // 左右旋转的最小 beta 值。即视角能旋转到达最左的角度。[ default: -80 ]
                maxBeta: 360, // 左右旋转的最大 beta 值。即视角能旋转到达最右的角度。[ default: 80 ]
                center: [0, 0, 0], // 视角中心点，旋转也会围绕这个中心点旋转，默认为[0,0,0]。
                animation: true, // 是否开启动画。[ default: true ]
                animationDurationUpdate: 1000, // 过渡动画的时长。[ default: 1000 ]
            },
            boxWidth: 150,
            boxHeight: 300,
            // regionHeight: 5,
            data: [{ // 可对单个地图区域进行设置
                name: '福田区', // 所对应的地图区域的名称
                value: [73],
            },
            { // 可对单个地图区域进行设置
                name: '罗湖区', // 所对应的地图区域的名称
                value: [40],
            }, { // 可对单个地图区域进行设置
                name: '盐田区', // 所对应的地图区域的名称
                value: [5],
            }, { // 可对单个地图区域进行设置
                name: '南山区', // 所对应的地图区域的名称
                value: [60],
            }, { // 可对单个地图区域进行设置
                name: '宝安区', // 所对应的地图区域的名称
                value: [32],
            }, { // 可对单个地图区域进行设置
                name: '龙岗区', // 所对应的地图区域的名称
                value: [40],
            }, { // 可对单个地图区域进行设置
                name: '龙华区', // 所对应的地图区域的名称
                value: [24],
            }, { // 可对单个地图区域进行设置
                name: '坪山区', // 所对应的地图区域的名称
                value: [0],
            }, { // 可对单个地图区域进行设置
                name: '光明区', // 所对应的地图区域的名称
                value: [10],
            }, { // 可对单个地图区域进行设置
                name: '大鹏新区', // 所对应的地图区域的名称
                value: [0],
            }]
        }]
    };
    myChart2.setOption(option2);

});

// 初始化图表	
var myChart3 = echarts.init(document.getElementById('3d_3'), null, { devicePixelRatio: 2.5 });
//  window.onresize = myChart3.resize;
// JSON文件(地图数据)路径
// var uploadedDataURL = "440300.json";

// var option = {};

// 显示加载动画效果,可以在加载数据前手动调用该接口显示加载动画，在数据加载完成后调用 hideLoading 隐藏加载动画。
myChart3.showLoading();

// 引入JSON文件
$.get(uploadedDataURL, function (geoJson) {

    // 注册地图名字(tongren)和数据(geoJson)
    echarts.registerMap('shenzhen', geoJson);

    // 隐藏动画加载效果。
    myChart3.hideLoading();

    // 图表配置项		
    option3 = {

        title: { // 标题
            top: '5%',
            text: '深铁各区服务水平统计',
            subtext: '',
            x: 'center',
            textStyle: {
                color: '#2c2c2c'
            }
        },

        tooltip: { // 提示框
            trigger: 'item',
            formatter: function (params) {
                return params.name + '</br>' + "服务水平:" + params.value
            }
        },
        visualMap: {
            min: 0,
            max: 45,
            text: ['45', '0'],
            orient: 'horizontal',
            itemWidth: 15,
            itemHeight: 130,
            right: 30,
            bottom: 30,
            precision: 2,
            inRange: {
                color: ['#75ddff', '#0a1e2b']
            },
            textStyle: {
                color: 'black'
            }
        },
        series: [{
            type: 'map3D', // 系列类型
            name: 'map3D', // 系列名称
            map: 'shenzhen', // 地图类型。echarts-gl 中使用的地图类型同 geo 组件相同(ECharts 中提供了两种格式的地图数据，一种是可以直接 script 标签引入的 js 文件，引入后会自动注册地图名字和数据。还有一种是 JSON 文件，需要通过 AJAX 异步加载后手动注册。)
            // 环境贴图，支持純颜色值，渐变色，全景贴图的 url。默认为 'auto'，在配置有 light.ambientCubemap.texture 的时候会使用该纹理作为环境贴图。否则则不显示环境贴图。
            environment: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ // 配置为垂直渐变的背景
                offset: 0,
                color: '#000000' // 天空颜色           
            }, {
                offset: 1,
                color: '#ffffff' // 地面颜色
            }, {
                offset: 0.5,
                color: '#ffffff' // 地面颜色
            }], false),

            label: { // 标签的相关设置
                show: true, // (地图上的城市名称)是否显示标签 [ default: false ]
                //distance: 50,               // 标签距离图形的距离，在三维的散点图中这个距离是屏幕空间的像素值，其它图中这个距离是相对的三维距离
                //formatter:,               // 标签内容格式器
                textStyle: { // 标签的字体样式
                    color: '#FFFFFF', // 地图初始化区域字体颜色
                    fontSize: 12, // 字体大小
                    opacity: 1, // 字体透明度
                    backgroundColor: 'rgba(0,23,11,0)' // 字体背景色
                },
            },

            itemStyle: { // 三维地理坐标系组件 中三维图形的视觉属性，包括颜色，透明度，描边等。
                areaColor: '#084D7F', // 地图板块的颜色
                opacity: 0.7, // 图形的不透明度 [ default: 1 ]
                borderWidth: 0.5, // (地图板块间的分隔线)图形描边的宽度。加上描边后可以更清晰的区分每个区域   [ default: 0 ]
                borderColor: '#ffffff' // 图形描边的颜色。[ default: #333 ]
            },

            emphasis: { // 鼠标 hover 高亮时图形和标签的样式 (当鼠标放上去时  label和itemStyle 的样式) 
                label: { // label高亮时的配置
                    show: true,
                    textStyle: {
                        color: '#FFFFFF', // 高亮时标签颜色变为 白色
                        fontSize: 15, // 高亮时标签字体 变大
                    }
                },
                itemStyle: { // itemStyle高亮时的配置
                    areaColor: '#4BC0F8', // 高亮时地图板块颜色改变
                }
            },

            groundPlane: { // 地面可以让整个组件有个“摆放”的地方，从而使整个场景看起来更真实，更有模型感。
                show: false, // 是否显示地面。[ default: false ]
                color: '#aaa' // 地面颜色。[ default: '#aaa' ]
            },
            light: { // 光照相关的设置。在 shading 为 'color' 的时候无效。  光照的设置会影响到组件以及组件所在坐标系上的所有图表。合理的光照设置能够让整个场景的明暗变得更丰富，更有层次。
                main: { // 场景主光源的设置，在 globe 组件中就是太阳光。
                    color: '#fff', //主光源的颜色。[ default: #fff ] 
                    intensity: 1, //主光源的强度。[ default: 1 ]
                    shadow: false, //主光源是否投射阴影。默认关闭。    开启阴影可以给场景带来更真实和有层次的光照效果。但是同时也会增加程序的运行开销。
                    // shadowQuality: 'ultra',      // 阴影的质量。可选'low', 'medium', 'high', 'ultra' [ default: 'medium' ]
                    alpha: 55, // 主光源绕 x 轴，即上下旋转的角度。配合 beta 控制光源的方向。[ default: 40 ]
                    beta: 10 // 主光源绕 y 轴，即左右旋转的角度。[ default: 40 ]
                },
                ambient: { // 全局的环境光设置。
                    color: '#f6f6f6', // 环境光的颜色。[ default: #fff ]
                    intensity: 0.5 // 环境光的强度。[ default: 0.2 ]
                }
            },

            viewControl: { // 用于鼠标的旋转，缩放等视角控制。
                projection: 'perspective', // 投影方式，默认为透视投影'perspective'，也支持设置为正交投影'orthographic'。
                autoRotate: false, // 是否开启视角绕物体的自动旋转查看。[ default: false ] 
                autoRotateDirection: 'cw', // 物体自传的方向。默认是 'cw' 也就是从上往下看是顺时针方向，也可以取 'ccw'，既从上往下看为逆时针方向。
                autoRotateSpeed: 10, // 物体自传的速度。单位为角度 / 秒，默认为10 ，也就是36秒转一圈。
                autoRotateAfterStill: 3, // 在鼠标静止操作后恢复自动旋转的时间间隔。在开启 autoRotate 后有效。[ default: 3 ]
                damping: 0.9, // 鼠标进行旋转，缩放等操作时的迟滞因子，在大于等于 1 的时候鼠标在停止操作后，视角仍会因为一定的惯性继续运动（旋转和缩放）。[ default: 0.8 ]
                distance: 200, // [ default: 100 ] 默认视角距离主体的距离，对于 grid3D 和 geo3D 等其它组件来说是距离中心原点的距离,对于 globe 来说是距离地球表面的距离。在 projection 为'perspective'的时候有效。
                minDistance: 40, // [ default: 40 ] 视角通过鼠标控制能拉近到主体的最小距离。在 projection 为'perspective'的时候有效。
                maxDistance: 400, // [ default: 400 ] 视角通过鼠标控制能拉远到主体的最大距离。在 projection 为'perspective'的时候有效。
                alpha: 40, // 视角绕 x 轴，即上下旋转的角度。配合 beta 可以控制视角的方向。[ default: 40 ]
                beta: 15, // 视角绕 y 轴，即左右旋转的角度。[ default: 0 ]
                minAlpha: 20, // 上下旋转的最小 alpha 值。即视角能旋转到达最上面的角度。[ default: 5 ]
                maxAlpha: 160, // 上下旋转的最大 alpha 值。即视角能旋转到达最下面的角度。[ default: 90 ]
                minBeta: -360, // 左右旋转的最小 beta 值。即视角能旋转到达最左的角度。[ default: -80 ]
                maxBeta: 360, // 左右旋转的最大 beta 值。即视角能旋转到达最右的角度。[ default: 80 ]
                center: [0, 0, 0], // 视角中心点，旋转也会围绕这个中心点旋转，默认为[0,0,0]。
                animation: true, // 是否开启动画。[ default: true ]
                animationDurationUpdate: 1000, // 过渡动画的时长。[ default: 1000 ]
            },
            boxWidth: 150,
            boxHeight: 300,
            // regionHeight: 5,
            data: [
                { name: "罗湖区", value: [21.05053672] },
                { name: "福田区", value: [43.48823442] },
                { name: "南山区", value: [19.86745236] },
                { name: "龙华区", value: [19.08046742] },
                { name: "龙岗区", value: [5.792862668] },
                { name: "光明区", value: [4.129370973] },
                { name: "大鹏新区", value: [0] },
                { name: "盐田区", value: [4.537847369] },
                { name: "坪山区", value: [0] },
                { name: "宝安区", value: [5.295490939] }
            ],
        }]
    };
    myChart3.setOption(option3);
});
// 初始化图表	
var myChart4 = echarts.init(document.getElementById('3d_4'), null, { devicePixelRatio: 2.5 });
//  window.onresize = myChart4.resize;
// JSON文件(地图数据)路径
// var uploadedDataURL = "440300.json";

// var option = {};

// 显示加载动画效果,可以在加载数据前手动调用该接口显示加载动画，在数据加载完成后调用 hideLoading 隐藏加载动画。
myChart4.showLoading();

// 引入JSON文件
$.get(uploadedDataURL, function (geoJson) {

    // 注册地图名字(tongren)和数据(geoJson)
    echarts.registerMap('shenzhen', geoJson);

    // 隐藏动画加载效果。
    myChart4.hideLoading();

    // 图表配置项		
    option4 = {

        title: { // 标题
            top: '5%',
            text: '深圳各区GDP统计',
            subtext: '',
            x: 'center',
            textStyle: {
                color: '#2c2c2c'
            }
        },

        tooltip: { // 提示框
            trigger: 'item',
            formatter: function (params) {
                return params.name + '</br>' + "GDP(万元):" + params.value
            }
        },
        visualMap: {
            min: 0,
            max: 5200,
            text: ['5200', '0'],
            orient: 'horizontal',
            itemWidth: 15,
            itemHeight: 120,
            right: 30,
            bottom: 30,
            precision: 4,
            inRange: {
                color: ['#ffa0a0', '#650b22']
            },
            textStyle: {
                color: 'black'
            }
        },
        series: [{
            type: 'map3D', // 系列类型
            name: 'map3D', // 系列名称
            map: 'shenzhen', // 地图类型。echarts-gl 中使用的地图类型同 geo 组件相同(ECharts 中提供了两种格式的地图数据，一种是可以直接 script 标签引入的 js 文件，引入后会自动注册地图名字和数据。还有一种是 JSON 文件，需要通过 AJAX 异步加载后手动注册。)
            // 环境贴图，支持純颜色值，渐变色，全景贴图的 url。默认为 'auto'，在配置有 light.ambientCubemap.texture 的时候会使用该纹理作为环境贴图。否则则不显示环境贴图。
            environment: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ // 配置为垂直渐变的背景
                offset: 0,
                color: '#000000' // 天空颜色           
            }, {
                offset: 1,
                color: '#ffffff' // 地面颜色
            }, {
                offset: 0.5,
                color: '#ffffff' // 地面颜色
            }], false),

            label: { // 标签的相关设置
                show: true, // (地图上的城市名称)是否显示标签 [ default: false ]
                //distance: 50,               // 标签距离图形的距离，在三维的散点图中这个距离是屏幕空间的像素值，其它图中这个距离是相对的三维距离
                //formatter:,               // 标签内容格式器
                textStyle: { // 标签的字体样式
                    color: '#FFFFFF', // 地图初始化区域字体颜色
                    fontSize: 12, // 字体大小
                    opacity: 1, // 字体透明度
                    backgroundColor: 'rgba(0,23,11,0)' // 字体背景色
                },
            },

            itemStyle: { // 三维地理坐标系组件 中三维图形的视觉属性，包括颜色，透明度，描边等。
                areaColor: '#084D7F', // 地图板块的颜色
                opacity: 0.7, // 图形的不透明度 [ default: 1 ]
                borderWidth: 0.5, // (地图板块间的分隔线)图形描边的宽度。加上描边后可以更清晰的区分每个区域   [ default: 0 ]
                borderColor: '#ffffff' // 图形描边的颜色。[ default: #333 ]
            },

            emphasis: { // 鼠标 hover 高亮时图形和标签的样式 (当鼠标放上去时  label和itemStyle 的样式) 
                label: { // label高亮时的配置
                    show: true,
                    textStyle: {
                        color: '#FFFFFF', // 高亮时标签颜色变为 白色
                        fontSize: 15, // 高亮时标签字体 变大
                    }
                },
                itemStyle: { // itemStyle高亮时的配置
                    areaColor: '#4BC0F8', // 高亮时地图板块颜色改变
                }
            },

            groundPlane: { // 地面可以让整个组件有个“摆放”的地方，从而使整个场景看起来更真实，更有模型感。
                show: false, // 是否显示地面。[ default: false ]
                color: '#aaa' // 地面颜色。[ default: '#aaa' ]
            },
            light: { // 光照相关的设置。在 shading 为 'color' 的时候无效。  光照的设置会影响到组件以及组件所在坐标系上的所有图表。合理的光照设置能够让整个场景的明暗变得更丰富，更有层次。
                main: { // 场景主光源的设置，在 globe 组件中就是太阳光。
                    color: '#fff', //主光源的颜色。[ default: #fff ] 
                    intensity: 1, //主光源的强度。[ default: 1 ]
                    shadow: false, //主光源是否投射阴影。默认关闭。    开启阴影可以给场景带来更真实和有层次的光照效果。但是同时也会增加程序的运行开销。
                    // shadowQuality: 'ultra',      // 阴影的质量。可选'low', 'medium', 'high', 'ultra' [ default: 'medium' ]
                    alpha: 55, // 主光源绕 x 轴，即上下旋转的角度。配合 beta 控制光源的方向。[ default: 40 ]
                    beta: 10 // 主光源绕 y 轴，即左右旋转的角度。[ default: 40 ]
                },
                ambient: { // 全局的环境光设置。
                    color: '#f6f6f6', // 环境光的颜色。[ default: #fff ]
                    intensity: 0.5 // 环境光的强度。[ default: 0.2 ]
                }
            },

            viewControl: { // 用于鼠标的旋转，缩放等视角控制。
                projection: 'perspective', // 投影方式，默认为透视投影'perspective'，也支持设置为正交投影'orthographic'。
                autoRotate: false, // 是否开启视角绕物体的自动旋转查看。[ default: false ] 
                autoRotateDirection: 'cw', // 物体自传的方向。默认是 'cw' 也就是从上往下看是顺时针方向，也可以取 'ccw'，既从上往下看为逆时针方向。
                autoRotateSpeed: 10, // 物体自传的速度。单位为角度 / 秒，默认为10 ，也就是36秒转一圈。
                autoRotateAfterStill: 3, // 在鼠标静止操作后恢复自动旋转的时间间隔。在开启 autoRotate 后有效。[ default: 3 ]
                damping: 0.9, // 鼠标进行旋转，缩放等操作时的迟滞因子，在大于等于 1 的时候鼠标在停止操作后，视角仍会因为一定的惯性继续运动（旋转和缩放）。[ default: 0.8 ]
                distance: 200, // [ default: 100 ] 默认视角距离主体的距离，对于 grid3D 和 geo3D 等其它组件来说是距离中心原点的距离,对于 globe 来说是距离地球表面的距离。在 projection 为'perspective'的时候有效。
                minDistance: 40, // [ default: 40 ] 视角通过鼠标控制能拉近到主体的最小距离。在 projection 为'perspective'的时候有效。
                maxDistance: 400, // [ default: 400 ] 视角通过鼠标控制能拉远到主体的最大距离。在 projection 为'perspective'的时候有效。
                alpha: 40, // 视角绕 x 轴，即上下旋转的角度。配合 beta 可以控制视角的方向。[ default: 40 ]
                beta: 15, // 视角绕 y 轴，即左右旋转的角度。[ default: 0 ]
                minAlpha: 20, // 上下旋转的最小 alpha 值。即视角能旋转到达最上面的角度。[ default: 5 ]
                maxAlpha: 160, // 上下旋转的最大 alpha 值。即视角能旋转到达最下面的角度。[ default: 90 ]
                minBeta: -360, // 左右旋转的最小 beta 值。即视角能旋转到达最左的角度。[ default: -80 ]
                maxBeta: 360, // 左右旋转的最大 beta 值。即视角能旋转到达最右的角度。[ default: 80 ]
                center: [0, 0, 0], // 视角中心点，旋转也会围绕这个中心点旋转，默认为[0,0,0]。
                animation: true, // 是否开启动画。[ default: true ]
                animationDurationUpdate: 1000, // 过渡动画的时长。[ default: 1000 ]
            },
            boxWidth: 150,
            boxHeight: 300,
            // regionHeight: 5,
            data: [
                { name: "罗湖区", value: [2253.6945] },
                { name: "福田区", value: [4018.2592] },
                { name: "南山区", value: [5018.3646] },
                { name: "龙华区", value: [2401.8151] },
                { name: "龙岗区", value: [4287.8617] },
                { name: "光明区", value: [341.6572] },
                { name: "大鹏新区", value: [341.6572] },
                { name: "盐田区", value: [612.7631] },
                { name: "坪山区", value: [701.6584] },
                { name: "宝安区", value: [3612.1814] }
            ],
        }]
    };
    myChart4.setOption(option4);

});


window.addEventListener('resize', function () {
    myChart1.resize();
    myChart2.resize();
    myChart3.resize();
    myChart4.resize();
});