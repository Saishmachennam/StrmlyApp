# StrmlyApp

---

````markdown
# StrmlyApp 🎬📱

StrmlyApp is a **React Native** mobile application designed as a lightweight, engaging social media platform for video content.
 It supports **Google Authentication**, **reels feed**, and interactive actions like **like, comment, and share**
— similar to Instagram Reels or TikTok.

---

## ✨ Features

- 🔐 Google Login Integration (via Firebase Authentication)
- 🎥 Infinite Reels Feed from Firestore (videos stored with URLs)
- ❤️ Like, 💬 Comment, 📤 Share buttons on each reel
- 👤 User Profile with:
  - Name, Email, Joined Date, Bio, Profile Picture
- 🔄 Real-time updates using Firestore `onSnapshot`

---

## 📱 Screens

- `LoginScreen` – Google login prompt
- `HomeScreen` – Navigation hub (Reels, Profile, etc.)
- `ReelsScreen` – Scrollable vertical list of video reels
- `ProfileScreen` – User info with name, profile pic, email & bio

---

## 🛠️ Technologies Used

- **React Native (with Expo)**
- **Firebase Authentication**
- **Firebase Firestore**
- **Expo AV (Video playback)**
- **React Navigation**

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Saishmachennam/StrmlyApp.git
cd StrmlyApp
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Expo App

```bash
npx expo start
```

> Scan the QR code from your Expo Go app or run on Android/iOS Emulator

---

## 🔧 Firebase Setup (Required)

Ensure you have a `firebaseConfig.js` file in `src/` like this:

```js
// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
```

---

## 📁 Project Structure

```
StrmlyApp/
├── App.js
├── src/
│   ├── firebaseConfig.js
│   ├── LoginScreen.js
│   ├── HomeScreen.js
│   ├── ReelsScreen.js
│   └── ProfileScreen.js
```

---

## 🧪 Sample Firestore Structure

```plaintext
reels (collection)
  └── docId
      ├── videoUrl: "https://..."
      ├── likes: 25
      ├── comments: []
      ├── shares: 10
```

---

## 🙋‍♀️ Developer

**Saishma Chennam**
📧 [saishmachennam@gmail.com](mailto:saishmachennam@gmail.com)
🔗 [LinkedIn](https://www.linkedin.com/in/saishma-chennam)

---

## 📄 License

This project is licensed under the MIT License.

---

> ⭐ If you like this project, consider giving it a star on GitHub!

```

---

```
