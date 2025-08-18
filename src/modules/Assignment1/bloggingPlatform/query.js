import delay from "../utils/delayFunction.js"
import { posts, users } from "./dataSource.js"

const bloggingPlatformQuery = {

    users : async () => {

        await delay(2000)
        if(!users || users.length===0){
           return {
            message:'users are empty'
            }
        }
        return {users}
    },

    user : async (_,{id}) =>  {

        await delay(2000)
        const data =  users.find((user)=>user.id === id)
        if(!data){
           return {
            message:'user not found'
           }
        }

        return data
    },

    posts : async () => {

        await delay(1000)
        if(!posts || posts.length===0){
           return {
            message:'posts are empty'
           }
        }

        return {posts}
    },

    post : async (_,{id}) => {

        await delay(1000)
        const data = posts.find((post) => post.postId === id)
        if(!data){
            return {
                message:"post not found"
            }
        }

        return data
    },


    pagination : (_,{page,limit,direction}) => {
        const totalPosts = posts.length
       
        if(limit <=0 ){
            return {
                message:"limit must be atleast 1"
            }
        }

        const sortedPosts = [...posts].sort((a,b)=>{
            const aID = Number(a.postId)
            const bID = Number(b.postId)
            const sortedResult = direction === "asc" ? aID-bID : bID-aID
            return sortedResult
        })

        const totalPages = Math.ceil(totalPosts / limit);
        const currentPage = page

        if(currentPage < 1 || currentPage > totalPages ){
            return {
                message:"page range is not appropriate ,it should be atleast 1 and less then total pages"
            }
        }
        const startIndex = (currentPage - 1) * limit
        const endIndex = startIndex + limit

        const paginatedPosts = sortedPosts.slice(startIndex,endIndex)

        

        return {
            
            paginatedPosts,
            totalPosts,
            totalPages,
            currentPage,
        }
    } 

};

export default bloggingPlatformQuery
