const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/nursery')

const db = mongoose.connection;
