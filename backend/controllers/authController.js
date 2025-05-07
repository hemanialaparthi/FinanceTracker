const User = require("../models/User")
const jwt = require("jsonwebtoken");

// gen the JWT token

const generateToken = (id) => {
    return jwt.sign(
        {id}, process.env.JWT_SECRET, {expiresIn: "1h"}
    )
}

// register the user

exports.registerUser = async (req, res) => {
    const {fullName, email, password, profileImageUrl} = req.body;

    // validation: check if there are any missing fields
    if (!fullName || !email || !password) {
        return res.status(400).json({
            message: "Please fill in all fields",
        })
    }

    try {
        // check if the user already exists
        const userExists = await User.findOne({email});
        if (userExists) {
            return res.status(400).json({
                message: "User email already exists",
            })
        }

        // create the user
        const user = await User.create({
            fullName,
            email,
            password,
            profileImageUrl,
        });

        res.status(201).json({
            id: user._id,
            user,
            token: generateToken(user._id),
        })
    } catch (error) {
        res.status(500).json({
            message: "Error creating user.",
            error: error.message,
        })
    }
};

// login the user

exports.loginUser = async (req, res) => {
    const {email, password} = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: "Please fill in all fields",
        })
    }
    try {
        // check if the user exists
        const user = await User.findOne({ email});
        if(!user || !(await user.comparePassword(password))) {
            return res.status(400).json({
                message: "Invalid credentials.",
            })
        }

        res.status(200).json({
            id: user._id,
            user,
            token: generateToken(user._id),
        });
        
    } catch (error) {
        res.status(500).json({
            message: "Error creating user.",
            error: error.message,
        })
    }
};

// get the info of the user

exports.getUserInfo = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        if (!user) {
            return res.status(404).json({
                message: "User not found",
            })
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({
            message: "Error registering user.",
            error: error.message,
        })
    }
};