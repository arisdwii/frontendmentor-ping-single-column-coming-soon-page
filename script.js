const form = document.querySelector("form");
const inputEmail = document.getElementById("email");
const successMsg = document.querySelector(".success-msg");
const emailForm = document.querySelector(".email-form");
const errorMsg = document.querySelector(".error-msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Check if the email input is empty
  if (inputEmail.value === "") {
    // Show error message and highlight input field
    emailForm.classList.add("error");
    errorMsg.innerText = "Whoops! It looks like you forgot to add your email";
    // Stop the function here to prevent further code execution
    return;
  }

  // Regex for email validation (checks common email formats)
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Check if email input value matches the regex pattern
  if (emailRegex.test(inputEmail.value)) {
    successMsg.innerText = "Form submitted successfully!";

    // Display success message for 3 seconds for better user feedback
    setTimeout(() => {
      successMsg.innerText = "";
    }, 3000);

    // Clear email input value after successful submission
    inputEmail.value = "";
  } else {
    // Show error message and highlight input field
    emailForm.classList.add("error");
    errorMsg.innerText = "Please provide a valid email address";
  }
});

// Remove error state and message when user starts typing again
inputEmail.addEventListener("input", () => {
  emailForm.classList.remove("error");
  errorMsg.innerText = "";
});
