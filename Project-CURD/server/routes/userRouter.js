const express = require("express");
const userModel = require("../models/Users")

const router = express.Router()

// get the data from users

router.post("/", async (req, res) => {
    const { name, age, email } = req.body
    // const userModel = require("./models/Users")

    try {
        const userADD = await userModel.create({
            name: name,
            age: age,
            email: email
        })
        res.status(201).json(userADD)
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error })
    }
})
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXget the data from users


// Read operatar

router.get("/", async (req, res) => {
    try {
        const showAll = await userModel.find()
        res.status(200).json(showAll)
    } catch (error) {
        res.status(500).json({ message: error })
    }
})


// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX Read operatar


// get sigle user Operation
router.get("/:id", async (req, res) => {
    const { id } = req.params
    try {
        const sigleUser = await userModel.findById({ _id: id })
        res.status(201).json(sigleUser)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error })
    }
})

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX get sigle user Operation

// delate operator

router.delete("/:id", async (req, res) => {
    const { id } = req.params
    try {
        const delateUser = await userModel.findByIdAndDelete({ _id: id })
        res.status(200).json(delateUser)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error })
    }
})
// delate operator

// Update operator
router.patch("/:id", async (req, res) => {
    const { id } = req.params
    const { name, age, email } = req.body
    try {
        const updateUser = await userModel.findByIdAndUpdate(id, req.body, { new: true, })
        res.status(200).json(updateUser)
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXUpdate operator

module.exports = router