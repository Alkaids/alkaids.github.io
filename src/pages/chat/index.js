import React, { Component } from 'react';
import config from './wsconfig';
import InpitNickname from './InputNickname';
import ChatPanl from './ChatPanl';

const { host, port } = config;

export default class componentName extends Component {
  static socket = null;
  state = {
    nickname: null,
    messages: []
  }
  handleLogin = (value) => {
    this.socket = new WebSocket(`${host}:${port}`);
    localStorage.setItem('nickname', value);
    this.setState({
      nickname: value ? value : '匿名'
    })
    this.socket.onopen = () => {
      this.socket.onmessage = e => {
        this.setState({
          messages: [...this.state.messages, {...JSON.parse(e.data)}]
        })
      }
    }
  }
  handleSend = (value) => {
    this.socket.send(JSON.stringify({
      nickname: this.state.nickname,
      message: value
    }));
  }
  render() {
    const prop = { ...{ handleSend: this.handleSend }, ...this.state }
    return (
      <React.Fragment>
        {
          this.state.nickname ?
            <ChatPanl {...prop} /> :
            <InpitNickname handleLogin={this.handleLogin} />
        }
      </React.Fragment>
    )
  }
}