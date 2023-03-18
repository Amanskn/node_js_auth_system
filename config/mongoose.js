const mongoose=require("mongoose");

const connectDB = async (DATABASE_URL)=>{
    try {
        // const DB_OPTIONS={
        //     dbName:'Aman_Node_Auth_DB'
        // }
        // await mongoose.connect(DATABASE_URL,DB_OPTIONS);
        await mongoose.connect(DATABASE_URL);
        console.log("Connected successfully to the database");
        
    } catch (error) {
        console.log("Error in connecting to the database",error);
    }
}

module.exports=connectDB