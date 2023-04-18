const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

// express creates a route for every file in the 'public' folder
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiroutes")(app);
require("./routes/htmlroutes")(app);

// starts the server
app.listen(PORT, () => {
  console.log(`Server available at localhost ${PORT}`);
});
