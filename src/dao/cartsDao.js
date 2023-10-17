import Cart from '../models/carts.model.js';
import Product from '../models/products.model.js';

export const createCart = async () => {
    const cart = new Cart();
    await cart.save();
    return cart;
};

export const getCart = async (cartId) => {
    return await Cart.findById(cartId).populate('products.productId');
};

export const addProductToCart = async (cartId, productId, quantity) => {
    const cart = await Cart.findById(cartId);
    const product = await Product.findById(productId);

    if (!product) {
        throw new Error('Product not found');
    }

    const cartProductIndex = cart.products.findIndex(p => p.productId.toString() === productId);
    
    if (cartProductIndex >= 0) {
        cart.products[cartProductIndex].quantity += quantity;
    } else {
        cart.products.push({ productId, quantity });
    }

    await cart.save();
    return cart;
};
