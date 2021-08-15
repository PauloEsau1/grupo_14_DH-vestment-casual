function authMiddleware(req,res,next) {
    if (!req.session.userLogged) {
        return res.redirect('/user/registro');
    }
    next();
}

module.exports = authMiddleware;