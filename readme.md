# Ecommerce Backend API Documentation

Welcome to the documentation for the Ecommerce Backend API. This API provides a set of endpoints to manage categories, products, users, and user carts for your ecommerce application. Follow the guidelines below to interact with the API.

## Table of Contents

- [Installation](#installation)
- [Categories](#categories)
  - [Create Category](#create-category)
  - [Fetch Categories](#fetch-categories)
  - [Remove Category](#remove-category)
  - [Fetch Products by Category](#fetch-products-by-category)
- [Products](#products)
  - [Create Product](#create-product)
  - [Fetch All Products](#fetch-all-products)
  - [Remove Product](#remove-product)
  - [Fetch Specific Product](#fetch-specific-product)
- [Users](#users)
  - [Create User](#create-user)
  - [Fetch All Users](#fetch-all-users)
  - [Fetch Specific User](#fetch-specific-user)
  - [Remove User](#remove-user)
  - [User Login](#user-login)
- [Cart](#cart)
  - [Fetch Cart](#fetch-cart)
  - [Update Cart](#update-cart)
  - [Remove Cart](#remove-cart)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/RohitSignIn/ecommerce-backend-react.git
   cd ecommerce-backend
   ```
2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **.env file (Change accordingly)**

   ```bash
    PORT=3036
    DB_PORT=7777
    DB_NAME=shopcart
    DB_USER=root
    DB_PASS=root
    DB_HOST=localhost
    DB_ALTER=""
    DB_FORCE=""
    DIALECT=mysql
    SALT_ROUND=9
    JWT_SECRET=SECRETNOONEALLOWEDCONFIDENTIALHIIHAAA
    TOKEN_EXPIRY=3 days
    NODE_ENV=development
   ```

4. **Start the application**

   ```bash
   npm start
   ```

5. **The API will be accessible at http://localhost:3036**

##

# Categories

## Create Category

- **Endpoint:** `POST /api/v1/category`
- **Description:** Create a new category.
- **Parameters:**
  - `name` (string): Name of the category.
  - `description` (string): Description of the category.

## Fetch Categories

- **Endpoint:** `GET /api/v1/category`
- **Description:** Fetch all existing categories.

## Remove Category

- **Endpoint:** `DELETE /api/v1/category/:id`
- **Description:** Remove a category by its ID.
- **Parameters:**
  - `id` (string): ID of the category to be removed.

## Fetch Products by Category

- **Endpoint:** `GET /api/v1/category/:name`
- **Description:** Fetch all products belonging to a specific category.
- **Parameters:**
  - `name` (string): Name of the category.

# Products

## Create Product

- **Endpoint:** `POST /api/v1/product`
- **Description:** Create a new product.
- **Parameters:**
  - `title` (string): Title of the product.
  - `price` (number): Price of the product.
  - `description` (string): Description of the product.
  - `image` (string): URL of the product image.
  - `categoryId` (string): ID of the category to which the product belongs.

## Fetch All Products

- **Endpoint:** `GET /api/v1/product`
- **Description:** Fetch all existing products.

## Remove Product

- **Endpoint:** `DELETE /api/v1/product/:id`
- **Description:** Remove a product by its ID.
- **Parameters:**
  - `id` (string): ID of the product to be removed.

## Fetch Specific Product

- **Endpoint:** `GET /api/v1/product/:id`
- **Description:** Fetch details of a specific product by its ID.
- **Parameters:**
  - `id` (string): ID of the product.

# Users

## Create User

- **Endpoint:** `POST /api/v1/user`
- **Description:** Create a new user.
- **Parameters:**
  - `email` (string): Email of the user.
  - `password` (string): Password of the user.

## Fetch All Users

- **Endpoint:** `GET /api/v1/user`
- **Description:** Fetch all existing users.

## Fetch Specific User

- **Endpoint:** `GET /api/v1/user/:id`
- **Description:** Fetch details of a specific user by their ID.
- **Parameters:**
  - `id` (string): ID of the user.

## Remove User

- **Endpoint:** `DELETE /api/v1/user/:id`
- **Description:** Remove a user by their ID.
- **Parameters:**
  - `id` (string): ID of the user to be removed.

## User Login

- **Endpoint:** `POST /api/v1/user/login`
- **Description:** Login a user.
- **Parameters:**
  - `email` (string): Email of the user.
  - `password` (string): Password of the user.

# Cart

## Fetch Cart

- **Endpoint:** `GET /api/v1/cart-products`
- **Description:** Fetch the cart of the logged-in user.

## Update Cart

- **Endpoint:** `http://localhost:3036/api/v1/cart-products`
- **Description:** Add or remove a product from the cart.
- **Parameters:**
  - `productId` (string): ID of the product to be added or removed.
  - `shouldAdd` (boolean): `true` to add the product, `false` to remove it.

## Remove Cart

- **Endpoint:** `DELETE /api/v1/cart-products`
- **Description:** Remove the entire cart of the logged-in user.
