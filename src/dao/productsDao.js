import Product from '../models/Product.js';

export const createProduct = async (productData) => {
    const product = new Product(productData);
    await product.save();
    return product;
};

export const getProductById = async (productId) => {
    return await Product.findById(productId);
};

export const getAllProducts = async () => {
    return await Product.find({});
};

export const updateProduct = async (productId, updatedData) => {
    const product = await Product.findById(productId);
    if (!product) {
        throw new Error('Product not found');
    }

    Object.assign(product, updatedData);
    await product.save();
    return product;
};

export const deleteProduct = async (productId) => {
    const product = await Product.findById(productId);
    if (!product) {
        throw new Error('Product not found');
    }

    await product.remove();
    return product;
};
