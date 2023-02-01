import Kws from "../models/UserModel.js";
 
export const getUsers = async (req, res) => {
    try {
        const users = await Kws.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
 
export const getUserById = async (req, res) => {
    try {
        const user = await Kws.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
 
export const saveUser = async (req, res) => {
    const user = new Kws(req.body);
    try {
        const inserteduser = await user.save();
        res.status(201).json(inserteduser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
export const updateUser = async (req, res) => {
    try {
        const updateduser = await Kws.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updateduser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
export const deleteUser = async (req, res) => {
    try {
        const deleteduser = await Kws.deleteOne({_id:req.params.id});
        res.status(200).json(deleteduser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}