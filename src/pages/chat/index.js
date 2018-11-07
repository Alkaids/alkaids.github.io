import React, { PureComponent } from 'react';
import io from 'socket.io-client';
import config from './config';
import { Button } from 'antd';

const { host, port } = config

export default class componentName extends PureComponent {
  static socket = null
  componentDidMount() {
    this.socket = io(`${host}:${port}`);
    this.socket.on('loginSuccess', data => {
      console.log(data);
    });
    this.socket.on('loginFail', () => {

    });
    this.socket.on('amountChange', data => {

    });
    this.socket.on('receiveMessage', data => {

    });
  }
  handleLogin = () => {
    this.socket.emit('login', { username: 'jinxin' })
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