import "./env.js";
import express from 'express';
import cors from 'cors';
import {connectToDB} from './src/config/mongooseConfig.js';
// import surveyRouter from "./src/routes/surveyForm.routes.js";
// import adminRouter from "./src/routes/admin.routes.js";
import SurveyController from "./src/controllers/surveyForm.controller.js";
import AdminController from "./src/controllers/adminController.js";

const adminController = new AdminController();
const surveyController = new SurveyController();

const app = express();
app.use(cors());
app.use(cors(
    {
        origin: ["https://survey-form-mern-frontend.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
));
app.use(express.json());

// app.use("/", adminRouter);
// app.use("/api", surveyRouter);
app.get("/", (req, res) => {
    res.json("Hello, Welcome to Servey App");
})

app.post('/register', adminController.postRegister);
app.post('/login', adminController.postLogin);
app.post('/api/surveys', surveyController.createSurvey);
app.get('/api/surveys', surveyController.getAllSurveys);

// 4. Middleware to handle 404 requests
app.use((req, res) => {
    res.status(404).send("API not found. Please check your documentation for more information");
})

//server listening
app.listen(3001, (err) => {
    if(err) console.log("server error on port 3001");
    console.log('Server is running at 3001');
    connectToDB();
})
