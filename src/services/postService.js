const { BlogPost } = require('../models');

const createPost = async (title, content, userId) => {
  const newPost = await BlogPost.create({
    title,
    content,
    userId,
    updated: new Date(),
    published: new Date(),
  });
  return newPost;
};

module.exports = {
  createPost,
};
