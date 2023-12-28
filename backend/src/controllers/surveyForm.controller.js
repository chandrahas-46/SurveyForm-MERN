import mongoose from "mongoose";

import { surveySchema } from "../models/surveyForm.schema.js";

// creating model from schema.
const SurveyModel = mongoose.model("Survey", surveySchema);

export default class SurveyController{
    // *********************************** Create a survey ***************************************
    async createSurvey(req, res){
        try{
            const {name, gender, nationality, email, phoneNumber, address, message} = req.body;
            if(name == undefined || email == undefined || message == undefined){
                return res.status(400).send({message: "Survey Can not be created, Please write a Valid Question's title"});
            }          
            let survey = await SurveyModel.create({
                name: name,
                gender: gender,
                nationality: nationality,
                email: email,
                phoneNumber: phoneNumber,
                address: address,
                message: message,
            });
            return res.status(201).send({ message: "Survey Created successfully", surveys: survey });
        } 
        catch(err){
            console.log(err);
            return res.status(500).send("Something went wrong");
        }
    }


    async getAllSurveys(req, res) {
        let survey = await SurveyModel.find({});
        return res.status(200).send({
                  message: "Here, You can find all your Surveys!",
                    surveys: survey,
                });
        // try{
        //     let survey = await SurveyModel.find({});
        //     if (survey) {
        //         return res.status(200).send({
        //           message: "Here, You can find all your Surveys!",
        //           surveys: survey,
        //         });
        //     } 
        //     else {
        //         return res.status(400).send({ message: "Survey not Found, You can add new Survey!!"});
        //     }
        // }
        // catch(err){
        //     console.log(err);
        //     return res.status(500).send("Something went wrong");
        // }
    }
}
