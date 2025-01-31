# 📌 **Telemedicine Healthcare System**  

## 🏥 **Project Overview**  
This project is a **Healthcare Telemedicine Application** that enables an **operator to register patients**, capture their medical details (including iris images), and send them to **doctors for review and diagnosis**. The system supports real-time updates for patient records and doctor responses.  

## 🚀 **Features**  

### ✅ **Operator Dashboard**
- Register new patients with details like **name, age, address, phone, problem description, and email**.  
- View a list of registered patients.  
- Receive **real-time updates** when a doctor provides a diagnosis.  
- Auto-refresh patient records every 5 seconds to ensure the latest updates.  

### ✅ **Doctor Dashboard**
- View the list of assigned patients.  
- Analyze the patient's medical details and uploaded **iris images**.  
- Provide a **medical diagnosis or recommendation**, which is instantly updated for the operator.  

### ✅ **Patient Registration API**
- Operators can **register patients** via an API endpoint.  
- All data is stored securely in **MongoDB**.  

### ✅ **AI/ML & GenAI Integration** (Planned)
- **Iris image processing** using **OpenCV.js** and **TensorFlow.js**.  
- **Automated diagnosis suggestions** using **OpenAI’s GPT-3**.  

---

## 🛠 **Tech Stack**
- **Frontend:** React.js  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **AI/ML Integration:** OpenCV.js, TensorFlow.js  
- **GenAI Integration:** OpenAI GPT-3  
- **Hosting:** AWS / Google Cloud  

---

## 🔧 **Installation & Setup**  

### 1️⃣ **Clone the Repository**  
```bash
git clone https://github.com/your-repo-url
cd telemedicine-app
```

### 2️⃣ **Install Dependencies**  
#### Backend (Express.js)  
```bash
cd backend
npm install
npm start
```

#### Frontend (React.js)  
```bash
cd frontend
npm install
npm start
```

### 3️⃣ **Run MongoDB Server**
Ensure MongoDB is running locally or connect to a cloud database.  

```bash
mongod --dbpath /data/db
```

---

## 📡 **API Endpoints**  

### 🔹 **Patient Registration**  
**POST:** `/api/patients/register`  
Registers a new patient with name, age, address, problem, and phone number.  

### 🔹 **Get Patient List**  
**GET:** `/api/patients/patients`  
Fetches the list of registered patients with their details.  

### 🔹 **Doctor’s Reply Submission**  
**POST:** `/api/patients/reply`  
Allows a doctor to submit a diagnosis for a patient.  

---

## 🤝 **Contributing**
Feel free to **fork** the repository and submit a **pull request** if you’d like to contribute!  

---

## 📩 **Contact**
📧 Email: shaileshsharmakodwakere@gmail.com  
🔗 LinkedIn: [Shailesh Sharma K](https://www.linkedin.com/in/shailesh-sharma-k/)  

---

🚀 **This project aims to bridge the gap between patients and doctors using AI-powered telemedicine solutions!** 🌍💡
