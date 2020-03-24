import React from "react";
import { Card, Button, Radio } from "antd";

import "./ui.less";

export default class Buttons extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      size: 'middle',
    }
  }

  handleCloseLoading = () => {
    this.setState({
      loading: !this.state.loading
    })
  }

  handleChange = (e) => {
    this.setState({
      size: e.target.value
    })
  }

  render() {
    return (
      <div className="content">
        <Card title="基础按钮" className="button-wrap">
          <Button type="primary">yahaha</Button>
          <Button>yahaha</Button>
          <Button type="dashed">yahaha</Button>
          <Button type="danger">yahaha</Button>
          <Button disabled>yahaha</Button>
        </Card>

        <Card title="图形按钮" className="button-wrap">
          <Button icon="plus">创建</Button>
          <Button icon="edit">编辑</Button>
          <Button icon="delete">删除</Button>
          <Button icon="search" shape="circle"></Button>
          <Button type="primary" icon="search">
            搜索
          </Button>
          <Button type="primary" icon="download">
            下载
          </Button>
        </Card>

        <Card title="Loading按钮" className="button-wrap">
          <Button type="primary" loading={this.state.loading}>确定</Button>
          <Button type="primary" loading={this.state.loading} shape="circle"></Button>
          <Button loading={this.state.loading}>点击加载</Button>
          <Button loading={this.state.loading} shape="circle"></Button>
          <Button onClick={this.handleCloseLoading}>打开/关闭</Button>
        </Card>

        <Card title="按钮组" className="button-wrap">
          <Button.Group>
            <Button type="primary" icon="left" style={{marginRight: 0}}>后退</Button>
            <Button type="primary" icon="right">前进</Button>
          </Button.Group>
        </Card>

        <Card title="按钮尺寸" className="button-wrap">
          <Radio.Group value={this.state.size} onChange={this.handleChange}>
            <Radio value="small">小</Radio>
            <Radio value="middle">中</Radio>
            <Radio value="large">大</Radio>
          </Radio.Group>

          <Button type="primary" size={this.state.size}>yahaha</Button>
          <Button size={this.state.size}>yahaha</Button>
          <Button type="dashed" size={this.state.size}>yahaha</Button>
          <Button type="danger" size={this.state.size}>yahaha</Button>
        </Card>


      </div>
    );
  }
}
