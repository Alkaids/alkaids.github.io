import { LocaleProvider, Layout, Button } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import Header from './Header';

const { Content } = Layout;
function BasicLayout(props) {
  let paddingTop = props.location.pathname === '/' ? '0px' : '64px';
  return (
    <LocaleProvider locale={zh_CN}>
      <Layout>
        <Header>
        </Header>
        <Content style={{paddingTop, background:'#061a32', backgroundSize: '100% 100%', width:'100vw', height: '100vh'}}>
          {props.children}
        </Content>
      </Layout>
    </LocaleProvider>
  );
}

export default BasicLayout;
