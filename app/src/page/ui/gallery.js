import React from "react";
import { Row, Col, Card, Modal } from "antd";

import "./ui.less";

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  openImg = item => {
    this.setState({
      showModal: true,
      showImg: "/gallery/" + item
    });
    console.log(this.state.showImg);
  };

  render() {
    const imgs = [
      ["1.png", "2.png", "3.png", "4.png", "5.png"],
      ["6.png", "7.png", "8.png", "9.png", "10.png"],
      ["11.png", "12.png", "13.png", "14.png", "15.png"],
      ["16.png", "17.png", "18.png", "19.png", "20.png"],
      ["21.png", "22.png", "23.png", "24.png", "25.png"]
    ];

    const imgList = imgs.map(list =>
      list.map(item => (
        <Card
          style={{ marginBottom: 10 }}
          cover={
            <img src={"/gallery/" + item} onClick={() => this.openImg(item)} />
          }
        >
          <Card.Meta title="yahaha" description="照片墙" />
        </Card>
      ))
    );

    return (
      <div className="content">
        <Row gutter={10}>
          <Col span="5">{imgList[0]}</Col>
          <Col span="5">{imgList[1]}</Col>
          <Col span="5">{imgList[2]}</Col>
          <Col span="5">{imgList[3]}</Col>
          <Col span="4">{imgList[4]}</Col>
        </Row>

        <Modal
          title="照片墙"
          width={400}
          height={600}
          visible={this.state.showModal}
          footer={null}
          onCancel={() => {
            this.setState({
              showModal: false
            });
          }}
        >
          <img src={this.state.showImg} alt="" style={{ width: "100%" }} />
        </Modal>
      </div>
    );
  }
}
