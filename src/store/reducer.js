import * as actionTypes from './actions';

const initialState = {
    students: []
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_STUDENT:
            const newStudent = {
                id: Math.random(), // not really unique but good enough here!
                name: action.studentData.name,
                classs: action.studentData.classs
            }
            return {
                ...state,
                students: state.students.concat( newStudent )
            }
        case actionTypes.REMOVE_STUDENT:
            return {
                ...state,
                students: state.students.filter(student => student.id !== action.studentId)
            }
    }
    return state;
};

export default reducer;