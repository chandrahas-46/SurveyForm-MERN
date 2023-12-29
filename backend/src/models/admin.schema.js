
import mongoose from "mongoose";

export const adminSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

// export class AdminModel {
//     constructor(name, email, password) {
//         this.name = name;
//         this.email = email;
//         this.password = password;
//     }

//     static add(name, email, password){
//         const newUser = new AdminModel(name, email, password);
//         users.push(newUser);
//     }

//     static isValidUser(email, password){
//         const result = users.find((u) => u.email==email && u.password==password);
//         return result;
//     }
// }

// var users = [];