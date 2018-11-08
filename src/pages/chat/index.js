import React, { PureComponent } from 'react';
import config from './config';
import { Button } from 'antd';

const { host, port } = config

export default class componentName extends PureComponent {
  static socket = null;
  componentDidMount() {
    this.socket = new WebSocket(`${host}:${port}`)
    this.socket.onopen = () => {
      console.log('连接socket成功！');
      this.socket.onmessage = e => {
        console.log(e.data);
      }
    }
  }
  handleLogin = () => {
    this.socket.send('hello?')
  }
  render() {
    return (
      <div>
        <div>
          <Button onClick={this.handleLogin}>登陆</Button>
        </div>
      </div>
    )
  }
}