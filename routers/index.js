/*
    Routers are responsible to document APIs
*/
const path = require("path");
const express = require("express");
const app = express();
const {router: TitleRouter} = require("./title-router");
const {router: ReviewRouter} = require("./review-router");
const {router: AuthRouter} = require('./auth-router');

// Middleware
app.use(express.json());

// Routers
app.use("/auth", AuthRouter);

// Endpoints
app.use("/title", TitleRouter);
app.use("/review", ReviewRouter);

app.use(express.static("public"));

// Start server
app.listen(process.env.PORT, () => {
  console.log("Listening to...", process.env.PORT);
});
