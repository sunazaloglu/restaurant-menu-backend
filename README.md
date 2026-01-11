# 🍽️ Restaurant Menu Backend API

## Description
This project is a RESTful backend API for a restaurant menu application.  
It provides full CRUD operations for **categories**, **products**, and **ingredients**, including **soft delete** functionality and **query-based filtering**.

The API follows REST principles and is built with a clean, modular architecture using Express and Knex.

---

## 🛠 Technologies
- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** JavaScript (ES Modules)
- **Database:** PostgreSQL
- **Query Builder:** Knex.js

---

## 📦 Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/sunazaloglu/restaurant-menu-backend.git
cd restaurant-menu-backend
2. Install dependencies
bash
Kodu kopyala
npm install
3. Configure Environment Variables
Create a .env file in the root directory (see .env.example):

env
Kodu kopyala
DB_NAME=your_database_name
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_db_user
DB_PASSWORD=your_db_password
PORT=3000
4. Run Database Migrations
bash
Kodu kopyala
npm run migrate
5. Start Development Server
bash
Kodu kopyala
npm run dev
🔗 API Endpoints
📂 Categories
Query Filters:

showDeleted: true | false | onlyDeleted

Method	Endpoint	Description
GET	/api/v1/categories	List categories
GET	/api/v1/categories/:id	Get category by ID
POST	/api/v1/categories	Create new category
PATCH	/api/v1/categories/:id	Update category
DELETE	/api/v1/categories/:id	Soft delete category

🍔 Products
Query Filters:

category: category ID

showDeleted: true | false | onlyDeleted

Method	Endpoint	Description
GET	/api/v1/products	List products
GET	/api/v1/products/:id	Get product by ID
POST	/api/v1/products	Create new product
PATCH	/api/v1/products/:id	Update product
DELETE	/api/v1/products/:id	Soft delete product

🧂 Ingredients
Query Filters:

showDeleted: true | false | onlyDeleted

Method	Endpoint	Description
GET	/api/v1/ingredients	List ingredients
GET	/api/v1/ingredients/:id	Get ingredient by ID
POST	/api/v1/ingredients	Create new ingredient
PATCH	/api/v1/ingredients/:id	Update ingredient
DELETE	/api/v1/ingredients/:id	Soft delete ingredient

🛠 Technical Notes
Soft Delete: Implemented via deleted_at. Records are not permanently removed.

Filtering: All list endpoints support query-based filtering.

Architecture: Controllers, Models, and Routes are strictly separated.

Validation: Input validation handled at controller level.

📮 Testing
A Postman Collection is included in the project root:

All endpoints

Example request & response bodies

base_url environment variable

📊 HTTP Status Codes
200 OK

201 Created

400 Bad Request

404 Not Found

500 Internal Server Error

✅ Project Status
 CRUD operations completed

 Soft delete implemented

 Query filtering supported

 Postman collection included

 Ready for evaluation 🚀