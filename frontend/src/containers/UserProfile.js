import React, { Component } from 'react';
import axios from 'axios';
import { Card, Col, Row } from 'antd';

class UserProfile extends Component {
  state = {
      user: {}
  }

  componentDidMount () {
      axios.get(`http://127.0.0.1:8000/api/users/view/7`)
          .then(res => {
              this.setState({
                  user: res.data
              });
              console.log(res.data);
          });
  }
  render () {
      console.log(this.state);
      return (
          <Card title={this.props.title} >
              <Row>
                  <Col xl={12}>
                      <label htmlFor='email'>Emial:</label>
                      <p name='email'>{this.state.user.email}</p>
                  </Col>
                  <Col xl={12} >
                      <label htmlFor='firstName'>First Name:</label>
                      <p name='firstName'>{this.state.user.first_name}</p>
                  </Col>
                  <Col xl={12} >
                      <label htmlFor='lastName'>Last Name:</label>
                      <p name='lastName'>{this.state.user.last_name}</p>
                  </Col>
                  <Col xl={12} >
                      <label htmlFor='age'>Date of birthday:</label>
                      <p name='age'>{this.state.user.date_of_birth}</p>
                  </Col>
                  <Col xl={12} >
                      <label htmlFor='gender'>Gender:</label>
                      <p name='gender'>{this.state.user.gender}</p>
                  </Col>
              </Row>

          </Card>
      );
  }
}
export default UserProfile;
