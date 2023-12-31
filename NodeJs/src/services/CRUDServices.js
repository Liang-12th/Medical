import bcrypt, { hash } from "bcryptjs";
import db from "../models/index";
const salt = bcrypt.genSaltSync(10);

let createNewUser =async(data)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.password);
            await db.User.create({
                email: data.email,
                password : hashPasswordFromBcrypt,   
                firstName: data.firstName,
                lastName: data.lastName,
                address : data.address,
                gender : data.gender === '1' ? true : false,
                roleId : data.roleId,
                phonenumber : data.phonenumber,
            })
            resolve("you was created a new user");
        } catch (error) {
            reject(e);
        }
    })
}

let hashUserPassword = (password) =>{
    return new Promise(async(resolve,reject)=>{
        try {
           let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);            
        } catch (error) {
            reject(e)
        }
 
    })
}

let getAllUser = async() =>{
    return new Promise(async(resolve,reject)=>{
        try {
            let users = await db.User.findAll({
                raw:true
            });
            resolve(users);
        } catch (error) {
            reject(e)
        }
    })
}

let getUserByInfor = async(userId)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let user = await db.User.findOne({
                where : {id:userId},
                raw : true,
            })
            if(user){
                resolve(user);
            }else{
                reject({});
            };
        } catch (error) {
            reject(e);
        }
    })
}

let updateUserData =async(data)=>{
    return new Promise (async(resolve,reject)=>{
        try {
            let user = await db.User.findOne({
                where :{id:data.id},
            })
            if(user){
                user.email = data.email;
                user.firstName = data.firstName;
                user.lastName = data.lastName;
                user.address = data.address;
                user.phonenumber = data.phonenumber;

                await user.save();
                let allUsers = await db.User.findAll();
                resolve(allUsers);
            }else{
                resolve();
            }
        } catch (error) {
            reject(e);
        }
    })
}

let deleteUserById = async(userId)=>{
    return new Promise(async(resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where:{id:userId},
            })
            if(user){
                await user.destroy();
            }
          resolve();// return 
        } catch (error) {
            reject(e);
        }
    })
}

module.exports = {
    createNewUser:createNewUser,
    getAllUser:getAllUser,
    getUserByInfor:getUserByInfor,
    updateUserData:updateUserData,
    deleteUserById:deleteUserById,
}