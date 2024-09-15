import User from "../modal/usermodal.js";
import bcryptjs from "bcryptjs";

const signup = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashPassword = await bcryptjs.hash(password, 10);
    const createUser = new User({
      fullName,
      email,
      password: hashPassword
    });
    await createUser.save();
    res.status(201).json({ message: "User created successfully",user:{
      _id:createUser._id,
      fullName:createUser.fullName,
      email:createUser.email,
    } });
  } catch (err) {
    console.log("Error: " + err.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    // Ensure user exists and compare passwords
    if (!user || !(await bcryptjs.compare(password, user.password))) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Respond with success and user info
    res.status(200).json({
      message: "Login successful",
      user: {
        _id: user._id,
        fullName: user.fullName,
        email: user.email
      }
    });
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export { signup, login };
