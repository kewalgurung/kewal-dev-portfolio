const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Static files
const staticPath = path.join(__dirname, "./public");
app.use(express.static(staticPath));

// Set view engine
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./templates"));

// Import routes
const routes = require("./routes");
app.use("/", routes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
