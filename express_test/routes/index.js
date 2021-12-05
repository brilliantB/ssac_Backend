// 이정표 역활

var express = require('express');
var router = express.Router();

const postsRouter = require("./posts/index");
const userssRouter = require("./users/index");
const commentsRouter = require("./comments/index");

// /posts
router.use('/posts', postsRouter);

// users
router.use('/users', userssRouter);
router.use('/comments', commentsRouter);


module.exports = router;