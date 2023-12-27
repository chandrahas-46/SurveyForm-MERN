// 1. Import express.
import express from 'express';
import SurveyController from '../controllers/surveyForm.controller.js';
import cors from 'cors';

// 2. Initialize Express router.
const surveyRouter = express.Router();
const surveyController = new SurveyController();

surveyRouter.use(cors(
    {
        origin: ["https://survey-form-mern-frontend.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
));


// All the paths to the controller methods.
surveyRouter.post('/surveys', surveyController.createSurvey);
surveyRouter.get('/surveys', surveyController.getAllSurveys);


export default surveyRouter;
