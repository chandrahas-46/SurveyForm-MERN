// 1. Import express.
import express from 'express';
import SurveyController from '../controllers/surveyForm.controller.js';

// 2. Initialize Express router.
const surveyRouter = express.Router();
const surveyController = new SurveyController();


// All the paths to the controller methods.
surveyRouter.post('/surveys', surveyController.createSurvey);
surveyRouter.get('/surveys', surveyController.getAllSurveys);


export default surveyRouter;
