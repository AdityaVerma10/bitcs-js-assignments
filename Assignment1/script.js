const displayError = (elementId, message) => {
  const element = document.getElementById(elementId);
  element.textContent = message;
  setTimeout(() => {
    element.textContent = "";
  }, 3000);
};

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const sex = document.getElementById("sex").value;
  const role = document.querySelector('input[name="role"]:checked');
  const permissions = document.querySelectorAll(
    'input[name="permissions"]:checked'
  );
  const errorMessage = document.getElementById("error-message");

  if (!email || !password || !sex || !role || permissions.length < 2) {
    displayError(
      "error-message",
      "All fields must be filled and at least 2 permissions must be selected."
    );
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    displayError("email-error", "Invalid email format");
    return;
  }

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
  if (!passwordRegex.test(password)) {
    displayError(
      "password-error",
      "Password must be at least 6 characters & include uppercase, lowercase, and digits."
    );
    return;
  }

  document.getElementById("myForm").classList.add("hidden");
  document.getElementById("confirm-email").textContent = email;
  document.getElementById("confirm-password").textContent = password;
  document.getElementById("confirm-sex").textContent = sex;
  document.getElementById("confirm-role").textContent = role.value;
  document.getElementById("confirm-permissions").textContent = Array.from(
    permissions
  )
    .map((p) => p.value)
    .join(", ");
  document.getElementById("confirmation").classList.remove("hidden");
});

document
  .getElementById("confirm-button")
  .addEventListener("click", function () {
    alert("Form confirmed!");
  });
