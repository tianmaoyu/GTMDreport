//数据查询按查询动作
$(function () {
    $("#data-Query").click(function () {

        //日期，ID等还不够严谨
        var regionRourceIndex = document.getElementById("select-region-1").options.selectedIndex;
        var dateRourceIndex = document.getElementById("select-data-1").options.selectedIndex;

        var regionRourceID = Number(regionRourceIndex);
        var dateRourceID = Number(dateRourceIndex) + 1;
        var isChecked = $("#chk").is(":checked");
        if (isChecked) {
            var regionTargetIndex = document.getElementById("select-region-2").options.selectedIndex;
            var dateTargetIndex = document.getElementById("select-data-2").options.selectedIndex;
            var regionTargetID = Number(regionTargetIndex);
            var dateTargetID = Number(dateTargetIndex) + 1;
            var isValidate = regionRourceID > 0 && dateRourceID > 0 && regionTargetID > 0 && dateTargetID > 0;
            if (isValidate) {
                showDataForRadar(dateRourceID, dateTargetID, regionRourceID, regionTargetID);
            }
        }
        else {
            if (regionRourceID > 0 && dateRourceID > 0) {
                showData2(dateRourceID, regionRourceID);
                showData3(dateRourceID, regionRourceID);
            }
        }
     
    });
});

//展示面第二图
   function showData2 (dInt, rID) {
    var mychar1 = echarts.init(document.getElementById("data-show-1"));
    mychar1.showLoading({
        text: "数据加载中......",
        textStyle : {
            fontSize : 20
        }
    });
    $.get("/api/IndustrycCassification/GetInfo", { dateInt: dInt, regionId: dInt },
        function (data) {
            mychar1.hideLoading();
            var info = $.parseJSON(data);
            var LegendData = info.LegendData
            var IndustrySalesOutput = info.IndustrySalesOutput
            var IndustryGrowthOutput = info.IndustryGrowthOutput
            var AssetsTotal = info.AssetsTotal
            var DebtTotal = info.DebtTotal
            var Income = info.Income
            var Stock = info.Stock

            //设置option
            var option = {
              
                tooltip: {
                    trigger: 'item'
                },
                toolbox: {
                    show: true,
                    y: 'bottom',
                    feature: {
                        mark: { show: true },
                        dataView: { show: true, readOnly: false },
                        magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
                        restore: { show: true },
                        saveAsImage: { show: true }
                    }
                },
                calculable: true,
                legend: {
                    data: ['工业销售产值', '工业增加值', '资产总值', '负责合计', '主营收入', '存货']
                },
                xAxis: [
                    {
                        type: 'category',
                        splitLine: { show: false },
                        data: LegendData
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        position: 'right'
                    }
                ],
                series: [
                    {
                        name: '工业销售产值',
                        type: 'bar',
                        data: IndustrySalesOutput,

                    },
                    {
                        name: '工业增加值',
                        type: 'bar',
                        tooltip: { trigger: 'axis' },
                        //stack: '广告',
                        data: IndustryGrowthOutput,
                    },
                    {
                        name: '资产总值',
                        type: 'line',
                        tooltip: { trigger: 'axis' },
                        //stack: '广告',
                        data: AssetsTotal
                    },
                    {
                        name: '负责合计',
                        type: 'bar',
                        tooltip: { trigger: 'axis' },
                        //stack: '广告',
                        data: DebtTotal
                    },
                    {
                        name: '主营收入',
                        type: 'bar',
                        tooltip: { trigger: 'axis' },
                        data: Income
                    },
                    {
                        name: '存货',
                        type: 'bar',
                        tooltip: { trigger: 'axis' },
                        //stack: '广告',
                        data: Stock
                    },

                    {
                        name: '工业销售产值',
                        type: 'pie',
                        tooltip: {
                            trigger: 'item',
                            formatter: '{a} <br/>{b} : {c} ({d}%)'
                        },
                        center: ["70%", 140],
                        radius: [0, 70],
                        itemStyle: {
                            normal: {
                                labelLine: {
                                    length: 20
                                }
                            }
                        },
                        data: [
                            { value: IndustrySalesOutput[0], name: '白酒' },
                            { value: IndustrySalesOutput[1], name: '化工' },
                            { value: IndustrySalesOutput[2], name: '有色' },
                            { value: IndustrySalesOutput[3], name: '冶金' },
                            { value: IndustrySalesOutput[4], name: '装备制造' },
                            { value: IndustrySalesOutput[5], name: '建材' },
                            { value: IndustrySalesOutput[6], name: '医药' },
                            { value: IndustrySalesOutput[7], name: '食品' },
                            { value: IndustrySalesOutput[8], name: '其他轻工业' },
                        ]
                    }
                ]
            };

            mychar1.setOption(option);
        });
   }

