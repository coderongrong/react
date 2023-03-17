import { Form, Input } from 'antd'
import { forwardRef, useEffect } from 'react'

const MkInput = (props, ref) => {
  const [form] = Form.useForm()
  useEffect(() => {
    // console.log(props.stateValue)
    console.log(ref.current.setFieldsValue(props.stateValue))
  }, [])
  return (
    <>
      <Form ref={ref} form={form} style={{ maxWidth: 400 }}>
        <Form.Item label="Field A" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="Field B" name="hobby">
          <Input />
        </Form.Item>
      </Form>
    </>
  )
}

export default forwardRef(MkInput)
