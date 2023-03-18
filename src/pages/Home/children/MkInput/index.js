import { Form, Input } from 'antd'
import { forwardRef, useEffect } from 'react'
import formData from './data'

const MkInput = (props, ref) => {
  const data = props.data || formData()
  const [form] = Form.useForm()
  useEffect(() => {
    // ref.current.setFieldsValue(props.stateValue)
    const res = data.reduce((pre, cur) => {
      console.log(cur.identification, cur.value)
      pre[cur.identification] = cur.value
      return pre
    }, {})
    ref.current.setFieldsValue(res)
  }, [])
  return (
    <>
      <Form ref={ref} form={form} style={{ maxWidth: 400 }}>
        {data.map((item, index) => {
          return (
            <Form.Item
              label={item.label || item.cnName}
              name={item.identification || item.value}
              key={index}
            >
              <Input />
            </Form.Item>
          )
        })}
      </Form>
    </>
  )
}

export default forwardRef(MkInput)
