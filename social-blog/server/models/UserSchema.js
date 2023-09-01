import mongoose from "mongoose"
const UserSchema = new UserSchema({
    firstName: {
        type: 'string',
        required: true,
        min: 3,
        max: 50
    },
    lastName: {
        type: 'string',
        required: true,
        min: 3,
        max: 50
    },
    email: {
        type: 'string',
        required: true,
        min: 3,
        max: 50,
        unique: true
    },
    password: {
        type: 'string',
        required: true,
        min: 3,
        max: 50
    },
    picturePath: {
        type: 'string',
        default: ""
    },
    friends: {
        type: Array,
        default: []
    },
    location: String,
    occupation: String,
    viewedprofile: Number,
    impressions: Number

}, { timestamps: true });
export default mongoose.model("User", UserSchema); 