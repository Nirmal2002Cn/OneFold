# 🛍️ OneFold – Full Stack E-Commerce Application

OneFold is a modern, fully responsive fashion e-commerce web application built using the **MERN stack (MongoDB, Express, React, Node.js)**. It delivers a complete shopping experience—from product browsing to secure checkout—with separate user and admin functionalities.

---

## 🚀 Features

### 👤 User Features

* Secure **User Authentication** (Register / Login) using JWT
* Role-based access control (User vs Admin)
* Browse fashion products with categories and sizes
* Product detail page with size selection
* Dynamic **Shopping Cart** with real-time total calculation
* **Cash on Delivery** checkout process
* Address validation during checkout
* View personal **Order History**

### 🛠️ Admin Features

* Dedicated **Admin Dashboard**
* Add, edit, and manage products
* Manage product categories and sizes
* View incoming orders
* Update order status (Pending → Shipped → Delivered)

### 📱 UI & UX

* Fully **responsive design** (mobile, tablet, desktop)
* Built using React and pure CSS
* Clean and modern fashion-focused UI

---

## 🛠️ Technology Stack

### Frontend

* React.js
* Vite
* React Router DOM
* Context API (State Management)
* CSS (Responsive Design)

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose ODM

### Authentication & Security

* JSON Web Tokens (JWT)
* Bcrypt (Password Hashing)

---

## 📊 Database Architecture (ER Diagram)

The following ER diagram illustrates the database structure of the OneFold application, including Users, Products, and Orders.

> Designed using Draw.io – Hybrid referencing & embedding model

![OneFold ER Diagram](https://drive.google.com/uc?export=view\&id=1RCROsakVov1W_oq_J3lY8hpGhn3Bqauv)

### Schema Highlights

* **Users**: Linked to Orders via ObjectId. Includes role-based access (Admin / User)
* **Products**: Fashion-specific schema with sizes, images, and categories
* **Orders**: Embeds `orderItems` to preserve historical pricing data if product prices change later

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/onefold.git
```

### 2️⃣ Install Dependencies

#### Backend

```bash
cd SERVER
npm install
```

#### Frontend

```bash
cd ../Client
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file inside the **SERVER** folder:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

---

## ▶️ Run the Application

### Terminal 1 – Backend

```bash
cd SERVER
npm start
```

### Terminal 2 – Frontend

```bash
cd Client
npm run dev
```

The application will run locally with:

* Frontend: `http://localhost:5173`
* Backend: `http://localhost:5000`

---

## 👨‍💻 Admin Credentials (For Testing)

> ⚠️ Admin role must be manually assigned via MongoDB

* **Email:** [admin@onefold.com](mailto:admin@onefold.com)
* **Password:** Your password
* **Role:** Admin

---

## 📌 Project Status

✔ Core features implemented
✔ Authentication & Authorization completed
✔ Admin panel functional
✔ Responsive UI

🚧 Future Improvements:

* Online payment gateway integration
* Product reviews & ratings
* Wishlist feature
* Improved admin analytics dashboard

---

## 🙌 Author

**Chamila Nirmal**
ICT Undergraduate – Uva Wellassa University of Sri Lanka
Aspiring Full Stack Web Developer

---

⭐ *If you like this project, don’t forget to give it a star!*
