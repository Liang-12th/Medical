import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoadingGender: false,
    genders: [ ],
    roles: [ ],
    position: [ ],
    users:[ ],
    topDoctors:[ ],
}
const adminReducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.FETCH_GENDER_START:
            //console.log('check action data ', action);
            state.isLoadingGender = true;
            return {
                ...state,
            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            state.genders = action.data;
            state.isLoadingGender = false;
            //console.log('check action data ', state);
            return {
                ...state, 
            }
        case actionTypes.FETCH_GENDER_FAILDED:
            //console.log('check action data ', action)
            state.isLoadingGender = false;
            state.genders = [ ];
            return {
                ...state,
            }

            case actionTypes.FETCH_POSITION_SUCCESS:
                state.position = action.data;
                //console.log('check action data ', state);
                return {
                    ...state, 
                }
            case actionTypes.FETCH_POSITION_FAILDED:
                //console.log('check action data ', action)
                state.position = [ ];
                return {
                    ...state,
                }
    
                case actionTypes.FETCH_ROLE_SUCCESS:
                    state.roles = action.data;
                    //console.log('check action data ', state);
                    return {
                        ...state, 
                    }
                case actionTypes.FETCH_ROLE_FAILDED:
                    //console.log('check action data ', action)
                    state.roles = [ ];
                    return {
                        ...state,
                    }
                
                case actionTypes.FETCH_ALL_USERS_SUCCESS: 
                state.users = action.users;
                    return {
                        ...state
                    }
                    case actionTypes.FETCH_ALL_USERS_FAILDED: 
                    state.users=[ ];
                    return {
                        ...state
                    }
                    case actionTypes.FETCH_TOP_DOCTORS_SUCCESS: 
                    state.topDoctors= action.dataDoctors;
                    return {
                        ...state
                    }
                    case actionTypes.FETCH_TOP_DOCTORS_FAILDED: 
                    state.topDoctors= [ ];
                    return {
                        ...state
                    }
        
        default:
            return state;
    }
}

export default adminReducer;