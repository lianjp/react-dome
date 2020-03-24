import React from "react";
import { Link } from "react-router-dom";

export default class About extends React.Component {
  render() {
    return (
      <div>
        This is about
        <br />
        <Link to="/about/test-dt&foo">嵌套路由1</Link>
        <br />
        <Link to="/about/456&bar">嵌套路由2</Link>
        <hr />
        {this.props.children}
      </div>
    );
  }
}
