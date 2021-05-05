import React, {useState} from 'react'
import { Menu } from 'antd'
import {Link} from "react-router-dom"
import './SideBar.css'
import {
    SoundOutlined,
    TeamOutlined,
    UserOutlined,
    ToolOutlined
} from '@ant-design/icons';

function Sidebar() {
    const [Selected, setSelected] = useState('')

    const cl = (temp) => {
        var str = temp;
        setSelected(str)
        console.log(Selected);
    }

    return (
            <Menu theme="dark" mode="inline" defaultSelectedKeys={[]} selectedKeys={Selected}>
                <div className="logo" href="/">
                    <a className="logofont" href="/">
                        MAIN X ACE
                    </a>
                </div>
                <Menu.Item key="1" icon={<SoundOutlined/>}>
                    <a className="menu" href="/introduce" onClick={() => cl('1')}>공모전 소개</a>
                </Menu.Item>
                <Menu.Item key="2" icon={<TeamOutlined/>}>
                    <a className="menu" href="/team" onClick={() => cl('2')}>팀 구하기</a>
                </Menu.Item>
                <Menu.Item key="3" icon={<UserOutlined/>}>
                    <a className="menu" href="/member" onClick={() => setSelected('3')}>팀원 구하기</a>
                </Menu.Item>
                <Menu.Item key="4" icon={<ToolOutlined/>}>
                    <a className="menu" href="/suggestions" onClick={() => setSelected('4')}>건의사항</a>
                </Menu.Item>
            </Menu>
    )
}

export default Sidebar
