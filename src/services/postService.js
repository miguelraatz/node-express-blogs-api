const { Op } = require('sequelize');
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

const updatePost = async (id, title, content) => {
  await BlogPost.update(
    { title, content },
    { where: { id } },
  );

  const getPost = await getPostById(id);
  
  return getPost;
};

const deletePost = async (id) => {
  await PostCategory.destroy({ where: { postId: id } });
  const deletedPost = await BlogPost.destroy({ where: { id } });
  return deletedPost > 0;
};

const getPostByQuery = async (term) => {
  const posts = await BlogPost.findAll({
    where: {
      [Op.or]: [
        { title: { [Op.like]: `%${term}%` } },
        { content: { [Op.like]: `%${term}%` } },
      ],
    },
    include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, 
        as: 'categories',
        attributes: { exclude: ['PostCategory'] },
        through: { attributes: [] },
      },
    ],
  });
  console.log(posts);
  return posts;
};

module.exports = {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
  getPostByQuery,
};
