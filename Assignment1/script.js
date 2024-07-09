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
    errorMessage.textContent =
      "All fields must be filled and at least 2 permissions must be selected.";

    setTimeout(() => {
      errorMessage.textContent = "";
    }, 3000);

    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    const errorElement = document.getElementById(`email-error`);
    errorElement.textContent = "Invalid email format.";

    setTimeout(() => {
      errorElement.textContent = "";
    }, 3000);
    return;
  }

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
  if (!passwordRegex.test(password)) {
    const errorElement = document.getElementById(`password-error`);
    errorElement.textContent =
      "Password must be at least 6 characters & include uppercase, lowercase, and digits.";

    setTimeout(() => {
      errorElement.textContent = "";
    }, 3000);
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
