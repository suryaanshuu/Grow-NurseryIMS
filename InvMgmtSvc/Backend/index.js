// // backend/index.js
// const express = require('express');
// // var cors = require('cors')

// const app = express();
// const getUserById = require("./dbQueries/getUserByID");
// const PORT = process.env.PORT || 5000;

// app.use(express.json());
// // app.use(cors())

// app.post('/api/plant', async (req, res) => {
//   const plantName = req.body.name;  
//   //get the plantName and send it to getUserByID
//   //send the relevant reponse back to the client
//     try {
//         const data = await getUserById(plantName);
//         res.json(data);
//     }
//     catch(error) {
//         console.error(error);
//         res.status(500).send({ message: 'Error retreiving data' });
//     }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });


const express = require('express');
const app = express();
const cors = require('cors');
const getUserById = require("./dbQueries/getUserByID");
const jwt = require('jsonwebtoken');
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const users = [
  { username: 'admin', password: 'password' },
];

// const authenticateToken = (req, res, next) => {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1];
//   if (token == null) return res.sendStatus(401);

//   jwt.verify(token, 'your-secret-key', (err, user) => {
//     if (err) return res.sendStatus(403);
//     req.user = user;
//     next();
//   });
// };


app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find((user) => user.username === username && user.password === password);
  if (user) {
    const token = jwt.sign({ username: user.username }, 'your-secret-key', { expiresIn: '1h' });
    console.log('Login successful, sending token');
    res.json({ token });
  } else {
    console.log('Login failed');
    res.status(401).json({ error: 'Invalid username or password' });
  }
});

// app.get('/api/protected', authenticateToken, (req, res) => {
//   res.json({ message: 'This is a protected route' });
// });

// Add a new GET endpoint to handle the request
app.get('/api/plant', async (req, res) => {
  const plantName = req.query.name; // Extract plantName from URL query string
  try {
    const data = await getUserById(plantName);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Error retrieving data' });
  }
});

app.post('/api/plant', async (req, res) => {
  const plantName = req.body.name;  
  //get the plantName and send it to getUserByID
  //send the relevant response back to the client
  try {
    const data = await getUserById(plantName);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Error retrieving data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});