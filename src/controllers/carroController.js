const controller = {};

controller.load = (req, res) => {

    if (req.session.loggedin) {
        // Output username
        res.render('carrito')
        console.log(req.session)


    } else { res.redirect('/login') }
};
controller.list = (req, res) => {
    const usuario = req.session.username[0].us_id;
    req.getConnection((err, conn) => {
        conn.query("Select pro_nombre,ca_cantidad,ca_precio,ca_usuario,ca_producto from ta_productos, ta_carrito WHERE pro_id = ca_producto AND ca_usuario = ?", usuario, (err, carritos) => {
            if (err) {
                res.jason(err)
            }
            res.render('carrito', {

                data: carritos
            });
        });
    });
};
controller.delete = (req, res) => {

    console.log(req.params);
    const id = req.params.us;
    const pro = req.params.pro;
    console.log(id);
    console.log(pro);
    req.getConnection((err, connection) => {
        connection.query('DELETE FROM ta_carrito WHERE ca_usuario = ? AND ca_producto = ?', [id, pro], (err, rows) => {
            res.redirect('/carro');
        });
    });
};
controller.deleteAll = (req, res) => {
    const usuario = req.session.username[0].us_id;

    req.getConnection((err, connection) => {
        connection.query('SELECT SUM(ca_precio) as ca_precio FROM ta_carrito WHERE ca_usuario = ?', usuario, (err, precio) => {
            connection.query('DELETE FROM ta_carrito WHERE ca_usuario = ?', usuario, (err, rows) => {


            });
            console.log(precio);
            res.send('Gracias por su compra, en 48 hrs retirar en tienda.<br> El pago se realizara al retirar <br> El Total es de $ ' + precio[0].ca_precio + '<br><br><button><a href="/index"> Inicio </a></button>');

        });

    });
};



module.exports = controller;