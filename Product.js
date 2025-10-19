const mongoose = require('mongoose');

const variantSchema = new mongoose.Schema({
  color: { type: String, required: true, trim: true },
  size: { type: String, trim: true },
  stock: { type: Number, default: 0, min: 0 }
}, { _id: true });

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  price: { type: Number, required: true, min: 0 },
  category: { type: String, required: true, trim: true },
  variants: { type: [variantSchema], default: [] }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
