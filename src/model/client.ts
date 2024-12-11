import {Schema,Document} from 'mongoose'
const notificationSc = new Schema({
    from:{
        type:Schema.ObjectId,
        ref:"Enterprise"
    }
})
const UserModel = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    job:{
        type:String
        ,required:true
    },
    city:{
        type:String,
        required:true
    },
    region:{
        type:String,
        required:true
    },
    RWT:{
        type:Number,
        required:true
    },
    notfication:[{}]
        
})
