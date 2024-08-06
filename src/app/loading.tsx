import React from "react";
import { Space, Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';

const Loading = async () => {

    await new Promise((item) => setTimeout(() => item, 5000));

    return (
        <Space>
            <Spin indicator={<LoadingOutlined spin />} />
        </Space>
    )
}

export default Loading;