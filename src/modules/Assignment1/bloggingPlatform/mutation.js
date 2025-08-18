import { comments, posts, users } from "./dataSource.js"

const bloggingPlatformMutation = {

    updateUserName: (_,{id,newUserName}) => {

        const user = users.find((user)=>user.id===id)
        if(!user){
            return {
                message : "user not found"
            }
        }
        user.name = newUserName
        return user

    },


    deleteComment: (_,{id}) => {
        
        comments.splice(comments.findIndex((comment)=>comment.id===id),1)

        posts.forEach(post => {
              post.comments = post.comments.filter(comment => comment.id !== id);
        });

        return {comments}

    },


    addPost: (_,{postID,postName}) => {

        const post = posts.find((post)=>post.postId===postID)

        if(post){
            return{
                message : "post already exists"
            }
        }

        const newPost = {
            postId:postID,
            postName,
            comments:[]
        }

        posts.push(newPost)

        return {posts}

    },

    
    addCommentToPost: (_, { postID, commentID, title, rating }) => {

        const post = posts.find(post => post.postId === postID);

        if (!post){
            return {
                message :"post not found"
            }
        }

        const findComment = comments.find(comment => comment.id === commentID);
        
        if (findComment){

        return {
            message : "comment already exists"
        }
     }

        const newComment = {
        id: commentID,
        title,
        rating  
    };

        comments.push(newComment);
        post.comments.push(newComment);

        return post;
    }

}

export default bloggingPlatformMutation   