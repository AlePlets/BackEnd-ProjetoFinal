
import { Router } from 'express';
import { cartsModel } from '../models/carts.model.js';
import {newCart, listProducts, addProducts} from '../Controllers/CartsController';


//const fs = require('fs');

const router = new Router();

// Rota para criar um novo carrinho
router.post('/', newCart)
  

// Rota para listar os produtos de um carrinho pelo id
router.get('/:cid', listProducts)

// Rota para adicionar um produto a um carrinho pelo id do carrinho
router.post('/:cid/product/:pid', addProducts)


export default router;