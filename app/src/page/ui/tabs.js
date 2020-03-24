import React from "react";
import { Card, Tabs, message, Icon } from "antd";

import "./ui.less";

const { TabPane } = Tabs;

export default class Tabspage extends React.Component {
  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    this.state = {};
  }

  componentWillMount() {
    let panes = [
      {
        title: "Tab 1",
        content: "Tab 1",
        key: "1"
      },
      {
        title: "Tab 2",
        content: "Tab 2",
        key: "2"
      },
      {
        title: "Tab 3",
        content: "Tab 3",
        key: "3"
      }
    ];
    this.setState({
      panes,
      activeKey: panes[0].key
    });
  }

  handelChange = key => {
    message.success("这是" + key + "页面");
  };

  onChange = activeKey => {
    this.setState({ activeKey });
  };

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };

  add = () => {
    const { panes } = this.state;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({
      title: "New Tab",
      content: "Content of new Tab",
      key: activeKey
    });
    this.setState({ panes, activeKey });
  };

  remove = targetKey => {
    let { activeKey } = this.state;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    this.setState({ panes, activeKey });
  };

  render() {
    return (
      <div className="content">
        <Card title="tabs页签" className="button-wrap">
          <Tabs defaultActiveKey="1" onChange={this.handelChange}>
            <TabPane tab="Tab 1" key="1">
              yahaha
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              foo
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              bar
            </TabPane>
          </Tabs>
        </Card>

        <Card title="tabs图标页签" className="button-wrap">
          <Tabs defaultActiveKey="1" onChange={this.handelChange}>
            <TabPane
              tab={
                <span>
                  <Icon type="plus" />
                  tab 1
                </span>
              }
              key="1"
            >
              yahaha
            </TabPane>
            <TabPane
              tab={
                <span>
                  <Icon type="edit" />
                  tab 2
                </span>
              }
              key="2"
            >
              foo
            </TabPane>
            <TabPane
              tab={
                <span>
                  <Icon type="delete" />
                  tab 2
                </span>
              }
              key="3"
            >
              bar
            </TabPane>
          </Tabs>
        </Card>
        <Card title="tabs页签高级用法" className="button-wrap">
          <Tabs
            activeKey={this.state.activeKey}
            onChange={this.onChange}
            type="editable-card"
            onEdit={this.onEdit}
          >
            {this.state.panes.map(pane => (
              <TabPane tab={pane.title} key={pane.key}>
                {pane.content}
              </TabPane>
            ))}
          </Tabs>
        </Card>
      </div>
    );
  }
}
