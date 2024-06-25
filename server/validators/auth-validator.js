const { z } = require("zod");
// Creating an Object Schema

const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must not be more than 255 Characters" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid Email Address" })
    .min(3, { message: "Email must be at least of 3 Characters" })
    .max(255, { message: "Email must not be more than 255 Characters" }),
  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone must be at least of 10 Characters" })
    .max(20, { message: "Phone must not be more than 20 Characters" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(7, { message: "Password must be at leasst of 6 Characters" })
    .max(1024, { message: "Password can't be greater than 1024 Characters" }),
});

module.exports = signupSchema;
