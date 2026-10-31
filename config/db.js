import mongoose from "mongoose";
import "dotenv/config";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
    } catch (err) {
        console.error("Failed connecting to MongoDB.", err);
        process.exit(1);
    }
};

mongoose.connection.on("connected", () => {
    console.log("Successfully connected to MongoDB.");
});

mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error:", err);
});

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected.");
});

export default connectDB;


    