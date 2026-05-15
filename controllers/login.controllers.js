import User from "../models/users.model.js";
import { verifyPassword } from "../utils/crypto.js";

export const logInFunction = async (req, res)=>{

    const {username, password} = req.body;
    const user = await User.findOne({userName:username})
    if (!user) {
        return res.status(404).json({ isLogin: false, msg: "User not found" });
    }
    
    if(verifyPassword(password, user.password)){
        res.json({
            isLogin:true,
            msg: "Ok",
            user:user
        })
    }else{
        res.status(404).json({
            isLogin:"false",
            msg:"Wrong",
            user:{}
        })
    }

}