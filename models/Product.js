import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String, required: true,
        minlength: 2, maxlength: 100
    },
    description: {
        type: String,
        trim: true,
        maxlength: 1000
    },
    price: { type: Number, required: true, min: 0 },
    stock: { type: Number, required: true, min: 0, default: 0 },
    sku: {
        type: String, required: true, unique: true,
        trim: true, uppercase: true
    },
    category: {
        type: String,
        enum: ["books", "clothing", "accessories", "other"],
        default: "other"
    },
    isAvailable: { type: Boolean, default: true },
    timestamps: true,
})

const Product = mongoose.model("Product", productSchema);
export default Product;