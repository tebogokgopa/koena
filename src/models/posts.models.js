const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BaseModel = require('../models/base.model');
module.exports = mongoose=>{
    const postSchema = new Schema({
        
        username: {
            type: String,
            required: true,
        },

    
        img: {
            data: Buffer,
            type: String,
            required: true,
            default: null
        },

        post_title: {
            type: String,
            required: true
        },

        post_body: {
            type: String,
            required: true
            
        },

        email: {
            type: String,
            validate: {
                validator: (v)=> {
                    return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
                },
                message: '{VALUE} is not a valid email!'
            },
            required: true
        },


        uploadDate: {
            type: Date, 
            default: Date.now}
        
    }, 
    { timestamps: true });

    postSchema.method('toJSON',  ()=> {
        const post = this.toObject();
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;

    });

    const Post = mongoose.model("post", postSchema);
    return Post;
};
