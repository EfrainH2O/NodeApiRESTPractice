import User from "../models/users.model.js";

export const getUser = async(req, res)=>{
    const users = await User.find()
    res.json (users)

}
export const getUsers = async(req, res)=>{
    const id = res.params.id
    const user = await User.findById(id)
    res.json(user)
}
export const postUser = async(req, res)=>{
    const {name,username, password}= req.body
    const user = new User({
        name:name, 
        username:username,
        password:password
    })
    user.save()
    res.json(user)

}
export const putUser = async(req, res)=>{

}
export const delUser = async(req, res)=>{

}


