import { model,Schema } from "mongoose";

//usado para definir os parametro do model
const schema = new Schema({
  name:{
    type:String,
    required: true,
  },
  description:{
    type:String,
    required: true,
  },
  imagePath:{
    type:String,
    required: true,
  },
  Price:{
    type:Number,
    required: true,
  },
  Ingredients:{
    required:true,
    type:[{
      name:{
        type:String,
        required: true,
      },
      ingredient:{
        type:String,
        required: true,
      },
    }]
  },
  types:[{
    product:{
      type:Schema.Types.ObjectId,
      required: true,
      ref: 'Product',
    },
    quantity:{
      type:Number,
      default:1,
    }
  }],
});

export const Product = model('Product',schema);
