import React from 'react'
import { Menu } from 'antd'
import './SideBar.css'
import {
    SoundOutlined,
    TeamOutlined,
    UserOutlined,
    ToolOutlined
} from '@ant-design/icons';

function Sidebar() {

    return (
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <div className="logo"/>
                <Menu.Item key="1" icon={<SoundOutlined/>}>
                    공모전 소개
                </Menu.Item>
                <Menu.Item key="2" icon={<TeamOutlined/>}>
                    팀 구하기
                </Menu.Item>
                <Menu.Item key="3" icon={<UserOutlined/>}>
                    팀원 구하기
                </Menu.Item>
                <Menu.Item key="4" icon={<ToolOutlined/>}>
                    건의사항
                </Menu.Item>
            </Menu>
    )
}

export default Sidebar
