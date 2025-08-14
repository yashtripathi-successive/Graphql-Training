export const comments = [
  { title: 'Great post!', rating: 5 },
  { title: 'Needs more detail.', rating: 3 },
  { title: 'Very informative.', rating: 4 },
];

export const posts = [
  {
    postId: '101',
    postName: 'GraphQL Basics',
    comments: [comments[0], comments[2]],
  },
  {
    postId: '102',
    postName: 'Understanding Resolvers',
    comments: [comments[1]],
  }
];

export const users = [
  {
    id: '1',
    name: 'Alice',
    posts: [posts[0]],
    comments: [comments[0]],
  },
  {
    id: '2',
    name: 'Bob',
    posts: [posts[1]],
    comments: [comments[1], comments[2]],
  }
];
