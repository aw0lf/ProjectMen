import React, { Component } from 'react';
import axios from 'axios';

import { Card, Icon, Divider, Col, Row } from 'antd';

import CustomeTimeline from '../components/Timeline';

class Project extends Component {

renderIcon = (status) => {
    switch (status) {
        case 'new':
            return (
                <span>
                    <Icon type="star" theme="twoTone" twoToneColor="#07aefb"/>
                    <label style={{ textAlign: 'center', margin: '0.5px', fontWeight: 'bold', fontSize: '11px', color: '#07aefb' }}>NEW</label>
                </span>

            );
            break;
        case 'in progress':
            return (
                <span>
                    <Icon type="clock-circle" theme="twoTone" twoToneColor='#ffba0b'/>
                    <label style={{ textAlign: 'center', margin: '0.5px', fontWeight: 'bold', fontSize: '11px', color: '#ffba0b' }}>IN PROGRESS</label>
                </span>
            );
            break;
        case 'finished':
            return (
                <span>
                    <Icon type="check-square" theme="twoTone" twoToneColor="#0bff5a" />
                    <label style={{ textAlign: 'center', margin: '0.5px', color: '#0bff5a', fontWeight: 'bold', fontSize: '11px' }}>COMPLETE</label>
                </span>
            );
            break;
        default:
            return null;
    }
}
render () {
    const status = this.props.status;

    return (
        <Card title={this.props.title} extra={
            this.renderIcon(status)
        }>
            <Row>
                <Col xs={12}>
                    <p>author: {this.props.owner}</p>
                    <p>status: {this.props.status}</p>
                </Col>
                <Col xs={12} >
                    <CustomeTimeline startDate={this.props.start_date} endDate={this.props.end_date}/>
                </Col>
            </Row>
            <Divider type="horizontal"/>
            <Row>
                <Col>
                    <p style={{ fontWeight: 'bold' }}>Description</p>
                    <div style={{ margin: '5px' }}>{this.props.description}</div>
                </Col>
            </Row>

        </Card>
    );
}
}
export default Project;
