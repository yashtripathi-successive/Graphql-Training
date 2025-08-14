import { posts, users } from "./dataSource.js"

const bloggingPlatformQuery = {

    users : () => users,
    user : (_,{id}) => users.find((user)=>user.id === id),

    posts : () => posts,
    post : (_,{id}) => posts.find((post) => post.postId === id)

}

export default bloggingPlatformQuery