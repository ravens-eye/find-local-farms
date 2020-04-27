const express = require("express");

const mongoose = require("mongoose");
const routes = require("./server/routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
// app.use(routes); commented to avoid error (no routes)

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/farm-db", 
{ 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
}
).then(
  () => {
    console.log('Connected to database.');
    // Start the API server once connected to db
    app.listen(PORT, function() {
      console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    });
  },
  err => {
    console.log('Failed to connect to database.');
  }
);
