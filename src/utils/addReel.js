// src/utils/addReel.js
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const addReel = async (videoUrl, caption, user) => {
  try {
    await addDoc(collection(db, "reels"), {
      videoUrl,
      caption,
      user,
      createdAt: Timestamp.now(),
    });
    console.log("Reel added successfully");
  } catch (error) {
    console.error("Error adding reel:", error);
  }
};
