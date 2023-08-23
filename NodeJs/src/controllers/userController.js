import userServices from "../services/userServices"

let handleLogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: "Missing inputs parameter",
        })
    }
    let userData = await userServices.handleUserLogin(email, password);
    //console.log(userData)
    // check email and compare password
    // return userInfor and access token JWT 
    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        user: userData.user ? userData.user : {}
    })
}
//  check 
let handleGetAllUser = async (req, res) => {
    // select all user or id user;
    let id = req.query.id;
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: "missing required parameters",
            users: [],
        })
    }
    let users = await userServices.getAllUser(id);
   // console.log(users)
    return res.status(200).json({
        errCode: 0,
        errMessage: 'Ok',
        users,
    })  
}
// get user 
let handleCreateNewUser = async (req, res) => {
    let message = await userServices.createNewUser(req.body);
    return res.status(200).json(message);
}

let handleDeleteUser = async (req, res) => {
    if (!req.body.id) {
        return res.status(404).json({
            errCode: 1,
            errMessage: `Missing requier paramater`
        })
    }
    let message = await userServices.deleteUser(req.body.id);
    return res.status(200).json(message);
}

let handleEditUser = async (req, res) => {
    let data = req.body;
    let message = await userServices.updateUserData(data);
    return res.status(200).json(message);
}

let getAllCode = async (req, res) => {
    try {
        let data = await userServices.getAllCodeService(req.query.type);
        return res.status(200).json(data)
    } catch (error) {
        console.log('get all code error', error)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server',
        })
    }
}

module.exports = {
    handleLogin: handleLogin,
    handleGetAllUser: handleGetAllUser,
    handleCreateNewUser: handleCreateNewUser,
    handleDeleteUser: handleDeleteUser,
    handleEditUser: handleEditUser,
    getAllCode:getAllCode,
}