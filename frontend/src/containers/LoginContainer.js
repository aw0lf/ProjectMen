import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';
import { Redirect } from 'react-router-dom';

const FormItem = Form.Item;

class LoginContainer extends Component {

  handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
          if (!err) {
              console.log('Received values of form: ', values);
              this.props.onAuth(values.userName, values.password);
              //  this.props.history.push('/');
              //this.forceUpdate();
          }
      });
  }

  render () {
      console.log(this.props.isAuthenticated);
      if (this.props.isAuthenticated) {
          return <Redirect to="/" />;
      }

      let errorMessage = null;
      if (this.props.error) {
          errorMessage = (
              <p>{this.props.error.message}</p>
          );
      }

      const { getFieldDecorator } = this.props.form;
      return (
          <div>
              {errorMessage}
              {
                  this.props.loading ?
                      <p>loading</p>
                      :
                      <Form onSubmit={this.handleSubmit} className="login-form">
                          <FormItem>
                              {getFieldDecorator('userName', {
                                  rules: [{ required: true, message: 'Please input your username!' }]
                              })(
                                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                              )}
                          </FormItem>
                          <FormItem>
                              {getFieldDecorator('password', {
                                  rules: [{ required: true, message: 'Please input your Password!' }]
                              })(
                                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                              )}
                          </FormItem>
                          <FormItem>
                              <Button type="primary" htmlType="submit" className="login-form-button">
             Log in
                              </Button>
                          </FormItem>
                      </Form> }
          </div>
      );
  }
}
const WrappedLoginContainer = Form.create()(LoginContainer);

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error,
        isAuthenticated: state.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, password) => dispatch(actions.authLogin(username, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WrappedLoginContainer);
