
import { Button, Form, Input, Select } from 'antd';
import { useEffect, forwardRef } from 'react';
const { Option } = Select;
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const FormInput = forwardRef((props, ref) => {
    console.log(props)
    const { callBack, show } = props
    const [form] = Form.useForm();
    const onGenderChange = (value) => {
        switch (value) {
            case 'male':
                form.setFieldsValue({
                    note: 'Hi, man!',
                });
                break;
            case 'female':
                form.setFieldsValue({
                    note: 'Hi, lady!',
                });
                break;
            case 'other':
                form.setFieldsValue({
                    note: 'Hi there!',
                });
                break;
            default:
        }
    };
    const onFinish = (values) => {
        // console.log(values);
        callBack(values)
    };
    useEffect(() => {
        onFinish()
    }, [show])
    // const onFill = () => {
    //     form.setFieldsValue({ note: 'aaa', gender: 'xxx' });
    // };
    // const onReset = () => {
    //     form.resetFields();
    // };
    return (
        <Form
            ref={ref}
            {...layout}
            form={form}
            name="control-hooks"
            onFinish={onFinish}
            style={{
                maxWidth: 500,
            }}
        >
            <Form.Item
                name="note"
                label="Note"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="gender"
                label="Gender"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Select
                    placeholder="Select a option and change input text above"
                    onChange={onGenderChange}
                    allowClear
                >
                    <Option value="male">male</Option>
                    <Option value="female">female</Option>
                </Select>
            </Form.Item>
            <Form.Item {...tailLayout}>
                {/* <Button type="primary" htmlType="submit">
                    Submit
                </Button> */}
                {/* <Button htmlType="button" onClick={onReset}>
                    Reset
                </Button> */}
                {/* <Button type="link" htmlType="button" onClick={onFill}>
                    Fill form
                </Button> */}
            </Form.Item>
        </Form>
    )
})

export default FormInput