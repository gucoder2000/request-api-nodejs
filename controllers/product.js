
const Product = require('../models/product')

getProduct = (req, res) => {
    const productId = req.params.productId

    Product.findById(productId, (err, product) => {
        if (err)
            return res.status(500).send({message : `Error to find product : ${err}`})
        else if (!product)
            return res.status(404).send({message : `Product dont exist : ${err}`})
        else
            res.status(200).send({ product })

    })
}

function getProducts (req, res) {
    Product.find({} , (err , products) => {
        if (err)
            return res.status(500).send({message : `Error : ${err}`})
        else if (!products)
            return res.status(404).send({message : `Don't have products`})
        else
            return res.status(200).send({products})
    })
}

function saveProduct (req, res) {
    console.log ('POST /api/product')
    console.log (req.body)

    //Save in Database
    let product = new Product()
    product.name = req.body.name
    product.picture = req.body.picture
    product.price = req.body.price
    product.category = req.body.category
    product.description = req.body.description
    
    product.save((err , productStored) => {
        if (err){
            res.status(500).send({message : `Error Save Product in Database : ${err}`})
        }
        else {
            res.status(200).send({product : productStored})
        }
    })
}

function updateProduct (req, res) {
    let productId = req.params.productId
    let update = req.body

    Product.findByIdAndUpdate(productId, update,  (err, product) => {
        if (err)
            return res.status(500).send({message : 'Error to update product'})
        else 
            return res.status(200).send({message : 'Product updated'})
    })
}

function deleteProduct (req, res) {
    let productId = req.params.productId

    Product.findById(productId , (err, product) => {
        if (err)
            return res.status(500).send({message : 'Error to delete product'})
        
        product.remove(err => {
            if (err)
                return res.status(500).send({message : 'Error to delete product'})
            else 
                return res.status(200).send({message : 'Product Removed'})
        })

    })
}

module.exports = {
    getProduct,
    getProducts,
    saveProduct,
    updateProduct,
    deleteProduct
}