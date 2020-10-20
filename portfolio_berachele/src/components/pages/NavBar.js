import React from 'react';
import { Divider } from 'antd';

export default function NavBar() {


    return (
        <div className='nav-bar'>
            <h3>Welcome</h3>
            <Divider style={{color: 'red'}}/>
            <h3>What I Do</h3>
            <Divider className='divider'/>
            <h3>Projects</h3>
            <Divider />
            <h3>Get in Touch</h3>
            <Divider />
        </div>
    )
}