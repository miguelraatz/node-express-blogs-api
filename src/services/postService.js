const { BlogPost } = require('../models');
const { PostCategory } = require('../models');

const createPost = async (title, content, userId, categoryIds) => {
  const newPost = await BlogPost.create({
    title,
    content,
    userId,
    updated: new Date(),
    published: new Date(),
  });
  
  categoryIds.forEach((categoryId) => PostCategory
  .create({ postId: newPost.dataValues.id, categoryId }));

  return newPost;
};

module.exports = {
  createPost,
};