//展示首页的第三个图
   function showData3(dInt, rID) {
       var mychar1 = echarts.init(document.getElementById("data-show-2-1"));
       mychar1.showLoading();
       var mychar2 = echarts.init(document.getElementById("data-show-2-2"));
       mychar2.showLoading();
       $.get("/api/IndustrycCassification/GetInfoForRedView", { dateInt: dInt, regionId: rID },
               function (data) {
                   mychar1.hideLoading();
                   mychar2.hideLoading();
                   var infoData = data["白酒"].Data;
                   var infoRate = data["白酒"].Rate;
                   option1 = {
                       title: {
                           text: '规上民营部分数据',
                           left: 'center',
                           top: 20,
                           textStyle: {
                               color: "black"
                           }
                       },

                       tooltip: {
                           trigger: 'item',
                           formatter: "{a} <br/>{b} : {c} ({d}%)"
                       },

                       visualMap: {
                           show: false,
                           min: 80,
                           max: 6000000,
                           inRange: {
                               colorLightness: [0.5, 1]
                           }
                       },
                       series: [
                           {
                               name: '访问来源',
                               type: 'pie',
                               radius: '55%',
                               center: ['50%', '50%'],
                               data: [
                                  { value: infoData[0], name: '工业增加值' },
                                  { value: infoData[1], name: '资产总计' },
                                  { value: infoData[2], name: '负债合计' },
                                  { value: infoData[3], name: '主营收入' },
                                  { value: infoData[4], name: '存货总计' }
                               ].sort(function (a, b) { return a.value - b.value }),
                               //roseType: 'angle',
                               label: {
                                   normal: {
                                       textStyle: {
                                           color: 'balck'
                                       }
                                   }
                               },
                               labelLine: {
                                   normal: {
                                       lineStyle: {
                                           color: 'balck'
                                       },
                                       smooth: 0.2,
                                       length: 10,
                                       length2: 20
                                   }
                               },
                               itemStyle: {
                                   normal: {
                                       color: '#c23531',
                                       shadowBlur: 200,
                                       shadowColor: 'rgba(0, 0, 0, 0.5)'
                                   }
                               }
                           }
                       ]
                   };
                   mychar1.setOption(option1);
                 //左边的图
                   var optionshow2 = {
                       //backgroundColor: '#2c343c',
                       tooltip: {
                           show: true,
                           trigger: 'axis',
                           formatter: "{a} <br/>{b} : {c} ({d}%)",
                           axisPointer: {
                               type: 'shadow'
                           }
                       },
                       legend: {
                           //data: ['利润']
                       },
                       toolbox: {
                           show: true,
                           feature: {
                               mark: { show: true },
                               dataView: { show: true, readOnly: false },
                               magicType: { show: true, type: ['bar'] },
                               restore: { show: true },
                               saveAsImage: { show: true }
                           }
                       },
                       calculable: true,
                       xAxis: [

                           {
                               type: 'value',
                           }
                       ],
                       yAxis: [
                           {
                               name: '同期增长',
                               type: 'category',
                               axisTick: { show: false },
                               data: ['工业', '总计', '负债', '主营', '存货']

                           }
                       ],
                       series: [

                           {
                               trigger: 'axis',
                               name: '对应同期增长率',
                               type: 'bar',
                               //itemStyle: {
                               //    normal: { label: { show: true ,position:'top'} }
                               //},
                               data: [infoRate[0], infoRate[1], infoRate[2], infoRate[3], infoRate[4]]
                           }
                       ]
                   };
                   mychar2.setOption(optionshow2);
               });
   }


//雷达图展示
  function showDataForRadar(dateTarget,dateSource,regionTarget,regionSource) {
       var mycharRadar = echarts.init(document.getElementById("data-vs-1"));
       mycharRadar.showLoading();
       $.get("/api/IndustrycCassification/GetInfoForRadar", { dateIntTarget: dateTarget, dateIntSource: dateSource, regionIdTarget: regionTarget, regionIdSource: regionSource },
                   function (data) {
                       //for (item in data) { }//确定对象属性的名称
                       mycharRadar.hideLoading();
                       var targetData = data["白酒"]["Target"];
                       var sourceData = data["白酒"]["Source"];
                       var optionRadar = {
                           title: {
                               text: '基础雷达图'
                           },
                           tooltip: {},
                           legend: {
                               data: [targetData["Title"], sourceData["Title"]]
                           },
                           radar: {
                               indicator: [
                                   { name: '工业增加值', max: 795530 },
                                   { name: '资产总计', max: 2000000 },
                                   { name: '负债合计', max: 1489069 },
                                   { name: '主营业务收入', max: 276881 },
                                   { name: '存货', max: 1583410 },
                               ]
                           },
                           series: [
                               {
                                   name: targetData["Title"] + ' vs ' + sourceData["Title"],
                                   type: 'radar',
                                   data: [
                                       {
                                           value: targetData.Data,
                                           name: targetData["Title"]
                                       },
                                       {
                                           value: sourceData.Data,
                                           name: sourceData.Title
                                       }
                                   ]
                               }
                           ]
                       };
                       mycharRadar.setOption(optionRadar);
                   });

   }