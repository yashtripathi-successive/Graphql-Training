import { books,reviews } from "./dataSource.js";

export const booksQueryResolvers = {
    books: () => books,
    book: (_, { id }) => books.find(book => book.id === id),
};

export const booksResolvers = {
  Book: {
    reviews: (book, { limit }) => {
      const bookReviews = reviews.filter(r => book.reviewIds.includes(r.reviewId));
      return limit ? bookReviews.slice(0, limit) : bookReviews;
    }
  }
};