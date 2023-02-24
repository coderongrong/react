import { Button, Input, Select } from 'antd'
import { EyeTwoTone, SearchOutlined, UndoOutlined } from '@ant-design/icons'
import { useContext } from 'react'
import ThemeContext from '../../../useContext'

function TabBar(props) {
    let count = useContext(ThemeContext)
    // console.log(props)
    return (
        <div>
            <Button type="primary" className="mr-10">
                上传产品
            </Button>
            <Button type="primary" className="mr-10">
                修改
            </Button>
            <Input
                placeholder="请输入产品名称"
                style={{ width: 200 }}
                className="mr-10"
                iconrender={<EyeTwoTone />}
            />
            <Select
                defaultValue=""
                placeholder="请选择筛选条件"
                style={{ width: 200 }}
                allowClear
                className="mr-10"
                options={[
                    {
                        value: '1',
                        label: '私有',
                    },
                    {
                        value: '2',
                        label: '公开',
                    },
                    {
                        value: '3',
                        label: '审核中',
                    },
                    {
                        value: '4',
                        label: '审核未通过',
                    },
                    {
                        value: '5',
                        label: '审核通过',
                    },
                ]}
            />
            <Button type="primary" className="mr-10" icon={<SearchOutlined />}>
                查询
            </Button>
            <Button type="primary" className="mr-10" icon={<UndoOutlined />}>
                重置
            </Button>
            <span> {count} </span>
            <button onClick={() => props.onhandle(count + 100)}>
                onhandle
            </button>
        </div>
    )
}

export default TabBar
