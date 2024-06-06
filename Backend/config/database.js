import mongoose from "mongoose"

export const connectDB = async ()=> {
    await mongoose.connect('mongodb+srv://ahmedtrabelsi:TESTtest120@cluster0.jyat7ma.mongodb.net/food-delivery').then(()=>console.log('db connected'));
}