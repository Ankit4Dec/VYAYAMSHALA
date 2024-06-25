//*---------------------------------
const { message } = require("prompt");
const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

//? In an Express.js applicatiom. a "controller" refers to a part of your code that is responsible for handling the application's logic. Controllers are typically used to process incoming requests, interact with models (data sources), and send responses back to clients. They help organize your application by separating concerns and following the MVC (Model-View-Controller) design pattern.

//*--------------------------
//      Home Logic
//*--------------------------

const home = async (req, res) => {
  try {
    res
      .status(200)
      .send("First Project Beginning, Using Router and controller again");
  } catch (error) {
    console.log(error);
  }
};

//*--------------------------
//      Register Logic
//*--------------------------

const register = async (req, res) => {
  try {
    // console.log(req.body);
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ msg: "email already exist" });
    }

    // hash the password
    // const saltRound = 10;
    // const hash_password = await bcrypt.hash(password, saltRound);

    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });

    res.status(200).json({
      message: "registration successfull",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    res.status(500).json("Internal server error");
    console.log(error);
  }
};

//*--------------------------
//      User Login Logic
//*--------------------------

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });
    console.log(userExist);

    if (!userExist) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    // const user = await bcrypt.compare(password, userExist.password);

    const user = await userExist.comparePassword(password);

    if (user) {
      res.status(200).json({
        message: "Login Successfull",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    // res.status(500).json("internal server error");
    next(error);
  }
};

// module.exports = home;
// module.exports = register;

//*--------------------------
// To Send user Data - User Logic
//*--------------------------

const user = async (req, res) => {
  try {
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({ msg: userData });
  } catch (error) {
    console.log(`Error from the user route ${error}`);
  }
};

module.exports = { home, register, login, user };
