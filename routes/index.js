const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.ejs', {
        title: 'Proyecto-Express'
    })
});

router.get('/products', (req, res, next) => {
    res.render('products', {
        title: 'Lista de Productos'
    });
})

module.exports = router