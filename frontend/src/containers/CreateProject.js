import React, { Component } from 'react'
import FormLayout from '../components/Form'

class CreateProject extends Component  {


  render(){
    const reqType = this.props.match.params.reqType;

    return(

      <FormLayout
      reqType={reqType}
      articleID={null}
      />
    )
  }
}
export default CreateProject;
