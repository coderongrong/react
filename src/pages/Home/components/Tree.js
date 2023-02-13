

import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Tree } from 'antd';
import { useEffect, useState } from 'react'
import { handleData } from '../../../utils/index'
import { getUseInfo, getTreeData  } from '../../../api/tree.js'


function TreeData(props) {
  const { callBack } = props
  const [treeData, setTreeData] = useState([])

  const login = async () => {
    const params = {
      "username": "jieyingjing",
      "password": "123456kkk",
      "captcha": "1",
      "remember_me": true,
      "loginType": "3"
    }
    const { result } = await getUseInfo(params)
    if (result.token) {
      // localStorage.setItem('usreToken', result.token)
      localStorage.setItem('usreToken', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NzY2NTkzMDAsInVzZXJuYW1lIjoiamlleWluZ2ppbmcifQ.wELjYcYgZS7spsmsvmmsZxNXSzppczEe1L25wtUiSvg')

    }
  }
  if (!localStorage.getItem('usreToken')) {
    login()
  }

  const _getTreeData = async () => {
    const params = {
      parentId: 0,
      type: 1,
      classType: 'Lamppost'
    }
    const { result } = await getTreeData(params)
    setTreeData(handleData(result))
  }
  useEffect(() => {
    _getTreeData()
  }, [])
  const onSelect = async (selectedKeys, info) => {
    // console.log('selected', selectedKeys, info);
    callBack(selectedKeys, info)
  };

  return (
    <Tree
      showLine
      switcherIcon={<DownOutlined />}
      defaultExpandedKeys={['0-0-0']}
      onSelect={onSelect}
      treeData={treeData}
    />
  );
};

export default TreeData;