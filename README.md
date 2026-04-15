# 📞 Call History Dashboard (React Project)

## 🚀 Project Overview

This project is a **Call History Dashboard** built with **React.js**. It allows users to view, filter, and analyze different types of call activities such as **Audio, Video, and Text**.

The app uses **React Context API** for global state management and provides a clean UI using **Tailwind CSS**.

---

## ✨ Features

* 📋 View all call history (Audio, Video, Text)
* 🔍 Filter calls by type
* 📊 Visualize data using Pie Chart
* 📅 Show current date and time
* ⚡ Dynamic routing with React Router
* ❌ Custom 404 Not Found Page
* ⏳ Loading state using Suspense / Loader

---

## 🛠️ Technologies Used

* ⚛️ React.js
* 🌐 React Router
* 🎨 Tailwind CSS
* 📊 Recharts (for Pie Chart)
* 🔄 Context API (State Management)
* 🧠 JavaScript (ES6+)

---

## 📂 Project Structure

```
src/
│── components/
│   ├── Navbar.jsx
│   ├── Card.jsx
│   ├── Status.jsx (Pie Chart)
│   └── Loading.jsx
│
│── pages/
│   ├── Home.jsx
│   ├── Details.jsx
│   └── NotFound.jsx
│
│── Context/
│   └── Datacontext.jsx
│
│── App.jsx
│── main.jsx
```

---

## ⚙️ How It Works

### 🔹 Context API

* Global data (call history) is managed using `createContext`
* Data is fetched from a local JSON file or API

### 🔹 Filtering System

* Users can filter calls by:

  * Audio 📞
  * Video 🎥
  * Text 💬
* Implemented using `filter()` method

### 🔹 Pie Chart

* Displays call distribution
* Built using `Recharts`
* Uses dynamic data from history

---

## 🧩 Key Concepts Used

* useState & useEffect
* useContext
* Dynamic Routing (`useParams`)
* Conditional Rendering
* Array Methods (`map`, `filter`, `find`)
* ES6+ Features

---

## 📸 UI Preview

* Clean dashboard layout
* Call cards with icons
* Interactive filtering
* Responsive design

---

## 🚧 Future Improvements

* 🔐 Authentication system
* 🌍 API integration (real data)
* 📱 Mobile optimization
* 📈 More analytics (bar chart, line chart)
* 💾 Local storage / database support

---

## 📌 Author

**Sagor Sutradhar**
Full stack Developer (MERN)

---

## 📃 License

This project is open-source and free to use.
