import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
import doctorController from "../controllers/doctorController";

let router = express.Router();


let initWebRoutes = (app) =>{
    router.get("/",homeController.getHomePage);
    router.get("/crud",homeController.getCRUD);
    router.post("/postcrud", homeController.postCRUD);
    router.get("/getcrud",homeController.displayGetCrud);
    router.get("/editcrud",homeController.editCrud);
    router.post("/putcrud",homeController.putCrud);
    router.get("/deletecrud",homeController.deleteCrud);
    router.post("/api/login",userController.handleLogin);
    router.get("/api/getAllUser",userController.handleGetAllUser);
    router.post("/api/createNewUser",userController.handleCreateNewUser); 
    router.delete("/api/deleteUser",userController.handleDeleteUser);
    router.put("/api/editUser",userController.handleEditUser);
    router.get("/api/allCode",userController.getAllCode);
    router.get("/api/getDoctorHome",doctorController.getTopDoctorHome);
    return app.use("/",router);
}

module.exports = initWebRoutes;