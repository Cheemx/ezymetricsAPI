import dotenv from "dotenv"
import connectDB from "./db/index.js"
import {router} from "./router.js"

dotenv.config()

connectDB().then(() => {
    router.listen(process.env.PORT || 3000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`);        
    })
}).catch((err) => {
    console.log("MongoDB connection failed or App failed!", err);    
})