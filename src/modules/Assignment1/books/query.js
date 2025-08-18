import delay from "../utils/delayFunction.js";
import { books,reviews } from "./dataSource.js";

export const booksQueryResolvers = {
    books: async () => {
      await delay(2000)
      return {books}
    },
    book: async (_, { id }) => {
      await delay(2000)
      return books.find(book => book.id === id)
    },
};

export const booksResolvers = {
  Book: {
    reviews: (book, { limit }) => {
      const bookReviews = reviews.filter(r => book.reviewIds.includes(r.reviewId));
      return limit ? bookReviews.slice(0, limit) : bookReviews;
    }
  }
};