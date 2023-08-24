import React from 'react';
import { Button, Popover, Space } from 'antd';
import { TbInfoTriangleFilled } from 'react-icons/tb';

const content = (
  <div>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam minus laborum fugiat</p>
  </div>
);

const FailedPopover  = () => (
  <Space wrap>
    <Popover content={content} title="Title" trigger="click" >
      <Button className='f_popover_btn'><TbInfoTriangleFilled className='icons'/></Button>
    </Popover>
  </Space>
);

export default FailedPopover 