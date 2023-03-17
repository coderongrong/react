import { Form, Input } from 'antd'
import { forwardRef, useEffect } from 'react'
import formData from './data'

const MkInput = (props, ref) => {
  const data = formData()
  const [form] = Form.useForm()
  useEffect(() => {
    
    console.log(data)
    // console.log(ref.current.setFieldsValue(props.stateValue))
  }, [])
  return (
    <>
      <Form ref={ref} form={form} style={{ maxWidth: 400 }}>
        {data.map((item, index) => {
          return (
            <Form.Item label={item.label} name={item.name} key={index}>
              <Input />
            </Form.Item>
          )
        })}
      </Form>
    </>
  )
}

export default forwardRef(MkInput)
