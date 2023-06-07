import query from '../mysql-connect';
import express from 'express';

let router = express.Router();
router.get('/', async function(req, res) {
    let title = 'Nodejs-Template '
    res.render('index', {
        title,
    });
});

module.exports = router;