import mongoose from "mongoose";
import chalk from "chalk";
const dbUrl = process.env.MONGO_URL;

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
    
    process.on("SIGINT", () => {
      mongoose.connection.close(() => {
        console.log("MongoDB connection has been disconnected due to application termination");
        process.exit(0);
      });
    });
  } catch (err) {
    console.log(err);
  }
}
