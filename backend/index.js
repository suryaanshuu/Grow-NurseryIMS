// backend/index.js
const express = require('express');
const app = express();
const getUserById = require("./dbQueries/getUserByID");
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.post('/api/plant', async (req, res) => {
  const plantName = req.body.name;  
  //get the plantName and send it to getUserByID
  //send the relevant reponse back to the client
    try {
        const data = await getUserById(plantName);
        res.json(data);
    }
    catch(error) {
        console.error(error);
        res.status(500).send({ message: 'Error retreiving data' });
    }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
