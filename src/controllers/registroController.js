const controller = {};

controller.load = (req, res) => {
    res.render('registro')
};

controller.save = (req, res) => {
    const data = req.body;
    console.log(req.body)
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO ta_usuario set ?', data, (err, usuario) => {
            console.log(usuario);
            res.redirect('/login');
        });
    });

};

module.exports = controller;