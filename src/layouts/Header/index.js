import React, { PureComponent } from 'react';
import { Menu } from 'antd';
import router from 'umi/router';
import styles from './index.less';

const { Item } = Menu;
export default class Header extends PureComponent {
  state = {
    menuList: [
      {
        title: '首页',
        key: 0,
        path:'/'
      },
      {
        title: '斗地主',
        key: 1,
        path:'/game'
      },
      {
        title: '聊天室',
        key: 2,
        path:'/chat'
      },
      {
        title: '关于我们',
        key: 3,
        path:'/about'
      }
    ]
  }
  handleClick = (path) => {
    router.push(path);
  }
  render() {
    return (
      <div className={styles.header}>
        <Menu
          mode="horizontal"
          className={styles.menu}
        >
          {
            this.state.menuList.map((item) => <Item key={item.key} onClick={this.handleClick.bind(this, item.path)}>{item.title}</Item>)
          }
        </Menu>
      </div>
    )
  }
}
