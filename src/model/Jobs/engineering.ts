import {Schema,model,models,Document} from 'mongoose'

const SE = new Schema({
    id:[{type:Schema.ObjectId,required:true}]
})