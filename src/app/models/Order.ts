import { model,Schema } from "mongoose";

//usado para definir os parametro do model
const schema = new Schema({
  table:{
    type:String,
    required: true,
  },
  status:{
    type:String,
    enum:['WAITING','IN_PRODUCTION','DONE'],
    default:'WAITING',
  },
  createdAt:{
    type:Date,
    default:Date.now,
  },
  products:{
    required:true,

  }
});

export const Order = model('Order',schema);
