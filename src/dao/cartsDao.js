import cartsModel from "../models/carts.model.js";

export default class {
    createCart = async (cart) => {
        try{
            let result = await cartsModel.create(cart);
            return result;
        }catch(error){
            console.log(error);
            return null;
        }
    }
}