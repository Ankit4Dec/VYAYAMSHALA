//*--------------------------------------------------
//* express.Router
//*--------------------------------------------------

//? In Express.js, express.Router() is a mini Express application without all the server configuration but with the ability to define routes, middleware, and even have its,own set of route handlers. It allows you to modularize your routes and middleware to keep your code orgnaized and maintanable.
//* https://expressjs.com/en/guide/routing.html

//? Use the express.Router class to create modeular, mountable route handlers. A Router instance is a complete middleware amnd outing system; for this reason, it is often referred to as a "mini-app".

const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller");
// const register = require("../controllers/auth-controller"); 
const signupSchema = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");
const authMiddleware = require("../middlewares/auth-middleware")

router.route("/").get(authcontrollers.home);

router
  .route("/register")
  .post(validate(signupSchema), authcontrollers.register);
router.route("/login").post(authcontrollers.login);

router.route("/user").get(authMiddleware, authcontrollers.user);

module.exports = router;

// app.get("/", (req, res) => {
//     res.status(200).send("First Project Beginning");
//   });

//   app.get("/register", (req, res) => {
//     res.status(200).send("Welcome to Registration Page");
//   });
