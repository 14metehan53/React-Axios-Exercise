import axios from 'axios';

const getData = (userId) => {
  return new Promise(async (resolve, reject) => {
    const { data: users } = await axios(
      'https://jsonplaceholder.typicode.com/users/' + userId
    );
    resolve(users);
  });
};

const getPosts = (postId) => {
  return new Promise(async (resolve, reject) => {
    const { data: posts } = await axios(
      'https://jsonplaceholder.typicode.com/posts/' + postId
    );
    resolve(posts);
  });
};

(async () => {
  try {
    const users = await getData(1);
    const posts = await getData(1);

    console.log('users :', users);
    console.log('posts :', posts);
  } catch (e) {
    console.log(e);
  }
})();

export { getData, getPosts };
