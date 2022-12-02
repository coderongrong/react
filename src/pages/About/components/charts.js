import * as echarts from 'echarts'

import { useEffect, useRef } from 'react'

function Bar({style, xData, title, yData, type}) {
    const domRef = useRef();
    const init = () => {
        const myChart = echarts.init(domRef.current)
        myChart.setOption({
            title: {
                text: title
            },
            tooltip: {},
            xAxis: {
                data: xData
            },
            yAxis: {},
            series: [
                {
                    name: '销量',
                    type: type,
                    data: yData
                }
            ]
        })
    }

    useEffect(() => {
        init()
    })

    return (
        <div>
            <div ref={ domRef } style={ style }></div>
        </div>
    )
}

export default Bar