const { BlogPost } = require('../models');

const createPost = async (title, content, categoryIds) => {
  const newPost = await BlogPost.create({
    title,
    content,
    categoryIds,
    // updated: Date.now(),
    // published: Date.now(),
  });
  return newPost;
};

module.exports = {
  createPost,
};
