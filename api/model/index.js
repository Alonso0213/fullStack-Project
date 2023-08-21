const Products = require("./products")
const Users = require("./users")

module.exports = {
    products: new Products(),
    users: new Users()
}