import User from '../model/user.mode.js'
import bcryptjs from 'bcryptjs';
export const auth = async (req,res)=>{
    const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === '' ||
    email === '' ||
    password === ''
  ) {
    return res.status(400).json({message : "All files are Required"})
  }
  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password : hashedPassword,
  });
  try {
    await newUser.save();
    res.json('Signup successful');
  } catch (error) {
    res.status(500).json({message : error.message})
  }
}