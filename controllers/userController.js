// exp // 

import express from 'express'

// importing user model // 

import User from '../model/userModel.js'

// importing bcrypt // 
import bcrypt from 'bcrypt'

// crypto // 

import crypto from 'crypto'

//jwt // 

import jwt from 'jsonwebtoken'


// an async function to register the user // 

const RegisterUser = async (req,res) => {

    // required essentials // 

    const {name,email,password} = req.body;

    try{
        //finding if user exists or not // 

        let user = User.findOne({email});

        // if he does // 

        if(user){
            return res.status(400).json({message:"user already exists , please login"})


        }

        // if he doesnt hash pass // 

        const hashedPassword = await bcrypt.hash(password,10);

        // const verification token // 

        const VerificationToken = await crypto.randomBytes(32).toString('hex')


        // create user // 

        user = new User ({
            name,
            email,
            password:hashedPassword,
            VerificationToken:VerificationToken,
            isVerfied:false
        })

        // save the user // 

        await user.save()

        // print the token  // 

        console.log(`verification token : ${VerificationToken}`)

        res.status(201).json({message:"user registered successfully ! "})



    }catch(err){
        console.log(err.message);
        res.status(500).send('server error')
    }
}


const router = express.Router();

export default RegisterUser;