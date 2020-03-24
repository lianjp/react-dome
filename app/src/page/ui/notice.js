import React from "react";
import { Card, Button, notification } from "antd";

import "./ui.less";

export default class Notice extends React.Component {

  openNotification = (type, dirction) => {
    if(dirction) {
      notification.config({
        placement: dirction
      })
    }

    notification[type]({
      message: "yahaha",
      description: "我爱学习啊~~~~",
    })
  }

  render() {
    return (
      <div className="content">
        <Card title="消息提醒框" className="button-wrap">
          <Button type="primary" onClick={() => {this.openNotification('success')}}>Success</Button>
          <Button type="primary" onClick={() => {this.openNotification('info')}}>Info</Button>
          <Button type="primary" onClick={() => {this.openNotification('warning')}}>Warning</Button>
          <Button type="primary" onClick={() => {this.openNotification('error')}}>Error</Button>
        </Card>

        <Card title="消息提醒框" className="button-wrap">
          <Button type="primary" onClick={() => {this.openNotification('success', 'topLeft')}}>Success</Button>
          <Button type="primary" onClick={() => {this.openNotification('info', 'topRight')}}>Info</Button>
          <Button type="primary" onClick={() => {this.openNotification('warning', 'bottomLeft')}}>Warning</Button>
          <Button type="primary" onClick={() => {this.openNotification('error', 'bottomRight')}}>Error</Button>
        </Card>
      </div>
    )
  }
}