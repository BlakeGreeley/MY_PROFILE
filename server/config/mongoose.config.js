const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/profile", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Making connection with the database"))
.catch((err) => console.log("An error happened while connecting", err));