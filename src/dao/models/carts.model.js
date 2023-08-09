import mongoose from 'mongoose';
const cartscollection = 'carts';
const cartsSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true,
        index:true
    },
    titulo: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    code:{
        type: String,
        required: true
    },
    preco: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['ativo', 'inativo'],
        default: 'ativo'
    }
});
export const cartsModel = mongoose.model(cartscollection, cartsSchema);