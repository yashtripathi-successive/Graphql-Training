import personSchema from "./models/personSchema.js"
import jwt from "jsonwebtoken"
import bcrypt from 'bcryptjs'

export const secretKey = "yash"

const personQueryMutation = {

    // createPerson : async (_,{name,email}) => {
    //     const personData = await personSchema.create({name,email})
    //     return personData

    // },

    changePersonName : async (_,{id,newName},context) => {
        console.log(context.personContext.role)
        if(context.personContext.role !== "admin") throw new Error("Only Admins can change username not normal users")

        const updatedPerson = await personSchema.findByIdAndUpdate(id,{name:newName},{new:true})
        return updatedPerson
    },

    registerPerson: async (_,{name,email,password,role}) => {

        if(!name || !email || !password || !role) throw new Error("All feilds are required")
        
        const personFound = await personSchema.findOne({email})
        if(personFound) throw new Error("person already exists")

        const hashedPassword = await bcrypt.hash(password,10)
        
        const person = await personSchema.create({name,email,password:hashedPassword,role})
        const token = jwt.sign({id:person._id,name:person.name,email:person.email,role:person.role},secretKey)
        return {
            message:"person registered successfully",
            person,
            token
        }
    
    },

    loginPerson: async (_,{email,password}) => {

        if(!email || !password) throw new Error("All feilds are required")

        const person = await personSchema.findOne({email})
        if(!person) throw new Error("person not exists")

        const validPassword = await bcrypt.compare(password,person.password)
        if(!validPassword) throw new Error("password is wrong")

        const token = jwt.sign({id:person._id,name:person.name,email:person.email,role:person.role},secretKey)

        return{
            message:"person loggedin successfully",
            person,
            token
        }

    } 

}

export default personQueryMutation