import { Association } from "sequelize";
import db from "../models/index";
import bcrypt from "bcryptjs";
import user from "../models/user";
import { raw } from "body-parser";
const salt = bcrypt.genSaltSync(10);
// check email password form handlePassword (check backend)
let handleUserLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      let isExist = await checkUserEmail(email);
      if (isExist) {
        // user alrealdy exits compare password
        let user = await db.User.findOne({
          attributes: ["email", "roleId", "password","firstName","lastName"],
          where: { email: email },
          raw: true,
        });
        if (user) {
          // compare password
          let check = bcrypt.compareSync(password, user.password); // false
//console.log(check);
          if (check) {
            userData.errCode = 0;
            userData.errMessage = "okela";

            delete user.password;
            userData.user = user;
          } else {
            userData.errCode = 3;
            userData.errMessage = `Wrong password`;
          }
        } else {
          userData.errCode = 2;
          userData.errMessage = `you not found `;
        }
      } else {
        // return error
        userData.errCode = 1;
        userData.errMessage = `your email isn't exits in your systems your try other email`;
      }
      resolve(userData);
    } catch (error) {
      reject(e);
    }
  });
};

// check email && database
let checkUserEmail = (userEmail) => {
  return new Promise(async (reslove, reject) => {
    try {
      let user = await db.User.findOne({
        where: { email: userEmail },
      });
      if (user) {
        reslove(true);
      } else {
        reslove(false);
      }
    } catch (error) {
      reject(e);
    }
  });
};

// check id user with values is Id or ALL
let getAllUser = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = " ";
      if (userId === "ALL") {
        users = await db.User.findAll({
          attributes: {
            exclude: ["password"],
          },
        });
      }
      if (userId && userId !== "ALL") {
        users = await db.User.findOne({
          where: { id: userId },
          attributes: {
            exclude: ["password"],
          },
        });
      }
      resolve(users);
    } catch (error) {
      reject(e);
    }
  });
};

//hash password
let hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPassword = await bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (error) {
      reject(e);
    }
  });
};

// create new user (route=> usercontroller =>userservices )
let createNewUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let check = await checkUserEmail(data.email);
     // console.log(data.email);
      if (check === true) {
        resolve({
          errCode: 1,
          errMessage: "email used in Systems , pls try anothor email",
        });
      } else {
      let hashPasswordFromBcrypt = await hashUserPassword(data.password);
      await db.User.create({
        email: data.email,
        password: hashPasswordFromBcrypt,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        gender: data.gender,
        roleId: data.roleId,
        positionId: data.positionId,
        phonenumber: data.phonenumber,
        image: data.avatar,
      });
      resolve({
        errCode: 0,
        message: "OK",
      });        
      }
    } catch (error) {
      reject(e);
    }
  });
};

let deleteUser = (userId) => {
  return new Promise(async (resolve, reject) => {
    let user = await db.User.findOne({
      where: { id: userId },
      raw: false,
    });
    if (!user) {
      resolve({
        errCode: 2,
        errMessage: `the email int's exist`,
      });
    }
    if (user) {
      await db.User.destroy({
        where: { id: userId },
      });
      resolve({
        errCode: 0,
        message: `the user was deleted`,
      });
    }
  });
};


let updateUserData= (data)=>{
    return new Promise(async(resolve, reject) => {
        try {
            if (!data.id || !data.roleId || !data.positionId || !data.gender){
                resolve({
                    errCode: 2 ,
                    errMessage: ` user not found`
                })
            }
            let user = await db.User.findOne({
                where: {id: data.id},
                raw : false,
            })
            if(user){
                user.email = data.email;
                user.firstName = data.firstName;
                user.lastName = data.lastName;
                user.address = data.address;
                user.roleId = data.roleId;
                user.positionId = data.positionId;
                user.gender = data.gender;
                user.phonenumber = data.phonenumber;
                if(data.avatar) {
                  user.image = data.avatar;
                }
                await user.save();
                resolve ({
                    errCode: 0,
                    message: `user was update` 
                })
            }else {
                resolve({
                    errCode: 1,
                    errMessage: `User't not fount`
                })
            }
        } catch (error) {
            reject(e)
        }
    })
}

let getAllCodeService = (typeInput) =>{
  return new Promise (async(resolve,reject) => {
    try {
      if(!typeInput) {
        resolve ({
          errCode:1,
          errMessage:'Missing required parameter',
        })
      }else{
        let  res = { }
        let allcode = await db.AllCode.findAll({
            where: {type : typeInput}
        });
        res.errCode =0;
        res.data = allcode;
        resolve(res);        
      }
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = {
  handleUserLogin: handleUserLogin,
  getAllUser: getAllUser,
  createNewUser: createNewUser,
  deleteUser: deleteUser,
  updateUserData:updateUserData,
  getAllCodeService:getAllCodeService,
};
