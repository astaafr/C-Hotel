// ===== LOGIN & SIGNUP INTERACTION =====
document.addEventListener("DOMContentLoaded", function () {

  // ===== ELEMENTS =====
  const loginBtn = document.getElementById("login-btn");
  const signupBtn = document.getElementById("signup-btn");

  const voucherPopup = document.getElementById("voucher-popup");
  const closePopup = document.getElementById("close-popup");
  const claimBtn = document.getElementById("claim-btn");

  // ===== LOGIN =====
  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      showPopup("Login successful!");
      setTimeout(() => {
        window.location.href = "index.html";
      }, 1200);
    });
  }

  // ===== SIGNUP =====
  if (signupBtn) {
    signupBtn.addEventListener("click", () => {
      showPopup("Account created successfully!");
      setTimeout(() => {
        window.location.href = "index.html";
      }, 1200);
    });
  }

  // ===== Show voucher popup ONLY on home.html =====
  if (voucherPopup && window.location.pathname.includes("index.html")) {
    setTimeout(() => {
      voucherPopup.style.display = "flex";
    }, 1500);
  }

  // ===== Close voucher popup =====
  if (closePopup) {
    closePopup.addEventListener("click", () => {
      voucherPopup.style.display = "none";
    });
  }

  // ===== Claim voucher =====
  if (claimBtn) {
    claimBtn.addEventListener("click", () => {
      alert("Voucher claimed! Enjoy your discount 😄");
      voucherPopup.style.display = "none";
    });
  }

});


// ===== GENERIC POPUP (LOGIN - SIGNUP) =====
function showPopup(message) {
  const popup = document.getElementById("popup");
  const text = document.getElementById("popup-text");

  if (popup && text) {
    text.textContent = message;
    popup.style.display = "flex";

    setTimeout(() => {
      popup.style.display = "none";
    }, 1000);
  }
}
