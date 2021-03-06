import Product from "./Product.js";
import Review from "./Review.js";
import Category from "./Category.js";


Product.hasMany(Review, { onDelete: "CASCADE" });
Review.belongsTo(Product, { onDelete: "CASCADE" });

export default { Product, Review };
