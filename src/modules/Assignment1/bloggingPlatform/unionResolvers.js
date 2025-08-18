
const unionResolvers = {
    userResult: {
        __resolveType(obj) {
        if (obj.id) return 'User';
        if (obj.message) return 'Error';
        return null;
        }
    },

     usersResult: {
         __resolveType(obj) {
        if (obj.users) return 'userSuccess';
        if (obj.message) return 'Error';
        return null;
        }
    },

     postsResult: {
        __resolveType(obj) {
        if (obj.posts) return 'postSuccess';
        if (obj.message) return 'Error';
        return null;
        }
    },

     postResult: {
         __resolveType(obj) {
        if (obj.postId) return 'Post';
        if (obj.message) return 'Error';
        return null;
        }
    },
     addPostResult: {
         __resolveType(obj) {
        if (obj.posts) return 'addPostSuccess';
        if (obj.message) return 'Error';
        return null;
        }
    },

     deleteCommentResult: {
         __resolveType(obj) {
        if (obj.comments) return 'deleteCommentSuccess';
        if (obj.message) return 'Error';
        return null;
        }
    },
      paginationResult: {
        __resolveType(obj) {
        if (obj.paginatedPosts) return 'PaginationsSuccess';
        if (obj.message) return 'Error';
        return null;
    }
  }
}

export default unionResolvers