import actionTypes from './actionTypes';
import { getAllCodeService, createNewUserService, getAllUser, deleteUserService, editUserService,getTopDoctorHomeServices } from '../../services/userService';
import { toast } from 'react-toastify'
// export const fetchGenderStart = ( ) => ({
//     type: actionTypes.FETCH_GENDER_START
// })
export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: actionTypes.FETCH_GENDER_START
            })
            let res = await getAllCodeService("GENDER");
            if (res && res.errCode === 0) {
                console.log('check get state in adminaction', getState)
                dispatch(fetchGenderSuccess(res.data))
            } else {
                dispatch(fetchGenderFaided())
            }
        } catch (error) {
            dispatch(fetchGenderFaided())
            console.log(error)
        }
    }
}

export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})

export const fetchGenderFaided = () => ({
    type: actionTypes.FETCH_GENDER_FAILDED
})

export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData
})

export const fetchPositionFaided = () => ({
    type: actionTypes.FETCH_POSITION_FAILDED
})

export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData
})

export const fetchRoleFaided = () => ({
    type: actionTypes.FETCH_ROLE_FAILDED
})

export const fetchPositionStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("POSITION");
            if (res && res.errCode === 0) {
                //console.log('check get state in adminaction', getState)
                dispatch(fetchPositionSuccess(res.data))
            } else {
                dispatch(fetchPositionFaided())
            }
        } catch (error) {
            dispatch(fetchPositionFaided())
            console.log(error)
        }
    }
}

export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("ROLE");
            if (res && res.errCode === 0) {
                //console.log('check get state in adminaction', getState)
                dispatch(fetchRoleSuccess(res.data))
            } else {
                dispatch(fetchRoleFaided())
            }
        } catch (error) {
            dispatch(fetchRoleFaided())
            console.log(error)
        }
    }
}

export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewUserService(data);
            //console.log('check create user redux', res)
            if (res && res.errCode === 0) {
                //console.log('check get state in adminaction', getState)
                toast.success('Create New User Succeed!');
                dispatch(saveUserSuccess());
                dispatch(fetchAllUserStart());
            } else {
                dispatch(saveUserFailed())
            }
        } catch (error) {
            dispatch(saveUserFailed())
            console.log(error)
        }
    }
}

export const saveUserSuccess = (data) => ({
    type: actionTypes.CREATE_USER_SUCCESS,
})

export const saveUserFailed = () => ({
    type: actionTypes.CREATE_USER_FAILDED,
})

export const fetchAllUserSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_USERS_SUCCESS,
    users: data,
})

export const fetchAllUserFailed = () => ({
    type: actionTypes.FETCH_ALL_USERS_FAILDED,
})

export const fetchAllUserStart = () => {
    return async (dispatch, getState) => {

        try {
            let res = await getAllUser('ALL');
            if (res && res.errCode === 0) {
                dispatch(fetchAllUserSuccess(res.users.reverse()))
            } else {
                dispatch(fetchAllUserFailed())
            }
        } catch (error) {
            dispatch(fetchAllUserFailed())
            console.log(error)
        }
    }
}

export const deleteUser = (userId) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteUserService(userId);
            //console.log('check create user redux', res)
            if (res && res.errCode === 0) {
                //console.log('check get state in adminaction', getState)
                toast.success('delete User Succeed!');
                dispatch(deleteUserSuccess());
                dispatch(fetchAllUserStart());
            } else {
                toast.error('delete User Failed!');
                dispatch(deleteUserFailed())
            }
        } catch (error) {
            dispatch(deleteUserFailed())
            console.log(error)
        }
    }
}

export const deleteUserSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS,
})

export const deleteUserFailed = () => ({
    type: actionTypes.DELETE_USER_FAILDED,
})



export const editUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await editUserService(data);
            //console.log('check create user redux', res)
            if (res && res.errCode === 0) {
                //console.log('check get state in adminaction', getState)
                toast.success('edit User Succeed!');
                dispatch(editUserSuccess());
                dispatch(fetchAllUserStart());
            } else {
                toast.error('delete User Failed!');
                dispatch(editUserFailed())
            }
        } catch (error) {
            toast.error('edit User Failed!');
            dispatch(editUserFailed())
            console.log(error)
        }
    }
}

export const editUserSuccess = () => ({
    type: actionTypes.EDIT_USER_SUCCESS
})

export const editUserFailed = () => ({
    type: actionTypes.EDIT_USER_FAILDED
})

export const fetchTopDoctor = ( ) => {
    return async (dispatch, getState) =>{
        try {
            let res = await getTopDoctorHomeServices(' ');
            if(res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTORS_SUCCESS,
                    dataDoctors : res.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTORS_FAILDED
                })
            }
        } catch (error) {
            console.log('FETCH_TOP_DOCTOR_FAILED', error)
            dispatch({
                type: actionTypes.FETCH_TOP_DOCTORS_FAILDED
            })
        }
    }
}

// let res1 = await getTopDoctorHomeServices(3);