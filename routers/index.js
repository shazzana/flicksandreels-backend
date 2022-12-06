/*
    Routers are responsible to document APIs
*/
const path = require("path");
const express = require("express");
const app = express();
const {create, findAll, findOne, updateOne, deleteOne} = require("../controllers/title-controller");
const {
  create: createShow,
  findAll: findAllShow,
  updateOne: updateOneShow,
  deleteOne: deleteOneShow,
} = require("../controllers/show-controller");
const {router: AuthRouter} = require('./auth-router');

// Middleware
app.use(express.json());

// Routers
app.use("/auth", AuthRouter);

// Endpoints
app.post("/title", create);
app.get("/title", findAll);
app.get("/title/:id", findOne);
app.put("/title/:id", updateOne);
app.delete("/title/:id", deleteOne);
app.post("/shows", createShow);
app.get("/shows", findAllShow);

app.put("/shows/:id", updateOneShow);
app.delete("/shows/:id", deleteOneShow);

app.use(express.static("public"));

// Start server
app.listen(3000, () => {
  console.log("Listening to port 3000...");
});
