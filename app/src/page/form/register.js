import React from "react";
import {
  Card,
  Form,
  Input,
  Radio,
  InputNumber,
  Select,
  Switch,
  DatePicker,
  TimePicker,
  Upload,
  Icon,
  Checkbox,
  Button,
  message
} from "antd";
import moment from "moment";

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const { Option } = Select;
const TextArea = Input.TextArea;
class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      userImg:''
    };
  }

  getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  handleChange = (info) => {
    if (info.file.status === "uploading") {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      this.getBase64(info.file.originFileObj, (imageUrl) =>
        this.setState({
          userImg: imageUrl,
          loading: false,
        })
      );
    }
  };

  handleSubmit = () => {

    let userInfo = this.props.form.getFieldsValue();

    console.log(userInfo)

    this.props.form.validateFields((err, values) => {
      if (!err) {
        message.success(
          `${userInfo.userName} 恭喜你，您通过本次表单组件学习，当前密码为：${userInfo.userPwd}`
        );
      }
    });
  };

  render() {
    const formItemLayout = {
      labelCol: {
        xs: 24,
        sm: 4,
      },
      wrapperCol: {
        xs: 24,
        sm: 12,
      },
    };
    const setoffLayout = {
      labelCol: {
        xs: 24,
        sm: 4,
      },
      wrapperCol: {
        xs: 24,
        sm: {
          span: 12,
          offset: 4
        },
      },
    };
    const rowObject = {
      minRows: 4,
      maxRows: 6,
    };
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Card title="注册表单">
          <Form layout="horizontal">
            <FormItem label="用户名" {...formItemLayout}>
              {getFieldDecorator("userName", {
                initialValue: "",
                rules: [
                  {
                    required: true,
                    message: "用户名不能为空",
                  },
                ],
              })(<Input placeholder="请输入账号"></Input>)}
            </FormItem>

            <FormItem label="密码" {...formItemLayout}>
              {getFieldDecorator("userPwd", {
                initialValue: "",
                rules: [
                  {
                    required: true,
                    message: "密码不能为空",
                  },
                ],
              })(<Input type="password" placeholder="请输入密码"></Input>)}
            </FormItem>

            <FormItem label="性别" {...formItemLayout}>
              {getFieldDecorator("sex", {
                initialValue: "1",
              })(
                <RadioGroup>
                  <Radio value="1">男</Radio>
                  <Radio value="2">女</Radio>
                </RadioGroup>
              )}
            </FormItem>

            <FormItem label="年龄" {...formItemLayout}>
              {getFieldDecorator("age", {
                initialValue: "18",
              })(<InputNumber></InputNumber>)}
            </FormItem>

            <FormItem label="当前状态" {...formItemLayout}>
              {getFieldDecorator("state", {
                initialValue: "3",
              })(
                <Select>
                  <Option value="1">开心</Option>
                  <Option value="2">难过</Option>
                  <Option value="3">快乐</Option>
                  <Option value="4">悲伤</Option>
                </Select>
              )}
            </FormItem>

            <FormItem label="爱好" {...formItemLayout}>
              {getFieldDecorator("interrst", {
                initialValue: ["8", "9"],
              })(
                <Select mode="multiple">
                  <Option value="1">打篮球</Option>
                  <Option value="2">打乒乓球</Option>
                  <Option value="3">游泳</Option>
                  <Option value="4">跑步</Option>
                  <Option value="5">旅游</Option>
                  <Option value="6">看电影</Option>
                  <Option value="7">听音乐</Option>
                  <Option value="8">爬山</Option>
                  <Option value="9">打游戏</Option>
                </Select>
              )}
            </FormItem>

            <FormItem label="是否已婚" {...formItemLayout}>
              {getFieldDecorator("isMarried", {
                valuePropName: "checked",
                initialValue: true,
              })(<Switch></Switch>)}
            </FormItem>

            <FormItem label="生日" {...formItemLayout}>
              {getFieldDecorator("birthday", {
                initialValue: moment("2020-04-06"),
              })(
                <DatePicker showTime format="YYYY-MM-DD HH:mm:ss"></DatePicker>
              )}
            </FormItem>

            <FormItem label="联系地址" {...formItemLayout}>
              {getFieldDecorator("address", {
                initialValue: "浙江省杭州市余杭区",
              })(<TextArea autosize={rowObject}></TextArea>)}
            </FormItem>

            <FormItem label="早起时间" {...formItemLayout}>
              {getFieldDecorator("time")(<TimePicker></TimePicker>)}
            </FormItem>

            <FormItem label="头像" {...formItemLayout}>
              {getFieldDecorator("userImg")(
                <Upload
                  listType="picture-card"
                  showUploadList={false}
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  onChange={this.handleChange}
                >
                  {this.state.userImg ? (
                    <img src={this.state.userImg}></img>
                  ) : (
                    <Icon type="plus"></Icon>
                  )}
                </Upload>
              )}
            </FormItem>

            <FormItem {...setoffLayout}>
              {getFieldDecorator("agreement")(
                <Checkbox>我已阅读过<a href="#">隐私协议</a></Checkbox>
              )}
            </FormItem>

            <FormItem {...setoffLayout}>
              <Button type="primary" onClick={this.handleSubmit}>注册</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}

export default Form.create()(Register);
