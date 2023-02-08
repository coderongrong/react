
import { Table } from 'antd';
import { useState, useEffect } from 'react';
import { getqueryList } from '@/api/tree'

const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    });
}
function TableInfo() {
    const [show, setShow] = useState(false)
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [_data, setData] = useState(data)
    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
        // selections: [
        //     Table.SELECTION_ALL,
        //     Table.SELECTION_INVERT,
        //     Table.SELECTION_NONE,
        //     {
        //         key: 'odd',
        //         text: 'Select Odd Row',
        //         onSelect: (changableRowKeys) => {
        //             let newSelectedRowKeys = [];
        //             newSelectedRowKeys = changableRowKeys.filter((_, index) => {
        //                 if (index % 2 !== 0) {
        //                     return false;
        //                 }
        //                 return true;
        //             });
        //             setSelectedRowKeys(newSelectedRowKeys);
        //         },
        //     },
        //     {
        //         key: 'even',
        //         text: 'Select Even Row',
        //         onSelect: (changableRowKeys) => {
        //             let newSelectedRowKeys = [];
        //             newSelectedRowKeys = changableRowKeys.filter((_, index) => {
        //                 if (index % 2 !== 0) {
        //                     return true;
        //                 }
        //                 return false;
        //             });
        //             setSelectedRowKeys(newSelectedRowKeys);
        //         },
        //     },
        // ],
    };
    const handleEdit = (data) => {
        // console.log(data)  //操作事件
    }
    const columns = [
        {
            title: '名称',
            dataIndex: 'name',
        },
        {
            title: '编号',
            dataIndex: 'number',
        },
        {
            title: '关联数值',
            dataIndex: 'relationName',
        },
        {
            title: '费用类型',
            dataIndex: 'specifyScale',
        },
        {
            title: '创建人',
            dataIndex: 'createBy',
        },
        {
            title: '创建时间',
            dataIndex: 'createTime',
        },
        {
            title: '操作',
            dataIndex: 'action',
            render: (_, record, index) => {
                return (
                    <div>
                        <a className='mr-10' onClick={() => { handleEdit(record) }}>编辑</a>
                        <a className='mr-10'>删除</a>
                        <a>详情</a>
                    </div>
                )
            }
        },
    ];
    const _getqueryList = async () => {
        const params = {
            pageSize: 10,
            pageNo: 1,
            order: 'desc'
        }
        const { result } = await getqueryList(params)
        setData(result.records.map((item, index) => {
            return {
                ...item,
                key: index
            }
        }))
    }
    useEffect(() => {
        _getqueryList()
    }, [])
    return <Table rowSelection={rowSelection} columns={columns} dataSource={_data} />
}

export default TableInfo