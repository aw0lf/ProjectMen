import React, { Component } from 'react';
import axios from 'axios';

import { Icon } from 'antd';
import Project from '../components/Project';

class ProjectDetails extends Component {

  state = {
      project: {}
  }

  componentDidMount () {

      const id = this.props.match.params.projectID;

      axios.get(`http://127.0.0.1:8000/api/${ id }`)
          .then(res => {
              this.setState({
                  project: res.data
              });
              console.log(res.data);
          });
  }
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
    const status = this.state.project.status;

    return (
        <Project
            title={this.state.project.title}
            description={this.state.project.description}
            start_date={this.state.project.start_date}
            end_date={this.state.project.end_date}
            status={this.state.project.status}
        />
    );
}
}
export default ProjectDetails;
