import jwt from "jsonwebtoken"
import { secretKey } from "../mutation.js"

function auth(req){

   const header = req.headers.authorization

   if(!header) throw new Error("header is missing")

   const token = header.split(" ")[1]

   if(!token) throw new Error("token is missing")

   const data = jwt.verify(token,secretKey)

   return data

}

export default auth