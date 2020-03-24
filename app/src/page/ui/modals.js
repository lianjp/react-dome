import React from "react";
import { Card, Button, Modal } from "antd";

import "./ui.less";

export default class Modals extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal1: false,
      showModal2: false,
      showModal3: false,
      showModal4: false,
    }
  }

  hanleOpen = (type) => {
    this.setState({
      [type]: true
    })
  }

  hanleConfim = (type) => {
    Modal[type]({
      title: "你学会了吗？" + type,
      content: "你确定你学会了React了吗？" + type,
      onOk(){
        console.log('Ok')
      },
      onCancel(){
        console.log('Cancel')
      }
    })
  }

  render() {
    return (
      <div className="content">
        <Card title="基础模态框" className="button-wrap">
          <Button type="primary" onClick={() => this.hanleOpen('showModal1')}>Open</Button>
          <Button type="primary" onClick={() => this.hanleOpen('showModal2')}>自定义页脚</Button>
          <Button type="primary" onClick={() => this.hanleOpen('showModal3')}>顶部20px弹框</Button>
          <Button type="primary" onClick={() => this.hanleOpen('showModal4')}>水平垂直居中</Button>
        </Card>

        <Card title="信息确认框" className="button-wrap">
          <Button type="primary" onClick={() => this.hanleConfim('confirm')}>Confirm</Button>
          <Button type="primary" onClick={() => this.hanleConfim('info')}>Info</Button>
          <Button type="primary" onClick={() => this.hanleConfim('success')}>Success</Button>
          <Button type="primary" onClick={() => this.hanleConfim('error')}>Error</Button>
          <Button type="primary" onClick={() => this.hanleConfim('warning')}>Warning</Button>
        </Card>

        <Modal
          title="React"
          visible={this.state.showModal1}
          onCancel={() => {
            this.setState({
              showModal1: false
            })
          }}
        >
          <p>欢迎学习react，yahaha1~~~</p>
        </Modal>

        <Modal
          title="React"
          visible={this.state.showModal2}
          okText="好的"
          cancelText="算了"
          onCancel={() => {
            this.setState({
              showModal2: false
            })
          }}
        >
          <p>欢迎学习react，yahaha2~~~</p>
        </Modal>

        <Modal
          title="React"
          style={{top: 20}}
          visible={this.state.showModal3}
          onCancel={() => {
            this.setState({
              showModal3: false
            })
          }}
        >
          <p>欢迎学习react，yahaha3~~~</p>
        </Modal>

        <Modal
          title="React"
          wrapClassName="vertical-center-modal"
          visible={this.state.showModal4}
          onCancel={() => {
            this.setState({
              showModal4: false
            })
          }}
        >
          <p>欢迎学习react，yahaha4~~~</p>
        </Modal>
      </div>
    );
  }
}
