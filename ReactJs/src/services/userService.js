import axios from "../axios"

const handleLoginApi = (userEmail,userPassword) => {
    return axios.post ('/api/login' , {email: userEmail ,password:userPassword});
}
const getAllUser =(inputID)=>{
    return axios.get(`/api/getAllUser?id=${inputID}`,)
}

const createNewUserService =(data) => {
    console.log('check data from usersServices',data)
    return axios.post('/api/createNewUser',data);
}

const deleteUserService =(userId) =>{
    return axios.delete("/api/deleteUser",{
        data:{
            id:userId
        }
    })
}

const editUserService = (inputData) => {
    return axios.put("/api/editUser",inputData)
}

const getAllCodeService = (inputType) => {
    return axios.get(`/api/allCode?type=${inputType}`,)
}
const getTopDoctorHomeServices =( limit) => {
    return axios.get(`/api/getDoctorHome?limit=${limit}`,)
}
export {handleLoginApi ,getAllUser,createNewUserService,deleteUserService,editUserService,getAllCodeService,getTopDoctorHomeServices};
