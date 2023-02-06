import { useState, useEffect } from 'react';
import { Modal } from 'antd';

const ModalInput = (props) => {
    console.log(props)
    const { show, callback } = props
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [title, setTltle] = useState('新增分类')

    const handleOk = () => {
        setIsModalOpen(false);
        callback(false)
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        callback(false)
    };
    useEffect(() => {
        setIsModalOpen(show)
    }, [show])
    return (
        <>
            <Modal title={title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    );
};

export default ModalInput;