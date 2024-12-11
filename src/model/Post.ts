import {Schema,model,models,Document} from 'mongoose'

const PostSC = new Schema({
    from:{
        type:Schema.ObjectId,
        ref:"Enterprise" ,
        required:true
    },
    sector:{
        type:String, 
        required:true
    },
    title:{
        type:String, 
        required:true
    },
    content:{
        type:String, 
        required:true
    },
    applicationDate:{
        type:String,
        required:true
    }
})
const Post = model("Post",PostSC) || models.Post
