
/**
 * We define all our routes in this file. Routes are matched using `path`.
 * 1. If "path" is a string, then we simply match with url
 * 2. If "path is a object, then we assume it is a RegEx and use RegEx matching
 */

const postsController = require('../controllers/posts.controllers');

const routes = [
   
    {
        method: 'POST',
        path: '/posts/',
        handler: postsController.create.bind(postsController)
    },
    {
        method: 'GET',
        path: '/posts/',
        handler: postsController.findAll.bind(postsController)
    },
    {
        method: 'GET',
        path: '/posts/:id',
        handler: postsController.findOne.bind(postsController)
    },
    {
        method: 'PUT',
        path: '/post/',
        handler: postsController.update.bind(postsController)
    },
    {
        method: 'GET',
        path: '/posts/:username',
        handler: postsController.findAllByUsername.bind(postsController)
    },
    {
        method: 'DELETE',
        path: '/post/:id',
        handler: postsController.delete.bind(postsController)
    },
    {
        method: 'DELETE',
        path: '/post/',
        handler: postsController.deleteAll.bind(postsController)
    },
    
];

module.exports = routes;