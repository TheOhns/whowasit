import { db, auth } from "./firebase-config.js";
import { addDoc, collection, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

document.getElementById("sendMessageForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  let receiver = document.getElementById("receiverEmail").value;
  let message = document.getElementById("message").value;

  try {
    await addDoc(collection(db, "messages"), {
      sender: auth.currentUser.uid,
      receiver: receiver,
      message: message,
      timestamp: serverTimestamp()
    });

    alert("Message sent anonymously!");
    document.getElementById("sendMessageForm").reset();
  } catch (error) {
    alert(error.message);
  }
});
