import React from "react";
import { Card, Carousel } from "antd";

import "./ui.less";

export default class Gallery extends React.Component {
  render() {
    return (
      <div className="content">
        <Card title="文字轮播" className="button-wrap">
          <Carousel autoplay effect="fade">
            <div>
              <h3>yahaha~~~</h3>
            </div>
            <div>
              <h3>foo~~~</h3>
            </div>
            <div>
              <h3>bar~~~</h3>
            </div>
            <div>
              <h3>baz~~~</h3>
            </div>
          </Carousel>
          ,
        </Card>

        <Card title="图片轮播" className="carousel-wrap">
          <Carousel autoplay effect="fade">
            <div>
              <img src="/carousel-img/carousel-1.jpg" alt="" />
            </div>
            <div>
              <img src="/carousel-img/carousel-2.jpg" alt="" />
            </div>
            <div>
              <img src="/carousel-img/carousel-3.jpg" alt="" />
            </div>
          </Carousel>
          ,
        </Card>
      </div>
    );
  }
}
