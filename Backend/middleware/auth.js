import jwt from "jsonwebtoken"

const authMiddleware = async (req,res,callBack)=>{
    const {token }= req.headers;
    if (!token){
        return res.json({success:false,message:"not authorized login again"});
    }

    try {
        const tokenDecode = jwt.verify(token,process.env.JWT_SECRET);
        req.body.userId = tokenDecode.id;
    } catch (error){
        console.log(error);
        res.json({success:false,message:error});
    }
}

export default authMiddleware ;