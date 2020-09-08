// used for testing before postgres integration

export const franchises = [
  {
    id: 1,
    title: 'Lord of the Rings',
  },
  {
    id: 2,
    title: 'Star Wars',
  },
  {
    id: 3,
    title: 'Marvel Cinematic Universe',
  },
  {
    id: 4,
    title: 'Game of Thrones',
  },
  {
    id: 5,
    title: 'Harry Potter',
  },
];

export const votes = [
  {
    id: 1,
    username: 'User 1',
    franchise: franchises[0],
    created: new Date(),
  },
  {
    id: 2,
    username: 'User 2',
    franchise: franchises[1],
    created: new Date(),
  },
  {
    id: 3,
    username: 'User 3',
    franchise: franchises[2],
    created: new Date(),
  },
  {
    id: 4,
    username: 'User 4',
    franchise: franchises[3],
    created: new Date(),
  },
  {
    id: 5,
    username: 'User 5',
    franchise: franchises[4],
    created: new Date(),
  },
];

export const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];