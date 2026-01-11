# 🍽️ Restaurant Menu Backend API

## Description

This project is a RESTful backend API for a restaurant menu application. It provides full CRUD operations for categories, products, and ingredients, including soft delete functionality and advanced filtering using query parameters.

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

1. **Clone the repository**

```bash
git clone [https://github.com/sunazaloglu/restaurant-menu-backend.git](https://github.com/sunazaloglu/restaurant-menu-backend.git)
cd restaurant-menu-backend
Install dependenciesBashnpm install
Configure Environment VariablesCreate a .env file in the root directory (refer to .env.example):Kod snippet'iDB_NAME=your_database_name
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_db_user
DB_PASSWORD=your_db_password
PORT=3000
Run Database MigrationsBashnpm run migrate
Start Development ServerBashnpm run dev
🔗 API Endpoints📂 CategoriesQuery Filters: showDeleted (true | false | onlyDeleted)MethodEndpointDescriptionGET/api/v1/categoriesList categories with filtersGET/api/v1/categories/:idGet category by IDPOST/api/v1/categoriesCreate new categoryPATCH/api/v1/categories/:idUpdate categoryDELETE/api/v1/categories/:idSoft delete category🍔 ProductsQuery Filters: category (ID), showDeleted (true | false | onlyDeleted)MethodEndpointDescriptionGET/api/v1/productsList products with filtersGET/api/v1/products/:idGet product by IDPOST/api/v1/productsCreate new productPATCH/api/v1/products/:idUpdate productDELETE/api/v1/products/:idSoft delete product🧂 IngredientsQuery Filters: showDeleted (true | false | onlyDeleted)MethodEndpointDescriptionGET/api/v1/ingredientsList ingredients with filtersGET/api/v1/ingredients/:idGet ingredient by IDPOST/api/v1/ingredientsCreate new ingredientPATCH/api/v1/ingredients/:idUpdate ingredientDELETE/api/v1/ingredients/:idSoft delete ingredient🛠 Technical NotesSoft Delete: Implemented using the deleted_at field. Records are not physically removed.Filtering: All list endpoints support query-based filtering (e.g., ?showDeleted=true).Architecture: Controllers, Models, and Routes are strictly separated.Validation: Request body validation is handled at the controller level.📮 TestingA Postman Collection is included in the project root directory. It contains all endpoints, example requests, and responses.📊 HTTP Status Codes200 OK201 Created400 Bad Request404 Not Found500 Internal Server Error✅ Project Status[x] CRUD operations completed[x] Soft delete implemented[x] Filtering via query params[x] Postman collection included[x] Ready for evaluation 🚀
```
