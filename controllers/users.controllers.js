import User from "../models/users.model.js";
import { securePassword } from "../utils/crypto.js";

export const getUsers = async(req, res)=>{
    const users = await User.find()
    res.json (users)

}
export const getUser = async(req, res)=>{
    const id = req.params.id
    const user = await User.findById(id)
    res.json(user)
}
export const postUser = async(req, res)=>{
    const {name,username, password}= req.body
    const user = new User({
        name:name, 
        userName:username,
        password: securePassword(password)
    })
    await user.save()
    res.json(user)

}
export const putUser = async(req, res)=>{
    const {name, username, password} = req.body;
    const updateData = {name, username};
    if (password) updateData.password = securePassword(password);
    
    const user = await User.findByIdAndUpdate(req.params.id, updateData, {new:true})
    res.json(user)


}
export const delUser = async(req, res)=>{
    await User.findByIdAndDelete(req.body.id)
    res.json({eliminated: "true"})
}

// Consulta a la base de datos para migrar la contraseña de un usuario específico
export const migrateUser = async (req, res) => {
    const { username } = req.body;
    const user = await User.findOne({ userName: username });
    if (user && user.password.length < 80) {
        user.password = securePassword(user.password);
        await user.save();
        return res.json({ message: "Password hashed", user: user.userName });
    }
    res.json({ message: "User not found or already hashed" });
};


