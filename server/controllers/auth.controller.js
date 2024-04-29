import User from "../models/user.model.js"
import bcryptjs from 'bcryptjs'
import generateTokenAndSetCookie from "../utils/generate.token.js"

export const test = (req, res) => {
    res.send('Auth routes are ready')
}

export const signup = async (req, res) => {
    const {fullName, password, gender} = req.body
    const username = fullName.split(' ')[0].toLowerCase() + Math.random().toString(9).slice(-3)
    
    try {
        const hashedPassword = bcryptjs.hashSync(password, 10)

        const boyProfilePicture = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePicture = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePicture: gender === 'male' ? boyProfilePicture : girlProfilePicture
        })

        if (newUser) {
            await newUser.save()
            const {password: pass, ...rest} = newUser._doc
            generateTokenAndSetCookie(rest._id, res)
            res.status(200).json(rest)

        } else {
            res.status(400).json({error: 'Invalid user data'})
        }
    } catch (error) {
        console.log('Error in Signup controller: ', error.message)
        res.status(500).json({error: 'Internal server error'})
    }
}

export const signin = async (req, res) => {
    const {username, password} = req.body
    
    try {
        const validUser = await User.findOne({username})
        if (!validUser) {
            return res.status(404).json({error: 'User not found!'})
        }

        const {password: pass, ...rest} = validUser._doc
        const validPassword = bcryptjs.compareSync(password, pass)
        if (!validPassword) {
            return res.status(401).json({error: 'Invalid password'})
        }

        generateTokenAndSetCookie(rest._id, res)
        res.status(200).json(rest)

    } catch (error) {
        console.log('Error in Signin controller: ', error.message)
        res.status(500).json({error: 'Internal server error'})
    }
}

export const signout = (req, res) => {
    try {
        res.clearCookie('access_token').status(200).json("You've been logged out")
        
    } catch (error) {
        console.log('Error in Signout controller: ', error.message)
        res.status(500).json({error: 'Internal server error'})
    }
}