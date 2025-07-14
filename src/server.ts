import "reflect-metadata";
import { AppDataSource } from "./config/ormconfig";
import app from "./app";
import { ENV } from "./config/env";
import cors from 'cors';

const startServer = async () => {
  try {
    await AppDataSource.initialize();
    console.log("Database connected!");

    app.use(cors({
      origin: 'http://localhost:3000', // No trailing slash!
      credentials: true, // If you need to send cookies/auth headers
    }));

    app.listen(ENV.PORT, () => console.log(`Server running on port ${ENV.PORT}`));
  } catch (error) {
    console.error("Error starting server:", error);
  }
};

startServer();