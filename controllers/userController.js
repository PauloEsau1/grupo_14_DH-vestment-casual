let userController = {
    registro: function(req,res) {
         res.render('users/register');
    },
    loginAccess: function(req, res){
        //Validación de login
        res.render('users/profile');
    },
    profileAccess: function(req, res){
        //Validación de acceso a perfil
        res.render('users/profile');
    }
};

module.exports = userController;