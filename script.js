function goToSignup() {
  window.location.href = "signup.html";
}

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Login successful (demo only)");
});