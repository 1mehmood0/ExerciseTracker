const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');//connect to mongoDB

require('dotenv').config();

const app=express();
const port=process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//conncet to mongo DB
const uri=process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true});
const connection=mongoose.connection;
connection.once('open',() => {console.log("MongoDB database connection established successfully");
})

const exercisesRouter=require('./Routes/exercises');
const usersRouter=require('./Routes/users');

app.use('/exercises',exercisesRouter);
app.use('/users',usersRouter);


app.listen(port,() => {
    console.log(`Server is running on port: ${port}`);

}); 