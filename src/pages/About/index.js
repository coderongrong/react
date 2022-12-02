
import Bar from '@/pages/About/components/charts'
function About() {
    return (
        <div>
            About...
            <Bar
                title='主流框架满意度'
                xData={['react', 'vue', 'angular']}
                yData={[30, 40, 50]}
                type={'line'}
                style={{ width: '500px', height: '400px' }} />
            <Bar
                title='主流框架满意度'
                xData={['react', 'vue', 'angular']}
                yData={[80, 90, 100]}
                type={'bar'}
                style={{ width: '500px', height: '400px' }} />
        </div>
    )
}

export default About