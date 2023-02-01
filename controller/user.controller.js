const express = require("express");
const Kws = require("../models/user.model");
const router = express.Router();

router.get("", async (req, res) => {
    try {
        const kws = await Kws.find();
        return res.send(kws);
    } catch (error) {
        return res.send(error.message);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const kws = await Kws.findById(req.params.id);
        return res.send(kws);
    } catch (error) {
        return res.send(error.message);
    }
});
router.post("", async (req, res) => {
    const user = new Kws(req.body);
    try {
        const inserteduser = await user.save();
        return res.send(inserteduser);
    } catch (error) {
        return res.send(error.message);
    }
});
router.patch("/:id", async (req, res) => {
    try {
        const kws = await Kws.updateOne({ _id: req.params.id }, { $set: req.body });
        return res.send(kws);
    } catch (error) {
        return res.send(error.message);
    }
});
router.delete("/:id", async (req, res) => {
    try {
        const kws = await Kws.deleteOne({ _id: req.params.id });
        return res.send(kws);
    } catch (error) {
        return res.send(error.message);
    }
});
module.exports = router;

// export const getUsers = async (req, res) => {
//     try {
//         const users = await Kws.find();
//         res.json(users);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// }

// export const getUserById = async (req, res) => {
//     try {
//         const user = await Kws.findById(req.params.id);
//         res.json(user);
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
// }

// export const saveUser = async (req, res) => {
//     const user = new Kws(req.body);
//     try {
//         const inserteduser = await user.save();
//         res.status(201).json(inserteduser);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// }

// export const updateUser = async (req, res) => {
//     try {
//         const updateduser = await Kws.updateOne({ _id: req.params.id }, { $set: req.body });
//         res.status(200).json(updateduser);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// }

// export const deleteUser = async (req, res) => {
//     try {
//         const deleteduser = await Kws.deleteOne({ _id: req.params.id });
//         res.status(200).json(deleteduser);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// }
