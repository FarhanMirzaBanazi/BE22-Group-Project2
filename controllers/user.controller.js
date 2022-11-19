const userSchema = require("../schema/user");
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const jsonwebtoken = require("jsonwebtoken");

module.exports = {
  getAllUser: async (req, res) => {
    try {
        const data = await userSchema.find({ });
        if(data){
            res.status(200).json({
                success: true,
                data: data,
                message: 'User is get successfully'
            })
        } else {
            res.status(400).json({
                success: false,
                data: null,
                message: 'User is not found.'
            })
        }
    } catch (error) {
        res.status(400).json({
            message: 'Get All User Failed!!'
        })
    }
    
  },

  getUserByID: async (req, res) => {
    try {
        const data = await userSchema.findById(req.query.id);
        // console.log(req.query.id);
        if(data){
            res.status(200).json({
                success: true,
                data: data,
                message: 'User is get successfully'
            })
        } else {
            res.status(400).json({
                success: false,
                data: null,
                message: 'User is not found.'
            })
        }
    } catch (error) {
        res.status(400).json({
            message: 'Get User By Id Failed!!'
        })
    }

  },

  register: async (req, res) => {
    const { username, email, password, no_telp, umur } = req.body;

    try {
        const hash = await bcrypt.hash(password, 10);

        const data = await userSchema.create({
            username: username,
            email: email,
            password: hash,
            no_telp: no_telp,
            umur: umur
        });

        if (data) {
            res.status(200).json({
                success: true,
                data: data,
                message: 'Register Successfully..'
            })
        } else {
            res.status(400).json({
                success: false,
                data: data,
                message: 'data does not match'
            })
        }
    } catch (error) {
        res.status(400).json({
            message: 'Register Failed!!'
        })
    }

  },

  login: async(req, res) => {
    const { username, password } = req.body;

    try {
        const checkUsername = await userSchema.findOne({
            username: username,
        });

    if (checkUsername){
        const checkPass = await bcrypt.compare(password, checkUsername.password);

        if (checkPass) {
            const token = jsonwebtoken.sign({
                username: checkUsername.username,
            }, process.env.JWT_KEY );
            
            // res.send(token)
            res.status(200).json({
                success: true,
                token: token,
                message: 'login Successfully..'
            })
        } else{
            res.status(400).json({
                success: false,
                message: 'Password wrong'
            })
        }
    } else{
        res.status(400).json({
            message: 'Username wrong'
        })
    }
  } catch (error) {
    res.status(400).json({
        message: 'Login failed!!'
    })
    }
    
  },
}