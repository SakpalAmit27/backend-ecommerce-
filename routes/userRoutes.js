import { Router } from "express"
import express from express

import RegisterUser from "../controllers/userController"


const router = express.Router();


router.post('/register',RegisterUser)

export default router

