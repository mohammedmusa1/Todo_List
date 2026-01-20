# ✅ Safe Todo Web App

A **secure, modern, and production-ready Todo application** built with **Node.js**, **Express**, **MongoDB Atlas**, and **EJS**.  
Designed with **best security practices**, clean UI, and **cloud deployment readiness**.

---

## 🚀 Live Demo
> (Add your Render live URL here after deployment)
> 


---

## ✨ Features

- ➕ Add todos
- ✔ Mark todos as completed
- 🗑 Delete todos
- ☁️ MongoDB Atlas cloud database
- 🔐 No credentials in source code
- 🛡 Security headers using Helmet
- 🎨 Clean & professional dark UI
- ⚡ Fast & lightweight
- 🚀 Ready for free cloud hosting (Render)

---

## 🧠 Tech Stack

| Technology | Purpose |
|----------|--------|
| Node.js | Backend runtime |
| Express.js | Web framework |
| MongoDB Atlas | Cloud database |
| Mongoose | MongoDB ODM |
| EJS | Server-side templates |
| Helmet | Security headers |
| CSS | UI styling |
| Nodemon | Development server |
| Render | Free cloud hosting |

---

## 📂 Project Structure
todo-app/
│
├── models/
│ └── Todo.js
│
├── public/
│ └── css/
│ └── style.css
│
├── views/
│ └── index.ejs
│
├── .env # Environment variables (NOT pushed)
├── .gitignore
├── package.json
├── server.js


---

## 🔐 Environment Variables

Create a `.env` file in the root directory:


MONGO_URI=your_mongodb_atlas_connection_string
PORT=3000
NODE_ENV=production


⚠️ `.env` is excluded from GitHub using `.gitignore`.

---

## 🛠 Installation & Local Setup

### 1️⃣ Clone Repository


### 2️⃣ Install Dependencies

npm install


### 3️⃣ Run in Development

npm run dev

http://localhost:3000


---

## ☁️ Deployment (Render)

### Required Settings on Render

- **Build Command**



Render automatically:
- Assigns PORT
- Enables HTTPS
- Restarts on crashes

---

## 🛡 Security Practices Used

- ❌ No database credentials in code
- ✅ Environment variables for secrets
- ✅ Helmet for HTTP security headers
- ✅ Input validation & length limits
- ✅ MongoDB Atlas IP access control
- ✅ `.gitignore` protects sensitive files

---

## 📸 UI Design

- Clean dark theme
- High readability
- Developer-preferred color palette
- Minimal & distraction-free

---

## 🧩 Future Improvements

- 🔐 User authentication
- 📱 Mobile-first layout
- 🔍 Search & filters
- ⏱ Due dates & reminders
- 📊 Analytics
- 🌐 REST API version

---

## 👨‍💻 Author

**Mohammed Musa**  
GitHub: https://github.com/mohammedmusa1  

---

## ⭐ Why This Project?

This project demonstrates:
- Secure backend design
- Cloud database integration
- Production-ready deployment
- Clean UI/UX
- Industry-standard practices

Perfect for:
- Portfolios
- College projects
- Interviews
- Backend practice

---

## 📜 License

This project is licensed under the **MIT License**.

