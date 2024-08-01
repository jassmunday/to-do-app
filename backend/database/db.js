import mongoose from "mongoose";
export const dbConnection = (async () => {
    try {
        const response = await mongoose.connect("mongodb+srv://jasmeet2021055:Y05cs8cqU1ecUAwd@cluster0.cahz4t1.mongodb.net/todoDB?retryWrites=true&w=majority&appName=Cluster0");
        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.log("Error while connecting to Database");
    }
})
