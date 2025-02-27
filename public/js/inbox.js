import { db, auth } from "./firebase-config.js";
import { collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

async function fetchInboxMessages() {
  const user = auth.currentUser;
  if (!user) return;

  const q = query(collection(db, "messages"), where("receiver", "==", user.email));
  const querySnapshot = await getDocs(q);
  
  let inbox = document.getElementById("inbox");
  inbox.innerHTML = "";

  querySnapshot.forEach((doc) => {
    let msg = doc.data();
    inbox.innerHTML += `<div class="message">
      <p>${msg.message}</p>
      <span>${msg.timestamp.toDate().toLocaleString()}</span>
    </div>`;
  });
}

auth.onAuthStateChanged(fetchInboxMessages);
