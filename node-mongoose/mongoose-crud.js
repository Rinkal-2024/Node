// const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/crud");

// const ProductSchema = new mongoose.Schema({
//   name: String,
//   price: Number,
//   brand: String,
//   category: String,
// });

// const saveInDB = async () => {
//   const Product = mongoose.model("product", ProductSchema);
//   let data = new Product({
//     name: "v8",
//     price: 600,
//     brand: "vivo",
//     category: "mobile",
//   });
//   let result = await data.save();
//   console.log(result);
// };
// saveInDB();

// const updateInDB = async () => {
//   const Product = mongoose.model("products", ProductSchema);
//   let data = await Product.updateOne(
//     { name: "reno52" },
//     { $set: { price: 900 } }
//   );
//   console.log(data);
// };
// updateInDB();

// const deleteInDB = async () =>{
//   const Product = mongoose.model("product" , ProductSchema);
//   let data = await Product.deleteMany({name : "v98"});
//   console.log(data);

// }
// deleteInDB();

// const findInDB =async () =>{
//   const product = mongoose.model("product" , ProductSchema);
//   let data = await product.find({name: "s23" });
//   console.log(data);
// }
// findInDB();
