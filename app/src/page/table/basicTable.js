import React from "react";
import { Card, Table, Modal, Button, message } from "antd";
import axios from "../../axios/index";

export default class Basictable extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const data = [
      {
        id: "0",
        userName: "foo",
        sex: "1",
        state: "1",
        interest: "1",
        birthday: "2000-01-01",
        address: "浙江省杭州市余杭区",
        time: "09:00",
      },
      {
        id: "1",
        userName: "bar",
        sex: "1",
        state: "1",
        interest: "1",
        birthday: "2000-01-01",
        address: "浙江省杭州市余杭区",
        time: "09:00",
      },
      {
        id: "2",
        userName: "baz",
        sex: "1",
        state: "1",
        interest: "1",
        birthday: "2000-01-01",
        address: "浙江省杭州市余杭区",
        time: "09:00",
      },
    ];
    data.map((item, index) => {
      item.key = index;
    });
    this.setState({
      dataSource: data,
    });
    this.request();
  }

  request = () => {
    axios
      .ajax({
        url: "/table/list",
        data: {
          params: {
            page: 1,
          },
        },
      })
      .then((res) => {
        console.log(res);
        if (res.code == 0) {
          res.result.list.map((item, index) => {
            item.key = index;
          });
          this.setState({
            dataSource2: res.result.list,
            selectedRowKeys: [],
            selectedRows: null
          });
        }
      });
  };

  onRowClick = (record, index) => {
    let selectKey = [index];
    Modal.info({
      title: "信息",
      content: `用户名: ${record.userName},用户爱好:${record.interest}`,
    });
    this.setState({
      selectedRowKeys: selectKey,
      selectedItem: record,
    });
  };

  //多选删除操作
  handleDelete = () => {
    let rows = this.state.selectedRows;
    let ids = []
    rows.map((item) => {
      ids.push(item.id)
    })
    Modal.confirm({
      title: '删除提示',
      content: `你确定删除这些数据吗？ ${ids.join(',')}`,
      onOk: () => {
        message.success('删除成功')
        this.request()
      }
    })
  }

  render() {
    const columns = [
      {
        title: "id",
        dataIndex: "id",
      },
      {
        title: "姓名",
        dataIndex: "userName",
      },
      {
        title: "性别",
        dataIndex: "sex",
        render(sex) {
          let config = {
            "1": "男",
            "2": "女",
          };
          return config[sex];
        },
      },
      {
        title: "状态",
        dataIndex: "state",
        render(state) {
          let config = {
            "1": "开心",
            "2": "难过",
            "3": "快乐",
            "4": "悲伤",
            "5": "喜悦",
          };
          return config[state];
        },
      },
      {
        title: "爱好",
        dataIndex: "interest",
        render(interest) {
          let config = {
            "1": "打篮球",
            "2": "打乒乓球",
            "3": "游泳",
            "4": "跑步",
            "5": "旅游",
            "6": "看电影",
            "7": "听音乐",
            "8": "爬山",
            "9": "打游戏",
          };
          return config[interest];
        },
      },
      {
        title: "生日",
        dataIndex: "address",
      },
      {
        title: "早起时间",
        dataIndex: "time",
      },
    ];

    const { selectedRowKeys } = this.state;
    const rowSelection = {
      type: "radio",
      selectedRowKeys,
    };
    const rowCheckSelection = {
      type: 'checkbox',
      selectedRowKeys,
      onChange: (selectedRowKeys, selectedRows) => {
        this.setState({
          selectedRowKeys,
          selectedRows
        })
      }
    }
    return (
      <div>
        <Card title="基础表格">
          <Table
            bordered
            pagination={false}
            dataSource={this.state.dataSource}
            columns={columns}
          ></Table>
        </Card>

        <Card title="动态数据渲染表格-Mock" style={{ margin: "10px 0" }}>
          <Table
            bordered
            pagination={false}
            dataSource={this.state.dataSource2}
            columns={columns}
          ></Table>
        </Card>

        <Card title="Mock-单选" style={{ margin: "10px 0" }}>
          <Table
            bordered
            rowSelection={rowSelection}
            onRow={(record, index) => {
              return {
                onClick: () => {
                  this.onRowClick(record, index);
                },
              };
            }}
            pagination={false}
            dataSource={this.state.dataSource2}
            columns={columns}
          ></Table>
        </Card>

        <Card title="Mock-多选" style={{ margin: "10px 0" }}>
          <div style={{marginBottom: 10}}>
            <Button type='parmay' onClick={this.handleDelete}>删除</Button>
          </div>
          <Table
            bordered
            rowSelection={rowCheckSelection}
            pagination={false}
            dataSource={this.state.dataSource2}
            columns={columns}
          ></Table>
        </Card>
      </div>
    );
  }
}
