import React from "react";
import { Card, Form, Input, Button, Checkbox, message, Icon } from "antd";

const FormItem = Form.Item;
class Login extends React.Component {
  handleSubmit = () => {

    let userInfo = this.props.form.getFieldsValue();

    console.log(userInfo)

    this.props.form.validateFields((err, values) => {
      if (!err) {
        message.success(
          `${userInfo.userName} 恭喜你，您通过本次表单组件学习，当前密码为：${userInfo.userPassword}`
        );
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="content">
        <Card title="登录行内表单" className="button-wrap">
          <Form layout="inline">
            <FormItem>
              <Input placeholder="请输入账号"></Input>
            </FormItem>
            <FormItem>
              <Input placeholder="请输入密码"></Input>
            </FormItem>
            <FormItem>
              <Button type="primary">登录</Button>
            </FormItem>
          </Form>
        </Card>

        <Card title="登录水平表单" className="button-wrap">
          <Form layout="horizontal" style={{ width: 300 }}>
            <FormItem>
              {getFieldDecorator("userName", {
                initialValue: "",
                rules: [
                  {
                    required: true,
                    message: "密码不能为空"
                  },{
                    min:5,
                    max:10,
                    message: '长度不在范围'
                  },{
                    pattern: /^\w+$/g,
                    message:'用户名必须为字母或数字'
                  }
                ]
              })(<Input prefix={<Icon type="user" />} placeholder="请输入账号"></Input>)}
            </FormItem>
            <FormItem
              name="userPassword"
              rules={[{ required: true, message: "密码不能为空" }]}
            >
              {getFieldDecorator("userPassword", {
                initialValue: "",
                rules: [
                  {
                    required: true,
                    message: "密码不能为空"
                  },{
                    min:5,
                    max:10,
                    message: '长度不在范围'
                  },{
                    pattern: new RegExp('^\\w+$', 'g'),
                    message:'密码必须为字母或数字'
                  }
                ]
              })(<Input prefix={<Icon type="lock" />} type="password" placeholder="请输入密码"></Input>)}
            </FormItem>
            <FormItem>
              {
                getFieldDecorator("remember",{
                  valuePropName: 'checked',
                  initialValue: true
                })(<Checkbox>记住密码</Checkbox>)
              }

              <a href="#" style={{ float: "right" }}>
                忘记密码
              </a>
            </FormItem>
            <FormItem>
              <Button type="primary" onClick={this.handleSubmit}>
                登录
              </Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}

export default Form.create()(Login);
