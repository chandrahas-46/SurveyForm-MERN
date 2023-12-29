import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// dotenv.config();

// const url = process.env.DB_URL;
// console.log("URL: ", url);

export const connectToDB = async()=>{
	try{
		await mongoose.connect('mongodb+srv://chandrahaspatel32:4ZmwGjkWW3Djynm8@cluster0.mfyiv5m.mongodb.net/surveyForm?retryWrites=true&w=majority', {
			useNewUrlParser: true,
      		useUnifiedTopology: true
		});
		console.log("Mongodb connected using mongoose successfully!")
	}
	catch(err){
		console.log("Error while connecting to db");
		console.log(err);
	}
}
