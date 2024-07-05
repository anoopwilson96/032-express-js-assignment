const User = require("../model/userModel")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const cors = require('cors')

//1. login authentication is a POST request

const login = async (req,res)=>{

//2.  get email & password from req.body
const {email,password}=req.body
//3. find user with given email in database
const user = await User.findOne({email:email})
if (!user){
  return res.status(401).send('User Not Found')//if user not found,this response is returned
}
//4. compare its password(but database password is hash)
//so hash req.body(entered password) and compare with database hash password
//copy import bcrypt code from userController(or from bcrypt website)
//get check code bcrypt.compareSync(myPlaintextPassword, hash);
//we use bcrypt.compareSync(myPlaintextPassword, hash) and its tru if password match
// if password not match its false.
const passwordsMatch = bcrypt.compareSync(password,user.password)
//here user.password is hash password and password is from login form(req.body)

//5. send a response back to FE (A JSON WEB Token is send as return)
 if(passwordsMatch){
 //get code for JWT,
 // add user id and email as payload in {}braces 
 // generate a secret key using Node.js’s built-in crypto library [require('crypto').randomBytes(64).toString('hex')]
//with all 
 //const token = jwt.sign({payload},secret key,{expiresIn:'1h'})   (JWT code)

 const token = jwt.sign(
  {_id:user._id,email:user.email},
  process.env.JWT_SECRET_KEY,
  {expiresIn:'1h'});

  res.status(200).cookie('loginToken',token,{httpOnly:true}).send('Login Success') //passwordsMatch is TRUE 
// send back TOKEN as ONLY COOKIE('nameCookie',token,{httpOnly:true})
// httpOnly:true  is given so that no codes or JS can access the cookie with JWT
 }
 else{
  return res.status(401).send('Invalid password')// passwordsMatch is FALSE
 }

}

module.exports = {
  login
}
