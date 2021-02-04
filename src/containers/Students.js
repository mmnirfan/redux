import React, { Component } from 'react';
import { connect } from 'react-redux';
import Student from '../components/Student/Student';
import AddStudent from '../components/AddStudent/AddStudent';
import * as actionTypes from '../store/actions';

class Students extends Component {
    
    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col m-3">
                        <AddStudent studentAdded={this.props.onAddedStudent} />
                    </div>
                    <div className="col" m-3>
                        {this.props.std.map(student => (
                            <Student 
                                key={student.id}
                                name={student.name} 
                                classs={student.classs} 
                                clicked={() => this.props.onRemovedStudent(student.id)}/>
                        ))}
                    </div>
                </div>
                
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        std: state.students
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddedStudent: (name, classs) => dispatch({type: actionTypes.ADD_STUDENT, studentData: {name: name, classs: classs}}),
        onRemovedStudent: (id) => dispatch({type: actionTypes.REMOVE_STUDENT, studentId: id})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Students);