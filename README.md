# E-commerce Catalog (Nested Documents) - Node.js + Express + Mongoose

## Overview
This project demonstrates an e-commerce product catalog using MongoDB nested documents (variants array).
Each product has `name`, `price`, `category`, and an array of `variants` (color, size, stock).

## Setup
1. Copy `.env.example` to `.env` and set `MONGO_URI`.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Seed the database (optional):
   - Use the included `sample_data.json`. You can import using a script or Postman to POST to `/products`.
4. Run the server:
   ```bash
   npm run dev
   ```
   or
   ```bash
   npm start
   ```

## API Endpoints
- `GET /products` - List all products
- `POST /products` - Create a product (body: JSON)
- `GET /products/:id` - Get product by ID
- `PUT /products/:id` - Update product
- `DELETE /products/:id` - Delete product
- `GET /products/category/:category` - Get products by category
- `GET /products/by-color/:color` - Get products that have a variant with the given color

## Example product JSON
```json
{
  "name": "Running Shoes",
  "price": 120,
  "category": "Footwear",
  "variants": [
    { "color": "Red", "size": "M", "stock": 10 },
    { "color": "Blue", "size": "L", "stock": 5 }
  ]
}
```

## Notes
- The `by-color` route performs a case-insensitive match on variant color.
- Validation errors return HTTP 400 with details.
