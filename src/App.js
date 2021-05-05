import './App.css';

import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";
import './hoc/auth';


import {Collapse, Layout, Tooltip, Button} from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, AppstoreOutlined, BellFilled, ContactsOutlined, HomeFilled } from '@ant-design/icons';

import Head from './components/Head/Head'
import Sidebar from './components/SideBar/Sidebar'
import Foot from './components/Foot/Foot'
//pages
import LandingPage from './components/LandingPage/LandingPage';
import IntroducePage from './components/IntroducePage/IntruducePage';
import TeamPage from './components/TeamPage/TeamPage';
import MemberPage from './components/MemberPage/MemberPage';
import SuggestionsPage from './components/SuggestionsPage/SuggestionsPage';

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
      <BrowserRouter>
            <Switch>
              //todo 로그인이 필요한 경우: true, 로그인을 안해야 하는경우: false, 상관없는 경우: null
              <Route exact path="/" component={LandingPage}/>
              <Route exact path="/introduce" component={IntroducePage} />
              <Route exact path="/team" component={TeamPage} />
              <Route exact path="/member" component={MemberPage} />
              <Route exact path="/suggestions" component={SuggestionsPage} />
            </Switch>
          </BrowserRouter>
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
