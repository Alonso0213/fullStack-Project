const express = require("express");
const bodyParser = require("body-parser")
const routes = express.Router()
const { users, products } = require("../model")

module.exports = {
    express,
    routes
  };