import React from "react";
import { Card, Spin, Alert, Icon } from "antd";
import "./ui.less";

export default class Loading extends React.Component {
  render() {
    const icon = <Icon  type="loading" style={{fontSize:24}}/>
    const iconLoading = <Icon type="loading" style={{ fontSize: 24 }} />
    return (
      <div className="content">
        <Card title="Spin的用法" className="button-wrap">
          <Spin size="small" />
          <Spin style={{ margin: "0 10px" }} />
          <Spin size="large" />
          <Spin indicator={icon} />
        </Card>

        <Card title="内容遮罩" className="button-wrap">
          <Alert
            message="React"
            description="欢迎来到yahaha1"
            type="info"
            className="alert-wrap"
          ></Alert>

          <Spin>
            <Alert
              message="React"
              description="欢迎来到yahaha2"
              type="success"
              className="alert-wrap"
            ></Alert>
          </Spin>

          <Spin tip="加载中...">
            <Alert
              message="React"
              description="欢迎来到yahaha2"
              type="warning"
              className="alert-wrap"
            ></Alert>
          </Spin>

          <Spin tip="加载中..." indicator={iconLoading}>
            <Alert
              message="React"
              description="欢迎来到yahaha2"
              type="error"
              className="alert-wrap"
            ></Alert>
          </Spin>
        </Card>
      </div>
    );
  }
}
