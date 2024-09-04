// for db connection .// 

// import mongoose // 

import mongoose from 'mongoose'

const connectDb = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        //after connection // 

        console.log(`connected to db`)
    }
    catch(error){
        console.log(`error while connecting to db ${error.message}`)
        process.exit()
    }
}
export default connectDb;