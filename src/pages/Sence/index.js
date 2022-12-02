import { Progress, Tree } from 'antd';
import { DownOutlined } from '@ant-design/icons';
// import type { DataNode, TreeProps } from 'antd/es/tree';

import './index.scss'

const Sence = () => {
    const onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    };
    const treeData = [
        {
            title: 'parent 1',
            key: '0-0',
            children: [
                {
                    title: 'parent 1-0',
                    key: '0-0-0',
                    children: [
                        {
                            title: 'leaf',
                            key: '0-0-0-0',
                        },
                        {
                            title: 'leaf',
                            key: '0-0-0-1',
                        },
                        {
                            title: 'leaf',
                            key: '0-0-0-2',
                        },
                    ],
                },
                {
                    title: 'parent 1-1',
                    key: '0-0-1',
                    children: [
                        {
                            title: 'leaf',
                            key: '0-0-1-0',
                        },
                    ],
                },
                {
                    title: 'parent 1-2',
                    key: '0-0-2',
                    children: [
                        {
                            title: 'leaf',
                            key: '0-0-2-0',
                        },
                        {
                            title: 'leaf',
                            key: '0-0-2-1',
                        },
                    ],
                },
            ],
        },
    ]

    return (
        <>
            <div className='flex'>
                <Progress type="circle" percent={80} />
                <Progress type="circle" percent={40} />
            </div>
            <Tree
                showLine
                switcherIcon={<DownOutlined />}
                defaultExpandedKeys={['0-0-0']}
                onSelect={onSelect}
                treeData={treeData}
            />
        </>
    )
}

export default Sence