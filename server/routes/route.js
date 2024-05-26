const express = require('express');
const router = express.Router();
const { putData, getAllUsers, getUserById, login, createPost, getUserPosts, getAllPosts, likePost, dislikePost, } = require('../controllers/user');
console.log("Router is connected");

router.post('/put-data', putData);
router.get('/get-data', getAllUsers);
router.get('/users/:id', getUserById);
router.post('/login', login);


router.post('/put-post', createPost);


router.get('/all-posts', getAllPosts);

//by id
router.get('/:userId/posts', getUserPosts);


//like and silike

// Dislike a post

router.post('/:postId/like', likePost);
router.post('/:postId/dislike', dislikePost);


module.exports = router;
