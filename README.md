# 🚀 Node.js Base Project Template

This is a **base Node.js project template** built with essential code
structure principles and project organization practices.

Feel free to modify it as per your requirements.

------------------------------------------------------------------------

# 📁 Project Structure

    src/
    │
    ├── config/
    ├── routes/
    ├── middlewares/
    ├── controllers/
    ├── repositories/
    ├── services/
    └── utils/

------------------------------------------------------------------------

## 📂 src

The `src` folder contains all the **core application source code**.

> ⚠️ Note: This folder does NOT include test files. You can create a
> separate `tests/` folder for that.

------------------------------------------------------------------------

## ⚙️ config

Contains all **configuration and setup logic** for libraries and
modules.

### Examples:

-   Environment variables setup (`dotenv`)
-   Logger configuration
-   Server configuration (`server-config.js`)

------------------------------------------------------------------------

## 🌐 routes

Defines all the **application routes** and connects them to: -
Controllers - Middlewares

------------------------------------------------------------------------

## 🔐 middlewares

Middlewares intercept incoming requests.

### Common use cases:

-   Validation
-   Authentication
-   Authorization

------------------------------------------------------------------------

## 🎮 controllers

Controllers handle incoming requests and responses.

### Responsibilities:

-   Receive request data
-   Call the service layer
-   Structure API responses
-   Send output back to the client

------------------------------------------------------------------------

## 🗄️ repositories

Handles all **database interactions**.

### Includes:

-   Raw SQL queries
-   ORM queries (e.g., Sequelize)

------------------------------------------------------------------------

## 🧠 services

Contains the **business logic** of the application.

### Responsibilities:

-   Process data
-   Interact with repositories
-   Implement core functionality

------------------------------------------------------------------------

## 🛠️ utils

Utility/helper functions and shared logic.

### Examples:

-   Error classes
-   Helper methods

------------------------------------------------------------------------

# ⚡ Project Setup

## 1️⃣ Clone the Repository

``` bash
git clone <your-repo-url>
cd <project-folder>
```

------------------------------------------------------------------------

## 2️⃣ Install Dependencies

``` bash
npm install
```

------------------------------------------------------------------------

## 3️⃣ Setup Environment Variables

Create a `.env` file in the root directory:

``` env
PORT=3000
```

------------------------------------------------------------------------

## 4️⃣ Initialize Sequelize

Run the following inside the `src` folder:

``` bash
npx sequelize init
```

This will generate: - `migrations/` - `seeders/` - `config/config.json`

------------------------------------------------------------------------

## 5️⃣ Configure Database

Update `config/config.json`:

### For Development:

-   Add your DB username
-   Add your DB password
-   Set dialect (e.g., `mysql`, `mariadb`)

### For Production/Test:

-   Replace `host` with your hosted DB URL

------------------------------------------------------------------------

## ▶️ Run the Server

``` bash
npm run dev
```

------------------------------------------------------------------------

# ✅ Summary

This template provides: - Clean architecture - Separation of concerns -
Scalable folder structure - Easy configuration management
