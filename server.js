// import chalk from "chalk";
import express from "express";
import cors from "cors";
const app = express();

import "dotenv/config";
import setupRoutes from "./startup/routes.js";
import mongoService from "./service/database.service.js";

const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
};

app.options("*", cors(corsOptions)); // Handle preflight requests for all routes
app.use(cors(corsOptions));
// app.use(cors());
setupRoutes(app);

mongoService();

const port = process.env.APP_PORT;

process.on("unhandledRejection", (reason, promise) => {
  console.error(
    "Unhandled rejection happened at",
    promise,
    `reason: ${reason}`
  );
});

process.on("uncaughtException", (err) => {
  console.error(`Uncaught Exception happened :${err}`);
});

// app.listen(port, () => {
//   console.log(chalk.bold.green(`Listening on port ${port}`));
// });
