import {LocaleProvider} from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
function BasicLayout(props) {
  return (
    <LocaleProvider  locale={zh_CN}>
      { props.children }
    </LocaleProvider>
  );
}

export default BasicLayout;
