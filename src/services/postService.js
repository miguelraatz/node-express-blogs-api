const { BlogPost, PostCategory, User, Category } = require('../models');

const createPost = async (title, content, userId, categoryIds) => {
  const newPost = await BlogPost.create({
    title,
    content,
    userId,
    updated: new Date(),
    published: new Date(),
  });

  const { id } = newPost.dataValues;

  categoryIds.forEach((categoryId) => PostCategory
  .create({ postId: id, categoryId }));

  return newPost;
};

const getPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [{
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] },
    },
    {
      model: Category,
      as: 'categories',
      through: { attributes: [] },
    }],
  });
  return posts;
};

const getPostById = async (id) => {
  const post = await BlogPost.findOne({
    include: [{
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] },
    },
    {
      model: Category,
      as: 'categories',
      through: { attributes: [] },
    }],
    where: { id },
  });
  return post;
};

module.exports = {
  createPost,
  getPosts,
  getPostById,
};
