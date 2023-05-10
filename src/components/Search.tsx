import React from "react";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);

const onSearch = (value: string) => console.log(value);

const Searchs = () => {
  return (
    <Space direction="vertical">
      <Search
        placeholder="Input search name"
        onSearch={onSearch}
        style={{ width: 300 }}
      />
    </Space>
  );
};

export default Searchs;
