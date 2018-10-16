import React, { Component } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import * as actions from './store/actions/auth';

import ProjectsList from './components/ProjectsList';
import ProjectDetails from './containers/ProjectDetails';
import CreateProject from './containers/CreateProject';
import EditProject from './containers/EditProject';
import WrappedLoginContainer from './containers/LoginContainer';
import CostumeLayout from './containers/Layout';
import UserProfile from './containers/UserProfile';

import 'antd/dist/antd.css';

class RootContainerComponent extends Component {

    componentDidMount () {
        this.props.authCheckState();
    }

  PrivateRoute = ({ component: ChildComponent, ...rest }) => {
      return <Route {...rest} render={props => {
          if (this.props.loading) {
              return <em>Loading...</em>;
          } else if (!this.props.isAuthenticated) {
              return <Redirect to="/login" />;
          } else {
              return <ChildComponent {...props} />;
          }
      }} />;
  }
  render () {
      const { PrivateRoute } = this;
      return (
          <BrowserRouter>
              <CostumeLayout {...this.props}>
                  <Switch>
                      <Route exact path="/login" component={WrappedLoginContainer } />
                      <Route exact path='/settings' component={UserProfile}/>

                      <PrivateRoute exact path='/' component={ProjectsList}/>
                      <PrivateRoute exact path='/:projectID' component={ProjectDetails}/>
                      <PrivateRoute exact path='/create/:reqType' component={CreateProject}/>
                      <PrivateRoute exact path='/:projectID/:reqType' component={EditProject}/>

                  </Switch>
              </CostumeLayout>
          </BrowserRouter>
      );
  }
}
const mapStateToProps = state => {
    return {
        isAuthenticated: state.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        authCheckState: () => dispatch(actions.authCheckState())
    };
};

const RootContainer = connect(mapStateToProps, mapDispatchToProps)(RootContainerComponent);

export default class App extends Component {
    render () {
        return <RootContainer />;
    }
}
