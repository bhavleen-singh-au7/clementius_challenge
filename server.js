const express = require('express');
const connectDB = require('./config/DB');
const app = express();

// Connect DATABASE
connectDB();

// Init Middleware => using new kind of bodyParser
app.use(express.json({ extended: false }));

// Define Routes
app.use("/create", require("./routes/api/users"));
app.use("/view", require("./routes/api/views"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));