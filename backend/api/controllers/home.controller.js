const Post = require("../models/post.model")

// GET 
module.exports.index = async (req, res) => {
  const find = {
    deleted: false,
  }
  
  // query 
  if(req.query.price_from || req.query.price_to) {
    let price_from = ""
    let price_to = ""

    if(req.query.price_from) {
      price_from = parseInt(req.query.price_from)
    }
    if(req.query.price_to) {
      price_to = parseInt(req.query.price_to)
    }

    if(price_from && price_to) {
      find.price = { $gte: price_from, $lte: price_to }
    } else if(price_from) {
      find.price = { $gte: price_from }
    } else {
      find.price = { $lte: price_to }
    }
  }

  if(req.query.province) {
    find.province = req.query.province
  }

  const posts = await Post
  .find(find)

  res.json(posts)
}
