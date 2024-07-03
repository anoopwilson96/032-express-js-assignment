const bcrypt = require('bcrypt')
const saltRounds = 10;
const User = require("../model/userModel")


//to get all users

const getUsers = async (req, res) => {
  try {
  const Users =  await User.find(req.query)
    res.status(200).json(users)

  } catch (error) {
    res.status(404).send('Error: Not found')
  }
}

//get user by ID


const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).exec();
    res.status(200).json(user)
  } catch (error) {
    res.status(404).send('Error: Not found')
  }
}

// add new user

const addUser = async (req, res) => {
  try {
    const userData = req.body
    const user =  new User (userData);
                  await user.save();
    res.status(200).json(user)
  } catch (error) {
    res.status(404).send('Error: Failed to add')
  }
}
// Edit or patch existing user details

const patchUser = async (req, res) => {
 try {
  const updatedUser = await User.findByIdAndUpdate(req.params.userId,req.body, {new:true})

   res.status(200).json(updatedUser)

 } catch (error) {
  res.status(404).send('Error: Failed to update')
 }
}
const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.userId)
    res.status(200).send('Deleted the user')
  } catch (error) {
    res.status(404).send('Error: Failed to delete')
  }
}

module.exports = {
  getUsers,
  getUserById,
  addUser,
  patchUser,
  deleteUser
}