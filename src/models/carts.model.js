import mongoose from 'mongoose';

const cartProductSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

const cartSchema = new mongoose.Schema({
    products: [cartProductSchema],
    status: {
        type: String,
        enum: ['active', 'purchased'],
        default: 'active'
    }
});

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;
