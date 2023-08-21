const express = require("express");
const bodyParser = require("body-parser")
const routes = express.Router()
const { users, products } = require("../model")


// Products Routes
routes.get("/Products/", (req, res)=>{
    products.fetchProducts(req, res)
})
routes.get("/Products/:id", (req, res)=>{
    products.fetchProduct(req, res)
})
routes.post("/AddProduct/", bodyParser.json(), 
(req, res)=>{
    products.register(req, res)
})
routes.put("/Products/:id", bodyParser.json(), 
(req, res)=>{
    products.updateProduct(req, res)
})
routes.patch("/Products/:id", bodyParser.json(), 
(req, res)=>{
    products.updateProduct(req, res)
})
routes.delete("/Products/:id", bodyParser.json(), 
(req, res)=>{
    products.deleteProduct(req, res)
})

module.exports = {
    express,
    routes
  };