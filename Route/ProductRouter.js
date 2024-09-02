const ensureAuthenticated = require('../Middlewares/Aut');
const products = require('../model/Product')
const router = require('express').Router();




router.get('/', async (req, res) => {
    // console.log(products)
    const QueryObject = {};
    const { name } = req.query;
    if (name) {
        QueryObject.name = { $regex: name, $options: 'i' }
    }


    let apidata = products.find(QueryObject)
    const pro = await apidata
    // console.log(model.products)
    // console.log(pro)
    res.status(200).json(
        { pro })
});

module.exports = router;