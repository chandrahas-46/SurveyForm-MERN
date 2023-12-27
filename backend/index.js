import "./env.js";
import express from 'express';
import cors from 'cors';
import {connectToDB} from './src/config/mongooseConfig.js';
import surveyRouter from "./src/routes/surveyForm.routes.js";
import adminRouter from "./src/routes/admin.routes.js";

const app = express();
// app.use(cors());
app.use(cors(
    {
        origin: ["https://survey-form-mern-frontend.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
));
app.use(express.json());

app.use("/", adminRouter);
app.use("/api", surveyRouter);
app.get("/", (req, res) => {
    res.json("Hello, Welcome to Servey App");
})

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
