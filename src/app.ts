import express from "express";
import cors from "cors";
import { globalErrorHandler } from "./middlewares/errorHandler";
import { httpLogger } from "./config/logger";
import { ENV } from "./config/env";
const { CLIENT_URL } = ENV;

const app = express();
app.use(cors({ origin: CLIENT_URL }));
app.use(express.json());

app.use(httpLogger);


app.use(globalErrorHandler);

export default app;