const ensureAuthenticated = require('../Middlewares/auth');

const router = require('express').Router();

router.get('/', ensureAuthenticated, (req, res) => {
    console.log('... logged in user ', req.user)
    res.status(200).json([
        {
            name: 'Mobile',
            price: 100
        },
        {
            name: 'Car',
            price: 1500
        },
        {
            name: 'TV',
            price: 1000
        }
    ])
})

module.exports = router