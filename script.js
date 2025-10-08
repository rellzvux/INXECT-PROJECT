import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";
import { app } from "./firebase-config.js";

const db = getFirestore(app);
const loginBtn = document.getElementById("loginBtn");
const status = document.getElementById("status");

loginBtn.addEventListener("click", async () => {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    status.textContent = "Please fill all fields.";
    return;
  }

  const ref = doc(db, "users", username);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    status.textContent = "Invalid username or password.";
    return;
  }

  const data = snap.data();
  if (data.password === password) {
    localStorage.setItem("user", JSON.stringify(data));
    window.location.href = "dashboard.html";
  } else {
    status.textContent = "Invalid username or password.";
  }
});
