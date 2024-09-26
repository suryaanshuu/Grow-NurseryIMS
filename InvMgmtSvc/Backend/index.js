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
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

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