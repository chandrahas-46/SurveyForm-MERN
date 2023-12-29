import mongoose from "mongoose";
import { adminSchema } from "../models/admin.schema.js"; 
// creating model from schema.
const AdminModel = mongoose.model("Admin", adminSchema);

export default class AdminController{
    async postRegister(req, res){
        try{
            const {name, email, password} = req.body;
            if(name == undefined || email == undefined || password == undefined){
                return res.status(400).send({message: "Please fill all Admin information"});
            }          
            let admin = await AdminModel.create({
                name: name,
                email: email,
                password: password,
            });
            return res.status(201).send({ message: "Registration successfully", AdnimDetails: admin });
        } 
        catch(err){
            console.log(err);
            return res.status(500).send("Something went wrong");
        }
    }

    async postLogin(req, res){
        try{
            const {email, password} = req.body;
            // console.log("Backend Login: ", email, " ", password);
            let admin = await AdminModel.findOne({email: email});
            // console.log("Backend Admin: ", admin);
            if (admin) {
                if(admin.password == password){
                    return res.status(200).send({ message: "success"});
                }
                else {
                    return res.status(400).send({ message: "Password is Incorrect!!"});
                }               
            } 
            else {
                return res.status(400).send({ message: "Admin not Found"});
            }
        }
        catch(err){
            console.log(err);
            return res.status(500).send("Something went wrong");
        }
    }
}

