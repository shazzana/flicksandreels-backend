/*
    Routers are responsible to document APIs
*/
const path = require("path");
const express = require("express");
const app = express();
const { router: TitleRouter } = require("./title-router");
const { router: ReviewRouter } = require("./review-router");
const { router: AuthRouter } = require("./auth-router");

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
// Middleware
app.use(express.json());
app.use(cors(corsOptions)); // Use this after the variable declaration

// Routers
app.use("/auth", AuthRouter);

app.get("/", (req, res) => {
  res.send("This is the root directory");
});

// Endpoints
app.use("/title", TitleRouter);
app.use("/review", ReviewRouter);


// app.post("/shows", createShow);
// app.get("/shows", findAllShow);

// app.put("/shows/:id", updateOneShow);
// app.delete("/shows/:id", deleteOneShow);

app.use(express.static("public"));

// Start server
app.listen(process.env.PORT, () => {
  console.log("Listening to...", process.env.PORT);
});
