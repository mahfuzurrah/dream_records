import { UploadOutlined } from "@ant-design/icons";
import { Upload } from "antd";
import { useState } from "react";
const UploadButton = () => {
  const [fileList, setFileList] = useState([
    // {
    //   uid: '-1',
    //   name: 'xxx.png',
    //   status: 'done',
    //   url: 'http://www.baidu.com/xxx.png',
    // },
  ]);
  const handleChange = (info) => {
    let newFileList = [...info.fileList];

    // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    newFileList = newFileList.slice(-2);

    // 2. Read from response and show file link
    newFileList = newFileList.map((file) => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }
      return file;
    });
    setFileList(newFileList);
  };
  const props = {
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange: handleChange,
    multiple: true,
  };
  return (
    <Upload {...props} fileList={fileList}>
      <button className="btn_s">
        <UploadOutlined className="icons" />
        Upload
      </button>
    </Upload>
  );
};

export default UploadButton;
