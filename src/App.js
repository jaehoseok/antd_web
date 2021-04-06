import './App.css';
import {Collapse, Layout, Tooltip, Button} from 'antd';
import React, { useState } from 'react'
import { MenuUnfoldOutlined, MenuFoldOutlined, AppstoreOutlined, BellFilled, ContactsOutlined, HomeFilled } from '@ant-design/icons';

import Head from './components/Head/Head'
import LandingPage from './components/LandingPage/LandingPage'
import Sidebar from './components/SideBar/Sidebar'
import Foot from './components/Foot/Foot'


function App() {

  const {Header, Content, Footer, Sider} = Layout;

  const [collapsed, setcollapsed] = useState(false)
  const [btntoggle, setbtntoggle] = useState("none")

  const toggle = () => {
    const temp = !collapsed
    setcollapsed(temp)
  }
  
  const btoggle = () => {
    if(btntoggle==="none") setbtntoggle("inline")
    else setbtntoggle("none")
  }

  return (
    <Layout className="App">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Sidebar/>
      </Sider>
    <Layout>
      <Header className="site-layout-background" style={{ padding: 0, backgroundColor:"white"}}>
        <a className="trigger" onClick={toggle}>{collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}</a>
      </Header>
      <Content style={{ margin: '24px 16px 0', backgroundColor:"white"}}>
        <LandingPage/>
      </Content>

      <div>
        <div className="btn">
          <Tooltip title="메뉴">
            <a onClick={btoggle}>{<AppstoreOutlined />}</a>
          </Tooltip>
        </div>
        <div className="btn1" style={{display:btntoggle}}>
          <Tooltip title="My Page">
            <a>{<ContactsOutlined />}</a>
          </Tooltip>
        </div>
        <div className="btn2" style={{display:btntoggle}}>
          <Tooltip title="Home">
            <a>{<HomeFilled />}</a>
          </Tooltip>
        </div>
        <div className="btn3" style={{display:btntoggle}}>
          <Tooltip title="알림">
            <a>{<BellFilled />}</a>
          </Tooltip>
        </div>
      </div>
      
      
      <Footer style={{ textAlign: 'center' }}><Foot/></Footer>
    </Layout>
  </Layout>
  );
}

export default App;
