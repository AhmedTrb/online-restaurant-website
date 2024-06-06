import express from "express"
import cors from "cors"
import { connectDB } from "./config/database.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import "dotenv/config"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"

//app config

const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())
app.get("/",(request,response)=>{
    response.send("API working");
})

// databse connection
connectDB();


//API endpoint
app.use("/api/food",foodRouter);
app.use("/images",express.static("uploads"));
app.use("/api/user",userRouter);
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter);

app.listen(port,()=>{
    console.log(`server started at http://localhost:${port}`);
})


// mongodb+srv://ahmedtrabelsi:TESTtest120@cluster0.jyat7ma.mongodb.net/?
// retryWrites=true&w=majority&appName=Cluster0