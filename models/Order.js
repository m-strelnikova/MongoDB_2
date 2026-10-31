import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    items: {
        type: [{
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                required: true
            },
            quantity: { type: Number, default: 1, min: 1, max: 100 },
            priceAtPurchase: { type: Number, required: true, min: 0 },
        }],
        validate: {
            validator: function (v) { return v && v.length > 0; },
            message: "Order must contain at least one item"
        }
    },
    status: {
        type: String,
        enum: ["paid", "pending", "shipped", "delivered", "cancelled"],
        default: "pending"
    },
    total: { type: Number, required: true, min: 0 },
    shippingAddress: {
        city: {type: String, required: true, trim: true, maxlength: 100}, 
        street: {type: String, required: true, trim: true, maxlength: 100}, 
        zip: {type: String, required: true, trim: true, maxlength: 20}, 
    }, 
    paidAt: { type: Date, default: null }, 
    timestamps: true
});

const Order = mongoose.model("Order", orderSchema);
export default Order; 