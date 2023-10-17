import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2'

const productsCollection = 'Products';
const productsSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        index: true
    },
    titulo: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    code: {
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


productsSchema.plugin(mongoosePaginate);
const productsModel = mongoose.model(productsCollection, productsSchema);

export default productsModel;