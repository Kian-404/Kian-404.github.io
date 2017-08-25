$(document).ready(function(){
    var url = 'http://wthrcdn.etouch.cn/weather_mini?city=南阳';
    var date=[];//时间数组
    var high=[];//最高温度
    var low=[];//最低温度
    var type=[];//天气状况
    $.getJSON(url, function(data) {
        
        //数据正常返回
         // return responseJSON.data;
         console.log(data.data);
         console.log(data.data.forecast.length);
         for(var i=0; i<data.data.forecast.length; i++){
            date.push(data.data.forecast[i].date);
            high.push(data.data.forecast[i].high.substring(3));
            low.push(data.data.forecast[i].low.substring(3));
            type.push(data.data.forecast[i].type);
          $("#date"+i).text(date[i]);
          $("#type"+i).text(type[i]+" ");
          $("#high"+i).text(high[i]);
          $("#low"+i).text(low[i]);
         }
         var ganmao=data.data.ganmao;
         $("#ganmao").text(ganmao);
         console.log(high);

    var week=[];
    var temphigh=[];
    var templow=[];
    for(var i=0; i<date.length; i++){
      week.push(date[i].substring(3));
      temphigh.push(high[i].substring(0,2));
      templow.push(low[i].substring(0,2));
    }  
    console.log(week); 
    var myChart = echarts.init(document.getElementById('main'));  
    var option = {
    title: {
        text: '一周之内',
        subtext: '天气变化'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['最高气温','最低气温']
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        data: week
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} °C'
        }
    },
    series: [
        {
            name:'最高气温',
            type:'line',
            data:temphigh,
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'最低气温',
            type:'line',
            data:templow,
            markPoint: {
                data: [
                    {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'},
                    [{
                        symbol: 'none',
                        x: '90%',
                        yAxis: 'max'
                    }, {
                        symbol: 'circle',
                        label: {
                            normal: {
                                position: 'start',
                                formatter: '最大值'
                            }
                        },
                        type: 'max',
                        name: '最高点'
                    }]
                ]
            }
        }
    ]
};

myChart.setOption(option); 
    });

  });