const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");
mongoose.plugin(slug);

const postSchema = new mongoose.Schema({
    title: String,
    link: String,
    images: Array,
    rating: String,
    price: String,
    acrage: String,
    address: String,
    description: String,
    author: String,
    avatar: {
        type: String,
        default: "https://png.pngtree.com/element_our/20200610/ourmid/pngtree-character-default-avatar-image_2237203.jpg"
    },
    phone: String,
    category_id: String,

    deleted: {
        type: Boolean,
        default: false
    },
    slug: {
        type: String,
        slug: "title", // thích trường nào thì thêm vào , phải là duy nhất 
        unique: true
    }
}, {
    timestamps: true // Tự động thêm trường createAt và updateAt
});


const Post = mongoose.model("Post", postSchema, "posts");

module.exports = Post;