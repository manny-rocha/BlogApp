import { MONGODB_URI } from "./utils/config.js";
import express, { json } from "express";
import "express-async-errors";
const app = express();
import cors from "cors";
import usersRouter from "./controllers/users.js";
import blogsRouter from "./controllers/blogs.js";
import loginRouter from "./controllers/login.js";
import { requestLogger, tokenExtractor, userExtractor, unknownEndpoint, errorHandler } from "./utils/middleware.js";
import { info, error } from "./utils/logger.js";
import { connect } from "mongoose";

info("connecting to MongoDB");

connect(MONGODB_URI)
  .then(() => {
    info("connected to MongoDB");
  })
  .catch((error) => {
    _error("error connecting to MongoDB:", error.message);
  });

app.use(cors());
app.use(json());
app.use(requestLogger);
app.use(tokenExtractor);

app.use("/api/users", usersRouter);
app.use("/api/blogs", userExtractor, blogsRouter);
app.use("/api/login", loginRouter);

if (process.env.NODE_ENV === "test") {
  const testingRouter = require("./controllers/testing");
  app.use("/api/testing", testingRouter);
}

app.use(unknownEndpoint);
app.use(errorHandler);

export default app;
