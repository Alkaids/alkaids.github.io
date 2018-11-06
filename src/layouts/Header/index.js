import React, { PureComponent } from 'react';
import { Menu } from 'antd';
import styles from './index.less';

const { Item } = Menu;
export default class Header extends PureComponent {
  render() {
    return (
      <div className={styles.header}>
        <Menu
            mode="horizontal"
            className={styles.menu}
        >
            <Item key="0">首页</Item>
            <Item key="1">斗地主</Item>
            <Item key="2">聊天室</Item>
        </Menu>
      </div>
    )
  }
}
