const controller = {};

controller.load = (req, res) => {
    if (req.session.loggedin) {
        // Output username
        res.redirect('/index')
        console.log(req.session)


    } else { res.render('login') }


};
controller.enter = (req, res) => {
    let usuario = req.body.us_id;
    let contrasena = req.body.us_contrasena;
    console.log(req.body);
    console.log(usuario);
    console.log(contrasena);

    req.getConnection((err, conn) => {
        conn.query('select us_id from ta_usuario where us_id = ? AND us_contrasena = ?', [usuario, contrasena], (err, usuario) => {
            console.log(usuario);
            if (usuario.length > 0) {
                req.session.loggedin = true;
                req.session.username = usuario;
                res.redirect('/index');
            } else {
                res.send('Usuario o contraseña invalidos');
            }
        });
    });
};



module.exports = controller;