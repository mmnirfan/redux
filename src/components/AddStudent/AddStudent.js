import React, { Component } from 'react';
import Aux from '../../hoc/Auxi';
import './AddStudent.css';

class AddStudent extends Component {
    state = {
        name: '',
        classs: ''
    }

    nameChangedHandler = (event) => {
        this.setState({name: event.target.value});
    }

    classChangedHandler = (event) => {
        this.setState({classs: event.target.value});
    }

    render () {
        return (
            <Aux className="AddStudent">
                <div className="col-sm-8 col-12 col-md-6 col-lg-6 mt-2">
                    <input 
                        className="form-control"
                        type="text" 
                        placeholder="Name" 
                        onChange={this.nameChangedHandler}
                        value={this.state.name} />
                </div>
                <div className="col-sm-8 col-12 col-md-6 col-lg-6 mt-2">
                    <input
                        className="form-control" 
                        type="text" 
                        placeholder="Class"
                        onChange={this.classChangedHandler}
                        value={this.state.classs} />
                </div>
                <div className="col-sm-8 col-7 col-md-6 col-lg-6 mt-3">
                    <button className="btn btn-success" onClick={() => this.props.studentAdded(this.state.name, this.state.classs)}>Add Student</button>
                </div>
                
            </Aux>
        );
    }
}

export default AddStudent;