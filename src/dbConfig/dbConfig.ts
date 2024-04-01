import mongoose from "mongoose";

export async function connect (){
    try { 
        mongoose .connect(process.env.MONGO_URI!)
        const connection = mongoose.connection 

        connection.on('connected',() =>{
            console.log('MongoDB Connectedd')
        })

        connection.on('error',(err) =>{
            console.log('MongoDB Connextion Error, Please Make Sure DB up is running :  '+ err)
            process.exit()
            
        })
    } catch (error) {
        console.log("Something wents wrong in connecting to BB: "+ error);
        
    }
}