import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const productsCollection = 'Products';
const productSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  preco: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['ativo', 'inativo'],
    default: 'ativo',
  },
});

productSchema.plugin(mongoosePaginate);

const Product = mongoose.model(productsCollection, productSchema);

export default Product;
