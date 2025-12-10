# 🌟 *Supernatural Quote of the Day*

![App preview](public/img/screenshot.png)

A lightweight **Node.js + Express** application that fetches a random quote from *Supernatural* and displays it together with:

- the **character’s name**
- the **character’s image**
- the **list of episodes** they appear in  

All data is powered by the public **`supernatural-api`**.

---

## ✨ Features

- 🎲 *Random quote* from **Supernatural**
- 👤 Detects which **character** said the line
- 🖼 Loads the **character image**
- 📺 Shows all **related episodes**
- 🧩 Renders everything using **EJS templates**

---
## 📁 Project Structure

```bash
project/
│
├─ views/
│   └─ index.ejs          # Main EJS template
│
├─ public/styles
│   └─ main.css          # Styles for the page
│
├─ server.js              # Express server entry point
├─ package.json
└─ README.md
```

---

## 🚀 Installation & Run

1.	Clone the repository:
```bash
git clone <your-repo-url>
 cd <project-folder>

```

2.	Install dependencies:
```bash
npm install
```

3.	Start the server:
```bash
npm start
```
The app will be available at:
```bash
http://localhost:3000
```

## 🛠 Tech Stack
•	Node.js
•	Express
•	Axios
•	EJS

## 📦 API Source
All data is fetched from:
🔗 https://supernatural-api.onrender.com/
