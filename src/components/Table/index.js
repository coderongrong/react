import {Table} from 'antd'

const App = (props) => {

    return <Table columns={props.columns} dataSource={props.data} />
}
export default App;