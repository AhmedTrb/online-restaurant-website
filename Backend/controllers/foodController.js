import foodModel from "../models/foodModel.js";
import fs from 'fs'


// add food item
const addFood = async (req,res)=>{
    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try {
        await food.save();
        res.json({success:true,message:"food added"})
    } catch (error){
        console.log(error);
        res.json({success:false,message:`${error}`})
    }
}


// all food list 
const listFood = async(request,response)=> {
    try {
        const foods = await foodModel.find({}) ;
        response.json({success:true,data:foods});
    } catch (error){
        console.log(error);
        response.json({success:false,message:`error occured ${error}`})
    }
}

// remove food item
const removeFood = async (request,response)=>{
    try {
        const food = await foodModel.findById(request.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{});

        await foodModel.findByIdAndDelete(request.body.id);
        response.json({success:true,message:"food removed"});
    } catch (error){
        console.log(error);
        response.json({success:false,message:"error"})
    }
}

export {addFood,listFood,removeFood}