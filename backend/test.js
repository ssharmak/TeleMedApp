const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://ssharmak:JBbLrbJgAxfIDS5s@wandervibe.y23u0.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Connection Error:", err));
