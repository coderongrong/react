import { Modal } from 'antd'
import react, { useEffect, useState } from 'react'
import MkInput from '../MkInput'
const App = (props) => {

    // console.log('modal', props)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const inp = react.useRef()

    useEffect(() => {
        setIsModalOpen(props.isOpen)
    }, [props.isOpen])

    const handleOk = () => {
        console.log('handleOk ---> ', inp.current.getFieldsValue())
        props.hidden(false)
    }
    const handleCancel = () => {
        props.hidden(false)
    }
    return (
        <>
            <Modal
                title="编辑"
                open={isModalOpen}
                onOk={() => handleOk()}
                onCancel={handleCancel}
            >
                <MkInput ref={inp} stateValue={{name: 'gentA', hobby: 'gamesB'}} />
            </Modal>
        </>
    )
}
export default App
