// Acquiring variables
const express = require("express");
const tagsRouter = express.Router();

const { getAllTags, getPostsByTagName } = require("../db");

// Logging requests made to the /tags router
tagsRouter.use((req, res, next) => {
  console.log("A request is being made to /tags");

  next();
});

// Retrieving a list of tags from getAllTags()
tagsRouter.get("/", async (req, res) => {
  const tags = await getAllTags();

  res.send({
    tags,
  });
});

// Retrieving information about a specific tag by tagName
tagsRouter.get("/:tagName/posts", async (req, res, next) => {
  // read the tagname from the params
  const { tagname } = req.params;

  try {
    // use our method to get posts by tag name from the db
    const posts = await getPostsByTagName(tagname);
    // send out an object to the client { posts: // the posts }
    res.send({ posts });
  } catch ({ name, message }) {
    // forward the name and message to the error handler
    next({ name, message });
  }
});

module.exports = tagsRouter;
