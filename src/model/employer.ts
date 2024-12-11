import {Schema,model,models} from 'mongoose'
const employerSc = new Schema({
   nameOfInst:{
    type:String,
    required:true
   },
   description:{
    type:String,
    required:true
   },
   Logo:{
    type:String,
    required:true
   },
   RWT:{
    type:Number,
    required:true
   },
   city:{
    type:String,
    required:true
   },
   region:{
    type:String,
    required:true
   }
})
const Emprise = model("Emprise",employerSc) || models.Enterprise
