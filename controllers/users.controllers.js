import User from "../models/users.model.js";

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
        password:password
    })
    user.save()
    res.json(user)

}
export const putUser = async(req, res)=>{
    const {name, username, password} = req.body;
    const user = await User.findByIdAndUpdate(req.params.id, {name,username, password}, {new:true})
    res.json(user)


}
export const delUser = async(req, res)=>{
    await User.findByIdAndDelete(req.body.id)
    res.json({eliminated: "true"})
}


