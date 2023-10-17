import { productsModel } from '../models/products.model.js';
import ProductsFromDao from "../dao/productsDao.js";

const ProductsService = new Products()

export const getProducts = async (req, res) => {
    let result = await ProductsService.getProducts()
    if(!result){
        res.status(404).send('Products not found')
    }
    res.send(result)
}

export const getProductsById = async (req, res) => {
    const {id} = req.params;
    let result = await ProductsService.getProductsById(id)
    if(!result){
        res.status(404).send('Products not found')
    }
    res.send(result)
}

export const createProducts = async (req, res) => {
    const newProducts = req.body;
    let result = await ProductsService.saveProducts(newProducts)
    if(!result){
        res.status(404).send('Products not found')
    }
    res.send(result)
}

export const addProduct = async (req, res) => {
    let product = req.body;
    let ProductsId = req.params.id;
    let Products = await ProductsService.getProductsById(ProductsId)
    if(!result){
        res.status(404).send('Products not found')
    } else {
        Products.products.push(product);
        let result = await ProductsService.updateProducts(ProductsId, Products)
        res.send(result)
    }
}