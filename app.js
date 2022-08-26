const express = require('express');
let cors = require('cors');
const mongoose = require('mongoose');
const db =  process.env.MONGO_URI ||  "mongodb://localhost:27017/mern-stack"
const connectDB = async () => {
  try {
    await mongoose.connect(
      db,
      {
        useNewUrlParser: true
      }
    );

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
// routes
const events = require('./routes/api/events');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

// use Routes
app.use('/api/events', events);

const port = process.env.PORT || 8082;

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
    });
}

app.listen(port, () => console.log(`Server started on port ${port}`));