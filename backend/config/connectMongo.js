const mongoose = require("mongoose");

const connectMongo = async () => {
    try{
        const connection = await mongoose.connect(
            process.env.MONGO_URI, 
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );

        console.log(`Connected to MongoDB: ${connection.connection.host}`);
    }
    catch(e) {
        console.error(e);
        process.exit(1);
    }
}

module.exports = connectMongo;