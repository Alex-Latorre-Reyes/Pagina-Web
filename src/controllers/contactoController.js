const controller = {};

controller.load = (req, res) => {
    if (req.session.loggedin) {
        // Output username
        res.render('contacto')
        console.log(req.session)


    } else { res.redirect('/login') }

};
controller.response = (req, res) => {
    res.send('Gracias por ingresar tus datos, nos contactaremos pronto')
};

controller.out = (req, res) => {
    req.session.loggedin = false;
    res.redirect('/login');
};
controller.save = (req, res) => {
    const usuario = req.session.username[0].us_id;
    const telefono = req.body.tel;
    const correo = req.body.email;
    const direccion = req.body.direccion;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO ta_datos (da_usuario,da_telefono,da_correo,da_direccion) VALUES (?, ?, ?, ?)', [usuario, telefono, correo, direccion], (err, datos) => {
            console.log(datos);
            res.redirect('/contacto');
        });
    });
};
module.exports = controller;