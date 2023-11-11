import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = 3000;

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://connect:connect123@cluster0.zcw2jyt.mongodb.net/?retryWrites=true&w=majority');

// Define a mongoose schema and model for users
const userSchema = new mongoose.Schema({
  name: String,
  phoneno: String,
});



const User = mongoose.model('User', userSchema);

// Middleware to parse the request body as JSON
app.use(express.json());


// API routes for users

// Create a new user
app.post('/api/users', async (req, res) => {
  try {
    const { name, phoneno } = req.body;
    const user = new User({ name, phoneno });
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get a specific user by ID
app.get('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update a user by ID
app.put('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a user by ID
app.delete('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// Define a mongoose schema and model for OrgPosts
const orgPostSchema = new mongoose.Schema({
  userName: String,
  userRole: String,
  postImg: String,  // Assuming postImg is a URL or path to the image
  userProfileImg: String,  // Assuming userProfileImg is a URL or path to the image
  likesNo: Number,
  commentNo: Number,
  shareNo: Number,
  dislikeNo: Number,
});
const OrgPost = mongoose.model('OrgPost', orgPostSchema);
// API routes for OrgPosts

// Create a new OrgPost
app.post('/api/orgposts', async (req, res) => {
  try {
    const { userName, userRole, postImg, userProfileImg, likesNo, commentNo, shareNo, dislikeNo } = req.body;
    const orgPost = new OrgPost({ userName, userRole, postImg, userProfileImg, likesNo, commentNo, shareNo, dislikeNo });
    await orgPost.save();
    res.json(orgPost);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// Get all OrgPosts
app.get('/api/orgposts', async (req, res) => {
  try {
    const orgPosts = await OrgPost.find();
    res.json(orgPosts);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// Get a specific OrgPost by ID
app.get('/api/orgposts/:id', async (req, res) => {
  try {
    const orgPost = await OrgPost.findById(req.params.id);
    if (!orgPost) {
      return res.status(404).json({ error: 'OrgPost not found' });
    }
    res.json(orgPost);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// Update an OrgPost by ID
app.put('/api/orgposts/:id', async (req, res) => {
  try {
    const orgPost = await OrgPost.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!orgPost) {
      return res.status(404).json({ error: 'OrgPost not found' });
    }
    res.json(orgPost);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete an OrgPost by ID
app.delete('/api/orgposts/:id', async (req, res) => {
  try {
    const orgPost = await OrgPost.findByIdAndDelete(req.params.id);
    if (!orgPost) {
      return res.status(404).json({ error: 'OrgPost not found' });
    }
    res.json(orgPost);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// Define a mongoose schema and model for studentPosts
const studentPostSchema = new mongoose.Schema({
  userName: String,
  userRole: String,
  userProfileImg: String,
  description: String,
  likesNo: Number,
  commentNo: Number,
  shareNo: Number,
  dislikeNo: Number,
});
const StudentPost = mongoose.model('StudentPost', studentPostSchema);
// API routes for studentPosts

// Create a new studentPost
app.post('/api/studentposts', async (req, res) => {
  try {
    const { userName, userRole, userProfileImg, description, likesNo, commentNo, shareNo, dislikeNo } = req.body;
    const studentPost = new StudentPost({ userName, userRole, userProfileImg, description, likesNo, commentNo, shareNo, dislikeNo });
    await studentPost.save();
    res.json(studentPost);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get all studentPosts
app.get('/api/studentposts', async (req, res) => {
  try {
    const studentPosts = await StudentPost.find();
    res.json(studentPosts);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get a specific studentPost by ID
app.get('/api/studentposts/:id', async (req, res) => {
  try {
    const studentPost = await StudentPost.findById(req.params.id);
    if (!studentPost) {
      return res.status(404).json({ error: 'StudentPost not found' });
    }
    res.json(studentPost);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update a studentPost by ID
app.put('/api/studentposts/:id', async (req, res) => {
  try {
    const studentPost = await StudentPost.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!studentPost) {
      return res.status(404).json({ error: 'StudentPost not found' });
    }
    res.json(studentPost);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a studentPost by ID
app.delete('/api/studentposts/:id', async (req, res) => {
  try {
    const studentPost = await StudentPost.findByIdAndDelete(req.params.id);
    if (!studentPost) {
      return res.status(404).json({ error: 'StudentPost not found' });
    }
    res.json(studentPost);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Define a mongoose schema and model for studentMsgs
const studentMsgSchema = new mongoose.Schema({
  userName: String,
  userRole: String,
  userProfileImg: String,
  message: String,
  date: { type: Date, default: Date.now }, // Automatically generated date
});
const StudentMsg = mongoose.model('StudentMsg', studentMsgSchema);

// API routes for studentMsgs

// Create a new studentMsg
app.post('/api/studentmsgs', async (req, res) => {
  try {
    const { userName, userRole, userProfileImg, message } = req.body;
    const studentMsg = new StudentMsg({ userName, userRole, userProfileImg, message });
    await studentMsg.save();
    res.json(studentMsg);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get all studentMsgs
app.get('/api/studentmsgs', async (req, res) => {
  try {
    const studentMsgs = await StudentMsg.find();
    res.json(studentMsgs);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get a specific studentMsg by ID
app.get('/api/studentmsgs/:id', async (req, res) => {
  try {
    const studentMsg = await StudentMsg.findById(req.params.id);
    if (!studentMsg) {
      return res.status(404).json({ error: 'StudentMsg not found' });
    }
    res.json(studentMsg);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update a studentMsg by ID
app.put('/api/studentmsgs/:id', async (req, res) => {
  try {
    const studentMsg = await StudentMsg.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!studentMsg) {
      return res.status(404).json({ error: 'StudentMsg not found' });
    }
    res.json(studentMsg);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a studentMsg by ID
app.delete('/api/studentmsgs/:id', async (req, res) => {
  try {
    const studentMsg = await StudentMsg.findByIdAndDelete(req.params.id);
    if (!studentMsg) {
      return res.status(404).json({ error: 'StudentMsg not found' });
    }
    res.json(studentMsg);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
