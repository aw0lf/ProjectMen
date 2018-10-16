import React, { Component } from 'react';
import { Table, Divider, Col, Row } from 'antd';
import axios from 'axios';
import CircleButton from './CircleButton';
import { Link } from 'react-router-dom';

function onChange (pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
}
class ProjectList extends Component {

state={
    projects: []
}

componentDidMount () {
    axios.get(`http://127.0.0.1:8000/api/`)
        .then(res => {
            this.setState({
                projects: res.data
            });
            console.log(typeof res.data);
        });
}

render () {
    return (
        <div>
            <Row type="flex" justify="end" style={{ marginBottom: '10px' }}>
                <Col span={2}>
                    <CircleButton />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table columns={this.getColumns()} dataSource={this.state.projects} rowKey={record => record.id} onChange={onChange} />
                </Col>
            </Row>
        </div>
    );
}

getColumns = () => {
    return [{
        key: '1',
        title: 'Project Title',
        dataIndex: 'title'
        //  sorter: (a, b) => a.name.length - b.name.length,
    }, {
        key: '2',
        title: 'Start Date',
        dataIndex: 'start_date',
        defaultSortOrder: 'descend',
        sorter: (a, b) => new Date(a.start_date) - new Date(b.start_date)
    },
    {
        key: '3',
        title: 'Finish Date',
        dataIndex: 'end_date',
        defaultSortOrder: 'descend',
        sorter: (a, b) => new Date(a.end_date) - new Date(b.end_date)
    }, {
        key: '4',
        title: 'Status',
        dataIndex: 'status',
        filters: [{
            text: 'New',
            value: 'new'
        }, {
            text: 'In Progress',
            value: 'in progress'
        },
        {
            text: 'Finished',
            value: 'finished'
        }],
        filterMultiple: false,
        onFilter: (value, record) => record.status.indexOf(value) === 0,
        sorter: (a, b) => a.status.length - b.status.length
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (

            <span>
                <Link to={`/${ record.id }/put`}>Edit</Link>
                <Divider type="vertical" />
                <a onClick={() => {
                    axios.delete(`http://127.0.0.1:8000/api/${ record.id }/`);
                    this.props.history.push('/');
                    this.forceUpdate();
                }} >Delete</a>
                <Divider type="vertical" />
                <a href="javascript:;">Comment</a>
                <Divider type="vertical" />
                <Link to={`/${ record.id }`}>Details</Link>
            </span>
        )
    }];
}

onChange=(pagination, filters, sorter) => {
    console.log('params', pagination, filters, sorter);
}
}
export default ProjectList;
