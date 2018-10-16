import React from 'react';

import { Layout, Menu, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';

const { Header, Content, Footer, Sider } = Layout;

class CostumeLayout extends React.Component {

    render () {
        return (
            <Layout>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={(broken) => { console.log(broken); }}
                    onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
                >
                    <div className="logo" />

                    {
                        this.props.isAuthenticated ?
                            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                                <Menu.Item key="1">
                                    <Link to="/" exact>
                                        <Icon type="schedule" />
                                        <span className="nav-text">Dashboard</span>
                                    </Link>

                                </Menu.Item>
                                <Menu.Item key="3">
                                    <Link to="/settings" exact>
                                        <Icon type="user" />
                                        <span className="nav-text">My Settings</span>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="2" onClick={this.props.logout}>
        Logout
                                </Menu.Item>
                            </Menu>
                            :
                            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                                <Menu.Item key="2">
                                    <Link to="/login">Contact Us</Link>
                                </Menu.Item>
                            </Menu>
                    }

                </Sider>
                <Layout>
                    <p style={{ color: 'red', fontWeight: 'bold', fontSize: 14, textAlign: 'center' }}>DEMO</p>

                    <Header style={{ background: '#fff', margin: 15, fontSize: 25 }}>Project Management Platform </Header>

                    <Content style={{ margin: '24px 16px 0' }}>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
      Contact Us
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    };
};

export default withRouter(connect(null, mapDispatchToProps)(CostumeLayout));
