import { model,Schema } from "mongoose";

//usado para definir os parametro do model
const schema = new Schema({
  name:{
    type:String,
    required: true,
  },
  icon:{
    type:String,
    required: true,
  },
});

export const Category = model('Category',schema);
