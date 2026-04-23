import User from "../models/users.model.js";

export const logInFunction = async (req, res)=>{

    const {username, password} = req.body;
    const user = await User.findOne({userName:username})
    if (!user) {
        return res.status(404).json({ isLogin: false, msg: "User not found" });
    }
    if(user.password === password){
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