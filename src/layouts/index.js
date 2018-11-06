import { LocaleProvider, Layout, Button } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import Header from './Header';

const { Content } = Layout;
function BasicLayout(props) {
  return (
    <LocaleProvider locale={zh_CN}>
      <Layout>
        <Header>
        </Header>
        <Content>
          {props.children}
        </Content>
      </Layout>
    </LocaleProvider>
  );
}

export default BasicLayout;
