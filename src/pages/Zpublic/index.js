import {
    Card,
    Breadcrumb,
    Form,
    Button,
    Radio,
    Input,
    Upload,
    Space,
    Select,
    message
} from 'antd'
import { PlusOutlined } from '@ant-design/icons'

import { useStore } from '@/store'
import { useState, useRef } from 'react'

const { Option } = Select

function Zpublic() {

    const { channelStore } = useStore()
    const cacheImgList = useRef([])
    const [form] = Form.useForm()
    const arrList = ['单图', '三图', '无图']
    const [imgCount, setImageCount] = useState(1)
    const [fileList, setFileList] = useState([])
    const onUploadChange = ({ fileList }) => {
        console.log('onUploadChange')
        // 同时把图片列表存入仓库一份
        // 这里关键位置:需要做数据格式化
        const formatList = fileList.map(file => {
            // 上传完毕 做数据处理
            if (file.response) {
                return {
                    url: file.response.data.url
                }
            }
            // 否则在上传中时，不做处理
            return file
        })
        setFileList(formatList)
        cacheImgList.current = formatList
    }
    const onFinish = values => {
        console.log('xxxx', values)
    }
    const radioChange = () => {
        console.log('radioChange')
    }
    return (
        <div className="site-card-border-less-wrapper">
            <Card title="新发布文章" bordered={false} style={{ width: '100%' }}>
                <Form
                    name="wrap"
                    labelCol={{ flex: '110px' }}
                    labelAlign="left"
                    labelWrap
                    wrapperCol={{ flex: 1 }}
                    colon={false}
                    onFinish={onFinish}
                    form={form}
                >
                    <Form.Item label="标题：" name="username" rules={[{ required: true, message: '请选择文章标题' }]}>
                        <Input style={{ width: 400 }} />
                    </Form.Item>

                    <Form.Item label="频道：" name="password" rules={[{ required: true, message: '请选择文章频道' }]}>
                        <Select placeholder="请选择文章频道" style={{ width: 400 }}>
                            {channelStore.channelList.map(item => (
                                <Option key={item.id} value={item.id}>{item.name}</Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item label="封面：" style={{ width: 400 }} name="picture" rules={[{ required: true }]}>
                        <Radio.Group onChange={radioChange}>
                            {
                                arrList.map((item, index) => <Radio key={index} value={index}>{item}</Radio>)
                            }
                        </Radio.Group>
                        {imgCount > 0 && (
                            <Upload
                                name="image"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList
                                action="http://geek.itheima.net/v1_0/upload"
                                fileList={fileList}
                                onChange={onUploadChange}
                                multiple={imgCount > 1}
                                maxCount={imgCount}
                            >
                                <div style={{ marginTop: 8 }}>
                                    <PlusOutlined />
                                </div>
                            </Upload>
                        )}
                    </Form.Item>

                    <Form.Item label=" ">
                        <Button type="primary" htmlType="submit">
                            发布文章
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div >
    )
}

export default Zpublic