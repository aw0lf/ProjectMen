import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const styles = [{
    textAligin: 'center', fontWeight: 'bold', margin: '15px', float: 'right'
}];
const CircleButton = (props) => {

    return (
        <div style={{ width: '100%', alignItems: 'flex-end' }}><Link to='create/post'><Button shape='circle' type='primary' size='large' style={styles}>+</Button></Link>
        </div>);
};
export default CircleButton;
