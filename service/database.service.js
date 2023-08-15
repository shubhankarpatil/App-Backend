import mongoose from "mongoose";
import chalk from "chalk";
import express from "express";
const app = express();
const dbUrl = process.env.MONGO_URL;
const port = 3000;
export default function mongoService() {
  try {
    mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(dbUrl);

    mongoose.connection.on("connected", () => {
      console.log(chalk.bold.green(`connected to mongoDB ${dbUrl}`));
    });

    mongoose.set("debug", true);

    mongoose.connection.on("error", (err) => {
      console.log(chalk.bold.red(`MongoDB error has occurred ${err}`));
    });

    mongoose.connection.on("disconnected", () => {
      console.log("MongoDB has been disconnected");
    });

    const server = app.listen(port, () => {
      console.log(chalk.bold.green(`Listening on port ${port}`));
    });

    process.on("SIGINT", async () => {
      console.log("Shutting down gracefully...");

      server.close();

      try {
        await mongoose.connection.close();
        console.log("MongoDB connection has been disconnected due to application termination");
        process.exit(0);
      } catch (error) {
        console.error("Error while closing MongoDB connection:", error);
        process.exit(1);
      }
    });
  } catch (err) {
    console.log(err);
  }
}
