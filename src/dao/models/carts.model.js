import mongoose from 'mongoose';
const cartscollection = 'carts';
const cartsSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    sobrenome: {
        type: String,
        required: true
    },
    idade: {
        type: Number,
        required: true
    },
    cpf:{
        type: String,
        unique: true,
        required: true
    },
    curso: {
        type: String,
        required: true
    },
    nota: Number,
});

export const cartsModel = mongoose.model(cartscollection, cartsSchema);