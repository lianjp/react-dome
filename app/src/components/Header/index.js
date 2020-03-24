import React from 'react'
import { Row, Col } from 'antd'
import "./index.less"
import Util from "../../utils/utils"
import axios from "../../axios"

export default class Header extends React.Component {
  componentWillMount() {
    let userName = "yahaha"
    this.setState({
      userName
    })
    setInterval(() => {
      let sysTime = Util.formateDate(new Date().getTime())
      this.setState({
        sysTime
      })
    }, 1000)
    this.getWeaterAPIDate()
  }

  getWeaterAPIDate() {
    let city = "330110"
    axios.jsonp({
      url: 'https://restapi.amap.com/v3/weather/weatherInfo?city=' + city +'&key=57c44e5f2925b5a16404dd60c6f908b2&extensions=all'
    }).then(
      (res) => {
        if(res.status == 1) {
          let data = res.forecasts[0].casts[0].dayweather
          console.log(data)
          this.setState({
            weather: data
          })
        }
      }
    )
  }

  render() {
    return (
      <div className="header">
        <Row className="header-top">
          <Col span="24">
            <span>欢迎， { this.state.userName }</span>
            <a href="#">退出</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span="4" className="breadcrumb-title">
            首页
          </Col>
          <Col span="20" className="weather">
            <span className="data">
            { this.state.sysTime }
            </span>
            <span className="weather-detail">
              { this.state.weather }
            </span>
          </Col>
        </Row>
      </div>
    )
  }
}