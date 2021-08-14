const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, "../data/products.json");
const productosData = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
const dict = require('../data/conversionAtributos.js');


let indexController = {
    main: function(req,res) {
        res.render('index',{productData : productosData, dict : dict});
    },  
    categorias: function(req,res) {
        let producto;
        if (req.params.categoria == "Mujer") {
            producto = productosData.filter(product => product.clothingSex != "H");
        }
        else {
            producto = productosData.filter(product => product.clothingSex != "M");
        }
        res.render('products/categorias',{productData : producto,  dict : dict, categoria: req.params.categoria});
    },    
    detalle: function(req,res) {  
        let producto = productosData.find(product => product.id == req.params.id);
        res.render('products/productDetail',{producto : producto});
    },
    carrito: function(req,res) {
        res.render('products/productCart');
    }          
};

module.exports = indexController;