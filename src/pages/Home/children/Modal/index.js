import { Modal } from 'antd';
import { useEffect, useState } from 'react';
const App = (props) => {
    console.log(props)
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(props.isOpen)
  }, [props.isOpen])
  const handleOk = () => {
    props.hidden(false)
  };
  const handleCancel = () => {
    props.hidden(false)
  };
  return (
    <>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
export default App;