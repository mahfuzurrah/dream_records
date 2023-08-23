import React from 'react';
import { Button, Popover, Space } from 'antd';
import { BsInfoLg } from 'react-icons/bs';

const content = (
  <div>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam minus laborum fugiat</p>
  </div>
);

const AntPopover = () => (
  <Space wrap>
    <Popover content={content} title="Title" trigger="click" >
      <Button className='popover_btn'><BsInfoLg className='icons'/></Button>
    </Popover>
  </Space>
);

export default AntPopover