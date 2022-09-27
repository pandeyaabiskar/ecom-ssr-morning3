const ProductModel = require("../models/ProductModel");
const returnAllProducts = async (req, res) => {
  const productData = await ProductModel.find();

  const { category } = req.query;
  if (category) {
    const filteredProducts = await ProductModel.find({category});
    res.render('index', {data : filteredProducts})
  } else {
    res.render('index', {data: productData})
  }
};

const returnSingleProduct = async (req, res) => {

  //1. Destructure productID from req.params
  const { productID } = req.params;
  //2. Filter product from the array
  const selectedProduct = await ProductModel.find({_id : productID});

  if (selectedProduct) {
    res.render('details')
    // res.json(selectedProduct);
  } else {
    res.send("Index doesn't exist");
  }
};

const createProduct = async (req, res) => {

};

const updateProduct = async (req, res) => {

};
const deleteProduct = async (req, res) => {

};

module.exports = {
  returnAllProducts,
  returnSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
