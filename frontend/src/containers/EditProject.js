import React, { Component } from 'react';
import FormLayout from '../components/Form';
import axios from 'axios';

class EditProject extends Component {

state={
    project: {
        title: '',
        description: '',
        start_date: '',
        end_date: '',
        status: '',
        loading: true
    }
}
componentDidMount () {
    const id = this.props.match.params.projectID;

    axios.get(`http://127.0.0.1:8000/api/${ id }`)
        .then(res => {
            this.setState({
                ...this.state.project,
                project: res.data,
                loading: false
            });
            console.log(res.data);
        })
        .catch(err => console.log(err));
}
render () {
    const reqType = this.props.match.params.reqType;
    this.form = this.state.loading === false ?
        <FormLayout
            reqType={reqType}
            articleID={this.props.match.params.projectID}
            project={this.state.project}
            edit={true}
        />
        : <p>loading...</p>;
    return this.form;
}
}
export default EditProject;
