import React, { PureComponent } from 'react'
import { Row, Col, Input } from 'antd';

const { Search } = Input;

export default class InputNickname extends PureComponent {
  render() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100%',
            color: '#fff'
          }}>
            <Row>
              <Col span={18} offset={3}>
                {
                    <Search
                      placeholder="输入一个昵称"
                      enterButton="进入聊天室"
                      size="large"
                      onSearch={this.props.handleLogin}
                    />
                }
              </Col>
            </Row>
          </div>
    )
  }
}
