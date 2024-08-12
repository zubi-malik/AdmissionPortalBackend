const {connect} = require("mongoose")

const connectDB = async()=>{
    try {
        await connect(process.env.MONGO_URL);
        console.log("Database connected successfully")
    } catch (error) {
        console.error("Database not connected");
    }
}

module.exports = connectDB