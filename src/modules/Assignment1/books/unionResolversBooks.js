const unionResolversBooks = {
    booksResult: {
     __resolveType(obj) {
        if (obj.books) return 'bookSuccess'; 
        if (obj.message) return 'Error';
        return null;
     }
},

     bookResult: {
    __resolveType(obj) {
      if (obj.id) {
        return 'Book';       
      }
      if (obj.message) {
        return 'Error';
      }
      return null;
    }
  }

}

export default unionResolversBooks