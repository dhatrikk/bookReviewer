<h1 align="center">📚 BOOKREVIEWER</h1>

<p align="center">
  <strong>BOOKREVIEWER</strong> is a full-featured <strong>book review and management application</strong> built using the <strong>MERN stack</strong> — MongoDB, Express, React, and Node.js.<br>
  Users can browse books, post reviews with star ratings, manage their favorites, and admins can oversee books and users with dedicated privileges.
</p>

<p align="center">
  🔗 <a href="https://book-reviewer-jet.vercel.app/">Live Frontend</a> |
  🖥️ <a href="https://bookreviewer-0tw2.onrender.com/">Backend API</a>
</p>

<hr>

## 🌟 Features

### 🔐 User Authentication
- Secure user registration and login system  
- Passwords encrypted using **Bcrypt**  
- JWT-based authentication for protected routes  

### 📖 Book Listings & Reviews
- Browse, search, and view book details  
- Leave reviews with star ratings  
- View community insights from user feedback  

### 👤 User Profiles
- Track personal activity and favorite books  
- Manage curated reading lists  

### ⚡ User Roles & Permissions
- Role-based access control for **users** and **admins**  
- Admins can **add, edit, and delete books**  
- Admins can **manage users and roles**  

<hr>

## 🛠️ Technologies Used

### 🖥️ Frontend
- **React.js** – Component-based UI  
- **Tailwind CSS** – Responsive and modern styling  
- **Shadcn/UI** – Prebuilt UI components for enhanced UX  
- **React Hook Form** – Form handling and validation  
- **Recoil** – Global state management  

### ⚙️ Backend
- **Node.js** & **Express.js** – RESTful API and server  
- **MongoDB** with **Mongoose** – Database and schema modeling  
- **Bcrypt** – Secure password hashing  
- **CORS** – Cross-origin request handling  
- **JWT** – Authentication and session management  

### 🔧 Other Tools & Integrations
- **Axios** – HTTP client for API requests  
- **Cloudinary** – Image hosting and management (optional)  
- **Dotenv** – Secure environment variable management  

<hr>

## 🚀 Deployment

- **Frontend:** Hosted on [Vercel](https://book-reviewer-jet.vercel.app/)  
- **Backend:** Hosted on [Render](https://bookreviewer-0tw2.onrender.com/)  
- **Database:** MongoDB Atlas  

<hr>

## 🧑‍💻 Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/dhatrikk/bookReviewer.git
cd bookreviewer
````

### 2. Install Dependencies

```bash
# For backend
cd backend
npm install

# For frontend
cd ../frontend
npm install
```

### 3. Set Environment Variables

Create a `.env` file in the backend directory:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_URL=your_cloudinary_url (optional)
```

### 4. Run the Application

```bash
# Run backend
cd backend
npm start

# Run frontend
cd ../frontend
npm run dev
```

App will be available at `http://localhost:5173`.

<hr>

## 📸 Preview

![Book Reviewer Screenshot](https://via.placeholder.com/1000x500?text=Book+Reviewer+Preview)

<hr>

## 🏗️ Future Enhancements

* AI-powered book recommendations
* Personalized reading dashboards
* Email notifications for new reviews
* Advanced search and filtering options

<hr>

## 📜 License

This project is licensed under the **MIT License**.

---

<h3 align="center">⭐ If you like this project, consider giving it a star!</h3>
