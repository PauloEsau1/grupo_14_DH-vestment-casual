const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, "../data/products.json");
const productosData = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
let indexController = {
    main: function(req,res) {
         res.render('index');
    },  
    categorias: function(req,res) {
        res.render('products/categorias',{productosData : productosData});
    },    
    detalle: function(req,res) {
        
    res.render('products/productDetail',{productosData : productosData});
    },
    carrito: function(req,res) {
        res.render('products/productCart');
    }          
};

module.exports = indexController;