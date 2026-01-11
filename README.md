# 🍽️ Restaurant Menu Backend API

## Description
This project is a RESTful backend API for a restaurant menu application. It provides full CRUD operations for categories, products, and ingredients, along with filtering capabilities and soft delete functionality.

The API follows REST principles and is structured with a clean and modular architecture.

---

## 🛠 Technologies

* **Runtime:** Node.js
* **Framework:** Express.js
* **Language:** JavaScript (ES Modules)
* **Database:** PostgreSQL
* **Query Builder:** Knex.js

---

## 📦 Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/sunazaloglu/restaurant-menu-backend.git
    cd restaurant-menu-backend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env` file in the root directory:
    ```env
    DB_NAME=your_database_name
    DB_HOST=localhost
    DB_PORT=5432
    DB_USER=your_db_user
    DB_PASSWORD=your_db_password
    PORT=3000
    ```
    An `.env.example` file is included as a reference for environment configuration.

4.  **Run Database Migrations:**
    ```bash
    npm run migrate
    ```

5.  **Start Development Server:**
    ```bash
    npm run dev
    ```

---
 
## 🔗 API Endpoints

### 📂 Categories
* **Query Filters:** * `showDeleted`: `true`, `false` (default), `onlyDeleted`

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/v1/categories` | List all categories with filters |
| `GET` | `/api/v1/categories/:id` | Get category details |
| `POST` | `/api/v1/categories` | Create new category |
| `PATCH` | `/api/v1/categories/:id` | Update category |
| `DELETE` | `/api/v1/categories/:id` | Soft delete category |

### 🍔 Products
* **Query Filters:** * `category`: Filter by category ID
    * `showDeleted`: `true`, `false` (default), `onlyDeleted`

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/v1/products` | List products with filters |
| `GET` | `/api/v1/products/:id` | Get product details |
| `POST` | `/api/v1/products` | Create new product |
| `PATCH` | `/api/v1/products/:id` | Update product |
| `DELETE` | `/api/v1/products/:id` | Soft delete product |

### 🧂 Ingredients
* **Query Filters:** * `showDeleted`: `true`, `false` (default), `onlyDeleted`

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/v1/ingredients` | List ingredients with filters |
| `GET` | `/api/v1/ingredients/:id` | Get ingredient details |
| `POST` | `/api/v1/ingredients` | Create new ingredient |
| `PATCH` | `/api/v1/ingredients/:id` | Update ingredient |
| `DELETE` | `/api/v1/ingredients/:id` | Soft delete ingredient |

---

## 🛠 Technical Notes

* **Soft Delete:** Implemented using the `deleted_at` field. Deleted records remain in the DB but are hidden from standard queries.
* **Architecture:** Controllers, models, and routes are strictly separated for maintainability.
* **Validation:** Request body validation is handled at the controller level.

## 📮 Testing
A **Postman Collection** is included in the project folder to test all API endpoints with example request/response bodies.

## 📊 HTTP Status Codes
- `200 OK`
- `201 Created`
- `400 Bad Request`
- `404 Not Found`
- `500 Internal Server Error`

## ✅ Project Status
- [x] CRUD operations completed
- [x] Soft delete implemented
- [x] Filtering via query parameters
- [x] Postman collection included
- [x] Ready for evaluation 🚀