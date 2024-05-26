const User = require('../models/model');
const Post = require('../models/postModel'); 

exports.putData = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
        console.log(error);
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// exports.getUserById = async (req, res) => {
//     try {
//         const user = await User.findById(req.params.id);
//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }
//         res.status(200).json(user);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// exports.login = async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         const user = await User.findOne({ email });
//         console.log(email)
//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         if (user.password !== password) {
//             return res.status(401).json({ message: "Invalid credentials" });
//         }

//         res.status(200).json(user);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };


exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        console.log(email)
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (user.password !== password) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// exports.createPost = async (req, res) => {
//     try {
//         const { user } = req.body;
//         const { title, desc, image } = req.body;

//         const user1 = await User.findById(user);
//         console.log(user1);
//         if (!user1) { // Updated check here
//             return res.status(404).json({ message: 'User not found' });
//         }

//         const newPost = new Post({ title, desc, image, user: user1._id });
//         await newPost.save();

//         user1.posts.push(newPost._id); // Add post ID to user's posts array
//         await user1.save();

//         res.status(201).json(newPost);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//         console.log(error);
//     }
// };
exports.createPost = async (req, res) => {
    try {
        const { user, title, desc, image } = req.body;

        // Fetch the user details from the database
        const user1 = await User.findById(user);
        if (!user1) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Create the post with the user's name
        const newPost = new Post({
            title,
            desc,
            image,
            name: user1.name, // Set the name field to the user's name
            user: user1._id
        });

        await newPost.save();

        user1.posts.push(newPost._id);
        await user1.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
        console.log(error);
    }
};

exports.getUserPosts = async (req, res) => {
    try {
        const { userId } = req.params;

        // Find user by ID and populate the posts array
        const user = await User.findById(userId).populate('posts');
        console.log(user);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Return the posts of the user
        res.status(200).json(user.posts);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('user');
        res.status(200).json(posts);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};



//like and dislike
// In your controller file (e.g., controllers/postController.js)

exports.likePost = async (req, res) => {
    try {
        const { postId } = req.params;
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        post.likes += 1;
        await post.save();
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.dislikePost = async (req, res) => {
    try {
        const { postId } = req.params;
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        post.dislikes += 1;
        await post.save();
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



//----------------------------------------------------------------------------------------------------------------------


exports.getUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId).populate('posts');
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const userDetails = {
            name: user.name,
            email: user.email,
            numberOfPosts: user.posts.length
        };
        res.status(200).json(userDetails);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
