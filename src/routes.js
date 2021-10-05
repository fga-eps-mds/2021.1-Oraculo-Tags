const express = require("express");
const TagController = require("./Controller/TagController");

const routes = express.Router();

routes.post("/tags", TagController.createTag);
routes.get("/tags/all", TagController.listTags);

module.exports = routes;
