const controller = {};

controller.load = (req, res) => {
    if (req.session.loggedin) {
        // Output username
        res.render('productos')
        console.log(req.session)


    } else { res.redirect('/login') }

};
controller.save = (req, res) => {
    const usuario = req.session.username[0].us_id;
    const producto = req.body.ca_producto;
    const cantidad = req.body.ca_cantidad;
    console.log(req.body);
    console.log(usuario);
    console.log(producto);
    console.log(cantidad);

    req.getConnection((err, conn) => {
        conn.query('Select pro_precio from ta_productos where pro_id = ?', producto, (err, precio) => {

            var precioTotal = cantidad * precio[0].pro_precio;
            console.log(precioTotal);
            conn.query('SELECT ca_cantidad, ca_precio FROM ta_carrito WHERE ca_usuario = ? AND ca_producto = ?', [usuario, producto], (err, rows) => {
                console.log(rows);
                if (rows.length > 0) {
                    const proCantidad = rows[0].ca_cantidad;
                    const proPrecio = rows[0].ca_precio;
                    var cantidadProducto = parseFloat(proCantidad) + parseFloat(cantidad);
                    console.log(cantidadProducto);
                    var precioProducto = parseFloat(precioTotal) + parseFloat(proPrecio);
                    console.log(precioProducto);
                    conn.query('UPDATE ta_carrito SET ca_cantidad = ?, ca_precio = ? WHERE ca_usuario = ? AND ca_producto = ?', [cantidadProducto, precioProducto, usuario, producto], (err, result) => {
                        console.log(result);
                        res.redirect('/carro');
                    });
                } else {
                    conn.query('INSERT INTO ta_carrito (ca_usuario,ca_producto,ca_cantidad,ca_precio) VALUES (?, ?, ?, ?)', [usuario, producto, cantidad, precioTotal], (err, carrito) => {

                        console.log(carrito);
                        res.redirect('/carro');
                    });
                }
            });

        });

    });
};
controller.out = (req, res) => {
    req.session.loggedin = false;
    res.redirect('/login');
};


module.exports = controller;