import { Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import FormInput from './FormInput';
const ModalInput =(props) => {
    const { show, callback } = props
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [title, setTitle] = useState('新增分类');
    const searchRef = React.useRef()
    const handleOk = () => {
        console.log('defer', searchRef.current.getFieldsValue())
    };
    const handleCancel = () => {
        setIsModalOpen(false);
        callback(false)
        searchRef.current.resetFields()
    };
    useEffect(() => {
        setIsModalOpen(show)
    }, [show])
    return (
        <>
            <Modal title={title} open={isModalOpen} onOk={() => handleOk('abc')} onCancel={handleCancel}>
                <FormInput callBack={handleOk} show={show} ref={searchRef} />
            </Modal>
        </>
    );
};

export default ModalInput;