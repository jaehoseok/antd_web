import React from 'react'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined
} from '@ant-design/icons'

function Head(props) {
    return (
        <div>
            <button>{props.coll ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/> }</button>
        </div>
    )
}

export default Head
