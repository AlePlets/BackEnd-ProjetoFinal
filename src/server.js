import express, { urlencoded } from 'express';
const productsRouter = require('./routes/products');
const cartsRouter = require('./routes/carts');
import mongoose from 'mongoose';

const app = express();
const PORT = 8080;

app.use(urlencoded({extended: true}));
app.use(express.json());

app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

const mongoAtlasUrl = 'mongodb+srv://ale:123@cluster0.sxp8jkm.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(mongoAtlasUrl)
.catch((error) => {
    if (error) {
    console.log("Cannot connect to mongoDB: " + error)
    process.exit();
    }
});


app.listen(PORT, () => {
  console.log(`Servidor ouvindo na porta ${PORT}`);
});