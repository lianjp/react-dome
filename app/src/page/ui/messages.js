import React from "react";
import { Card, Button, message } from "antd";

import "./ui.less";

export default class Messages extends React.Component {

  openMesage = (type) => {
    message[type]('yahaha~~~')
  }

  render() {
    return (
      <div className="content">
        <Card title="message框" className="button-wrap">
          <Button type="primary" onClick={() => {this.openMesage('success')}}>Success</Button>
          <Button type="primary" onClick={() => {this.openMesage('info')}}>Info</Button>
          <Button type="primary" onClick={() => {this.openMesage('warning')}}>Warning</Button>
          <Button type="primary" onClick={() => {this.openMesage('error')}}>Error</Button>
          <Button type="primary" onClick={() => {this.openMesage('loading')}}>Loading</Button>
        </Card>
      </div>
    )
  }
}