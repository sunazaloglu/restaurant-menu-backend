# 📝 Blog Site Backend API

## Description

This project is a RESTful backend API for a blog application. It provides full CRUD operations for categories, posts, and comments, along with advanced filtering capabilities and soft delete functionality.

The API follows REST principles and is structured with a clean, modular architecture using Express and Knex.

---

## 🛠 Technologies

- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** TypeScript
- **Database:** PostgreSQL
- **Query Builder:** Knex.js

---

## 📦 Installation & Setup

1. **Clone the repository**

```bash
git clone <repository-url>
cd blog-site-backend

Install dependencies:

npm install
Configure Environment Variables: Create a .env file in the root directory:

DB_NAME=your_database_name
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_db_user
DB_PASSWORD=your_db_password
PORT=3000
An .env.example file is included as a reference for environment configuration.

Run Database Migrations:

npm run migrate
Start Development Server:

npm run dev

API Endpoints

📂 Categories

Query Filters

showDeleted: true, false (default), onlyDeleted

Method	Endpoint	Description
GET	/api/v1/categories	List all categories with filters
GET	/api/v1/categories/:id	Get category details
POST	/api/v1/categories	Create new category
PATCH	/api/v1/categories/:id	Update category
DELETE	/api/v1/categories/:id	Soft delete category

🍔 Products

Query Filters

category: Filter by category ID

showDeleted: true, false (default), onlyDeleted

Method	Endpoint	Description
GET	/api/v1/products	List products with filters
GET	/api/v1/products/:id	Get product details
POST	/api/v1/products	Create new product
PATCH	/api/v1/products/:id	Update product
DELETE	/api/v1/products/:id	Soft delete product

🧂 Ingredients

Query Filters

showDeleted: true, false (default), onlyDeleted

Method	Endpoint	Description
GET	/api/v1/ingredients	List ingredients with filters
GET	/api/v1/ingredients/:id	Get ingredient details
POST	/api/v1/ingredients	Create new ingredient
PATCH	/api/v1/ingredients/:id	Update ingredient
DELETE	/api/v1/ingredients/:id	Soft delete ingredient

🛠 Technical Notes

Soft Delete:
Implemented using the deleted_at field. Deleted records remain in the database but are hidden from default queries.

Filtering:
All list endpoints support query-based filtering using query parameters.

Architecture:
Controllers, models, and routes are strictly separated for maintainability.

Health Check: Access GET /projectcheck to verify API status.
{ "message": "OK" }

Validation:
Request body validation is handled at the controller level.

📮 Testing

A Postman Collection is included in the project folder to test all API endpoints.
The collection includes:

Example requests and responses

Pre-configured endpoints

base_url collection variable


📊 HTTP Status Codes

200 OK

201 Created

400 Bad Request

404 Not Found

500 Internal Server Error

✅ Project Status

 CRUD operations completed

 Soft delete implemented

 Filtering via query parameters

 Postman collection included

 Ready for evaluation 🚀
```
