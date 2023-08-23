
import db from "../models/index";
import CRUDServices from "../services/CRUDServices"
import user from "../models/user";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
   // console.log(data);
    return res.render("homePage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (error) {
    console.log(e);
  }
};

let getCRUD = async(req, res) => {
    return res.render("crud.ejs");
};

let postCRUD = async(req,res) =>{
  try {
    let message = await CRUDServices.createNewUser(req.body);
    //console.log(message);
    return res.send(" from post CRUD ");
  } catch (error) {
    console.log(e)
  }
}

let displayGetCrud = async(req,res)=>{
  try {
    let data = await CRUDServices.getAllUser();
    //console.log(data);
    return res.render("displayUser.ejs", {
      dataTable :data,
    });
  } catch (error) {
    console.log(e)
  }
}

let editCrud = async(req,res)=>{
  let userId = req.query.id;
  //console.log(userId);
  if(userId){
    let userData = await CRUDServices.getUserByInfor(userId);
    // check use data not found.
    // let userData
    // console.log(userData);
    return res.render("editCrud.ejs",{
      user : userData,
    });
  }else{
    return res.send('User not found');
  }
}

let putCrud = async (req,res)=>{
  try {
    let data = req.body;
    let allUsers = await CRUDServices.updateUserData(data);
    return res.render("displayUser.ejs",{
      dataTable : allUsers,
    })    
  } catch (error) {
    console.log(e);
  }
}

let deleteCrud = async(req,res)=>{
  let id = req.query.id;
  if(id){
  await CRUDServices.deleteUserById(id);
  return res.send("user was delete")
  }else{
    return res.send("user no found");
  }
}


module.exports = {
  getHomePage: getHomePage,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
  displayGetCrud:displayGetCrud,
  editCrud:editCrud,
  putCrud:putCrud,
  deleteCrud:deleteCrud,

};
