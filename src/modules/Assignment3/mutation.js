import dummyUserSchema from "./models/dummyUserSchema.js"
import pubsub from "./pubsub.js"
import { DUMMYCOMMENT } from "./subscription.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import mongoose from "mongoose"
import dummyMessageSchema from "./models/dummyMessageSchema.js"

export const comments = []
export const secretKey = "yash"
const mutationResolver = {

    addComment : (_,{contentData}) => {

        const newComment = {
            content:contentData,
            createdAt: new Date().toISOString()
        }

        comments.push(newComment)
        pubsub.publish(DUMMYCOMMENT,{comment : newComment})
        return newComment

    },


    registerDummyUser : async (_,{input}) => {
        const {username,email,password} = input

        if(!username || !email || !password) throw new Error("All feilds are required")
        
        const dummyUserFound = await dummyUserSchema.findOne({email})
        if(dummyUserFound) throw new Error("user already exists")
        
        const hashedPassword = await bcrypt.hash(password,10)
        const dummyUser = await dummyUserSchema.create({username,email,password:hashedPassword})
        const token = jwt.sign({username:dummyUser.username,email:dummyUser.email,password:dummyUser.password},secretKey)
        return {
          username:dummyUser.username,
          email:dummyUser.email,
          password:dummyUser.password,
          token
        }


    },


    loginDummyUser : async (_,{input}) => {
        const {email,password} = input

        if(!email || !password) throw new Error("all feilds are required")

        const dummyUser = await dummyUserSchema.findOne({email})
        if(!dummyUser) throw new Error("dummy user not exists")

        const isValidPassword =  await bcrypt.compare(password,dummyUser.password)
        if(!isValidPassword) throw new Error("password is wrong")

        const token = jwt.sign({username:dummyUser.username,email:dummyUser.email,password:dummyUser.password},secretKey)
        pubsub.publish("USER_PRESENCE_CHANGED", {
        userPresenceChanged: {
        username: dummyUser.username,
        status: "joined",
        },
        })

        return {
            
            email:dummyUser.email,
            password:dummyUser.password,
            token

        }

    },


    sendDummyMessage : async (_,{input},context) => {
        const {message} = input

        if(!context.dummyUser) throw new Error("sorry but you are not uthorized to send message")
        const {username,email,password} = context.dummyUser


        const dummymessage = await dummyMessageSchema.create({
            message:message,
            senderName:username,
           
        })
        
        return {message: dummymessage.message}
    }

}

export default mutationResolver