import { cartsModel } from '../models/carts.model.js';
import CartsFromDao from "../dao/cartsDao.js";


const cartsService = new CartsFromDao();

export const newCart = async (req, res) => {
    const newCart = req.body;

    let result = await cartsService.createCart();

    if(!result){
        res.status(404).send('Erro ao criar carrinho');
    }
    res.send(result);
}


//Falta passar essas regras de negócio a baixo pela cartsDao seguir modelo de newCart
export const listProducts = async (req, res) => {
    try {
        const { cid } = req.params;
        
        const cart = await cartsModel.find((c) => c.id === parseInt(cid));
    } catch (error) {
        console.log("Cannot get Products with mongoose: " + error);
    }
}

export const addProducts = async(req, res) => {
    const { cid, pid } = req.params;

    const cartIndex = carts.findIndex((c) => c.id === parseInt(cid));
    if (cartIndex === -1) {
        res.status(404).json({ error: 'Carrinho não encontrado' });
    } else {
        const cart = carts[cartIndex];
        const existingProductIndex = cart.products.findIndex((p) => p.produto === parseInt(pid));
      if (existingProductIndex === -1) {
        cart.products.push({ produto: parseInt(pid), quantidade: 1 });
      } else {
        cart.products[existingProductIndex].quantidade++;
      }
      
      res.json(cart.products);
    }
}


    




