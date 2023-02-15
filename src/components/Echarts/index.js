
import * as echarts from 'echarts';
import { useEffect } from 'react';

function Echart(props) {

    useEffect(() => {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        myChart.setOption({
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                top: '5%',
                left: 'center'
            },
            // xAxis: {
            //     data: [4,5,6,7]
            // },
            // yAxis: {
            //     data: [1,2,3,4]
            // },
            series: [
                {
                    type: props.type || 'pie',
                    name: '销量',
                    radius: '50%',
                    data: [{ value: 1048, name: 'Search Engine' },
                    { value: 735, name: 'Direct' },
                    { value: 580, name: 'Email' },
                    { value: 484, name: 'Union Ads' },
                    { value: 300, name: 'Video Ads' }]
                }
            ]
        });
    })


    return (
        <>
            <div id='main' style={{ width: '100%', height: '500px' }}></div>
        </>
    )
}


export default Echart