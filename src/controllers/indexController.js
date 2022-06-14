const controller = {};

controller.load = (req, res) => {

    if (req.session.loggedin) {
        // Output username
        res.render('index')
        console.log(req.session)


    } else { res.redirect('/login') }
};
controller.out = (req, res) => {
    req.session.loggedin = false;
    res.redirect('/login');
};
module.exports = controller;