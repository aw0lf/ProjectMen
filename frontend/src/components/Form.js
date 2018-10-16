import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';
import Project from './Project';
import CustomeDatePicker from './DatePicker';
import { Link } from 'react-router-dom';
const { TextArea } = Input;

const FormItem = Form.Item;

class FormLayout extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            formVisable: true,
            summaryVisable: false,
            title: this.props.edit ? this.props.project.title : '',
            description: this.props.edit ? this.props.project.description : '',
            start_date: this.props.edit ?  this.props.project.start_date : '2018-12-11',
            end_date: this.props.edit ?  this.props.project.end_date : '2018-12-12',
            status: this.props.edit ? this.props.project.status : 'new'
        };
    }
    componentDidMount () {
        if (this.props.edit == true) {
            const id = this.props.articleID;
            axios.get(`http://127.0.0.1:8000/api/${ id }`)
                .then(res => {
                    this.setState({
                        ...this.state.project,
                        project: res.data
                                        });
                    console.log(res.data);
                });
        }
    }

handleFormSubmite = (e, reqType, articleID) => {
    const { title, description, start_date, end_date, status } = this.state;
    const id = this.props.articleID;

    switch (reqType) {
        case 'post':
            return axios.post('http://127.0.0.1:8000/api/', {
                title: title,
                description: description,
                start_date: start_date,
                end_date: end_date,
                status: status
            })
                .then(res => console.log(res))
                .catch(err => console.log(err));
        case 'put':
            return axios.put(`http://127.0.0.1:8000/api/${ id }/`, {
                title: title,
                description: description,
                start_date: start_date,
                end_date: end_date,
                status: status
            });
        default: this.state
            .then(res => console.log(res))
            .catch(err => console.log(err));
            this.props.history.push('/');
            this.forceUpdate();
    }

}

handlerInputChange = (value, propName) => {
    this.setState({
        ...this.state,
        [propName]: value
    });
}

formatDate = (date) => {
    const options = { year: 'numeric', month: 'numeric', day: '2-digit' };
    const _resultDate = new Intl.DateTimeFormat('en-GB', options).format(date);

    const formatedDate = _resultDate.replace(/\//ig, '-');
    return formatedDate;
}

formatDateToPicker = (date) => {
    const options = { year: 'numeric', month: 'numeric', day: '2-digit' };

console.log(options) 
     return "2018-11-12";
}

handlerDateChange = (start_date, end_date) => {
    const start = this.formatDate(start_date);
    const end = this.formatDate(end_date);
    this.setState({
        ...this.state,
        start_date: start,
        end_date: end
    });
}
render () {
    console.log(this.state.title);
    console.log(typeof this.props.project.start_date)
    return (
        <div>
            {this.state.formVisable === true ?
                <Form>
                    <FormItem label="Form Layout">
                    </FormItem>
                    <FormItem label="title">
                        <Input name='title' value={this.state.title} onChange={e => this.handlerInputChange(e.target.value, 'title')} placeholder="your title..." />
                    </FormItem>
                    <FormItem label="description">
                        <TextArea value={this.state.description} onChange={e => this.handlerInputChange(e.target.value, 'description')} rows={6} name='description' placeholder="some description..." />
                    </FormItem>

                    <FormItem label="select date">
                        <CustomeDatePicker defaultStart={this.state.start_date} defaultEnd={this.state.end} onChange={(start_date, end_date) => this.handlerDateChange(start_date, end_date)}/>
                    </FormItem>
                    <FormItem>
                        <Link to='/'><Button type='submite' htmlType='Link'>Canel</Button>
                        </Link>
                        <Button type="primary" onClick={() => { this.setState({ ...this.state, formVisable: false, summaryVisable: true }); }}>Continue</Button>
                    </FormItem>
                </Form> : null }

            {this.state.summaryVisable === true ? <Form onSubmit={e => this.handleFormSubmite(
                e,
                this.props.reqType,
                this.props.articleID)}>
                <Project
                    title={this.state.title}
                    description={this.state.description}
                    start_date={this.state.start_date}
                    end_date={this.state.end_date}
                    status='new'
                />
                <Button style={{ margin: '15px' }}type='default' onClick={() => this.setState({ ...this.state, formVisable: true, summaryVisable: false })}>Back</Button>
                <Button style={{ margin: '15px' }} type="primary" htmlType="submit">Create</Button>
            </Form> : null }
        </div>
    );
}
}

export default FormLayout;
