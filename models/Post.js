import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: {
        type: String, required: true,
        trim: true,
        minlength: 3, maxlength: 150,
    },
    content: {
        type: String, required: true,
        minlength: 10, maxlength: 1000,
    },
    tags: {
        type: [{
            type: String, required: true,
            trim: true,
            maxlength: 30,
        }],
        validate: {
            validator: function (v) { return v.length <= 10; },
            message: 'Max 10 tags allowed'
        }
    },
    views: {
        type: Number, default: 0, min: 0
    },
    isPublished: { type: Boolean },
    publishedAt: { type: Date, default: null },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
        required: true, 
        default: []
    }],
    timestamps: true
})

const Post = mongoose.model("Post", postSchema);

export default Post; 