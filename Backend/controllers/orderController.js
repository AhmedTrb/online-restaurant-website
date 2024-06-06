import { faSortAmountAsc } from "@fortawesome/free-solid-svg-icons";
import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe"


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


// placing user order
const placeOrder = async (req, res) => {
    try {
        const newOrder = new orderModel({
            userID: req.body.userID,
            items:req.body.items,
            amount:req.body.amount,
            adress:req.body.adress,
        });

        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userID,{cartData:{}});

        const list_items = req.body.items.map((item) => {
            
        }) 

        res.json({success:true,message:"order placed"});
    } catch (error){

    }
}

export {placeOrder}