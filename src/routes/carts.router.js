const express = require('express');
import { cartsModel } from './dao/models/carts.model';
//const fs = require('fs');

const router = express.Router();

// Rota para criar um novo carrinho
router.post('/', (req, res) => {
  const newCart = req.body;
  //const carts = JSON.parse(fs.readFileSync('./data/carts.json'));
  try {
    newCart.id = cartsModel.length + 1; // Gera um novo id sequencial
    newCart.products = [];
    carts.push(newCart);
    //fs.writeFileSync('./data/carts.json', JSON.stringify(carts));
    res.status(201).json(newCart);
  } catch (error) {
    console.log(res.status(400) + "Cannot create cart with mongoose: " + error);
  }

});

// Rota para listar os produtos de um carrinho pelo id
router.get('/:cid', async (req, res) => {
  try {
    const { cid } = req.params;
    //const carts = JSON.parse(fs.readFileSync('./data/carts.json'));
    const cart = await cartsModel.find((c) => c.id === parseInt(cid));
  } catch (error) {
    console.log("Cannot get Products with mongoose: " + error);
  }

});

// Rota para adicionar um produto a um carrinho pelo id do carrinho
router.post('/:cid/product/:pid', (req, res) => {
  const { cid, pid } = req.params;
  // const carts = JSON.parse(fs.readFileSync('./data/carts.json'));
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
    // fs.writeFileSync('./data/carts.json', JSON.stringify(carts));
    res.json(cart.products);
  }
});

module.exports = router;