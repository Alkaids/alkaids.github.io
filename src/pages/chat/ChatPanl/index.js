import React, { Component } from 'react'
import { Row, Col, Button, Input, List, Avatar } from 'antd';
import styles from './style.less';

const { TextArea } = Input;


export default class ChatPanl extends Component {
  textArea = React.createRef();
  state = {
    value: `大家好， 我叫${this.props.nickname}`
  }
  handleSend = () => {
    this.props.handleSend(this.state.value);
    this.setState({
      value: ''
    })
  }
  hanleChange = e => {
    this.setState({
      value: e.target.value
    })
  }
  render() {
    return (
      <Row>
        <Col span={18} offset={3}>
          <div className={styles.panl}>
            <div style={{ height: 'calc( 100% - 200px )' }}>
              <List
                itemLayout="horizontal"
                dataSource={this.props.messages}
                renderItem={item => (
                  <List.Item style={{padding:'20px', border:'none'}}>
                    <List.Item.Meta
                      avatar={<Avatar style={{ backgroundColor: '#005aa0', verticalAlign: 'middle' }}>{item.nickname[0]}</Avatar>}
                      title={<a href="https://ant.design">{item.nickname}</a>}
                      description={item.message}
                    />
                  </List.Item>
                )}
              />
            </div>
            <div className={styles.textArea}>
              <TextArea style={{ resize: 'none', height: '100%' }} onChange={this.hanleChange} value={this.state.value}/>
              <Button onClick={this.handleSend}>发送</Button>
            </div>
          </div>
        </Col>
      </Row>
    )
  }
}
