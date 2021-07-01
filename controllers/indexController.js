let indexController = {
    main: function(req,res) {
         res.render('index');
    },  
    categorias: function(req,res) {
        res.render('products/categorias');
    },    
    detalle: function(req,res) {
    res.render('products/productDetail');
    },
    carrito: function(req,res) {
        res.render('products/productCart');
    }          
};

module.exports = indexController;