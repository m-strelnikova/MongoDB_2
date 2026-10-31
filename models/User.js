import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, "Invalid email format"]
    },
    password: { type: String, required: true, minlength: 6 },
    role: {
        type: String,
        enum: ["user", "admin", "moderator"],
        default: "user"
    },
    isActive: { type: Boolean, default: "true" },
    timestamps: true,
    avatarUrl: {
        type: String,
        trim: true,
    },
    bio: {
        type: String,
        trim: true,
        maxlength: 300,
    },
    profile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Profile",
        unique: true
    },
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: []
    }],
    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: []
    }],
    lastLoginAt: { type: Date, default: null }
});

const User = mongoose.model("User", userSchema);

export default User; 
