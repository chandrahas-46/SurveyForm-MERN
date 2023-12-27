// 1. Import express.
import express from 'express';
import AdminController from '../controllers/adminController.js';

// 2. Initialize Express router.
const adminRouter = express.Router();
const adminController = new AdminController();


// All the paths to the controller methods.
adminRouter.post('/register', adminController.postRegister);
adminRouter.post('/login', adminController.postLogin);


export default adminRouter;
