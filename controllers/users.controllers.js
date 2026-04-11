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
    const id = res.params.id;
    const user = await User.findById(id);
    if(req.body.name != null){
        user.name = req.body.name;
    }
    if(req.body.username != null){
        user.username= req.body.username;
    }
    if(req.body.password != null){
        user.password= req.body.password;
    }
    user.save();
    res.json(user);

}
export const delUser = async(req, res)=>{
    const us = User.findById(req.id);
    if(us != null){
        User.delUser(req.id);
        res.json({eliminated:req.id});
    }else {
        res.json({error:"id_not_found"});
    }
}


