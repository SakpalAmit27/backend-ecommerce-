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


    }
}


const router = express.Router();