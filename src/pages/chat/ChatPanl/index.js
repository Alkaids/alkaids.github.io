import React, { Component } from 'react'
import { Row, Col, Button, Input, List, Avatar, message } from 'antd';
import styles from './style.less';

const { TextArea } = Input;

const getDescription = (item, propsNickname) => {
  const { nickname, message } = item;
  return <span className={nickname !== propsNickname ? styles.description : styles.selfDescription}>{message}</span>
}

export default class ChatPanl extends Component {
  textArea = React.createRef();
  chatBox = React.createRef();
  state = {
    value: `大家好， 我叫${this.props.nickname}`,
  }
  handleSend = () => {
    if (this.state.value !== '') {
      this.props.handleSend(this.state.value);
      this.setState({
        value: ''
      })
    } else {
      message.info('消息不能为空！');
    }
  }
  hanleChange = e => {
    this.setState({
      value: e.target.value
    })
  }
  onKeyDown = e => {
    if (e.keyCode === 13 && e.ctrlKey) {
      this.setState({
        value: this.state.value + '\n'
      })
    } else if (e.keyCode === 13) {
      e.preventDefault();
      this.handleSend();
    }
  }
  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }
  componentDidUpdate() {
    this.chatBox.current.scrollTop = this.chatBox.current.scrollHeight;
  }
  render() {
    const { nickname } = this.props;
    return (
      <Row>
        <Col span={18} offset={3}>
            <div className={styles.panl}>
              <div style={{ height: 'calc( 100% - 200px )' }} className={styles.chatBox} ref={this.chatBox}>
                <List
                  itemLayout="horizontal"
                  dataSource={this.props.messages}
                  renderItem={item => (
                    <List.Item style={{ padding: '20px', border: 'none' }}>
                      <List.Item.Meta
                        className={item.nickname === nickname ? 'self' : ''}
                        avatar={<Avatar style={{ backgroundColor: '#005aa0', verticalAlign: 'middle' }}>{item.nickname[0]}</Avatar>}
                        title={item.nickname === nickname ? '' : <a href="https://github.com/Alkaids/Alkaids.github.io">{item.nickname}</a>}
                        description={getDescription(item, nickname)}
                      />
                    </List.Item>
                  )}
                />
              </div>
              <div className={styles.textArea}>
                <TextArea style={{ resize: 'none', height: '100%' }} onChange={this.hanleChange} value={this.state.value} />
                <span className={styles.tips}>按下Ctr+Enter换行</span>
                <Button onClick={this.handleSend}>发送</Button>
              </div>
            </div>
        </Col>
      </Row>
    )
  }
}
