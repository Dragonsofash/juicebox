const express = require("express");
const apiRouter = express.Router();

const usersRouter = require("./users");
apiRouter.use("/users", usersRouter);

const postsRouter = require("./posts");
postsRouter.use("/posts", postsRouter);

const tagsRouter = require("./tags");
tagsRouter.use("/tags", tagsRouter);

module.exports = apiRouter;
