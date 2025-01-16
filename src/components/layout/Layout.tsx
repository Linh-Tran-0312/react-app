import { Layout as AntLayout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Sider, Content } = AntLayout;

const Layout = ({children}: any) => {
  return (
    <AntLayout style={{height: '100vh'}}>
      <Sider style={{backgroundColor: 'white'}}>
        <Menu>
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/blog">Blog</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Content className='ma-4'>
        {children}
      </Content>
    </AntLayout>
  );
};

export default Layout;