const scriptURL =
  "https://script.google.com/macros/s/AKfycbxtRjfPkL4GvbBzRG6CQFjuwD0pKwwugpb1fcYXVUaWrJW5t4QsFPuhAX-Dk3csmn5cdQ/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Thank You For Subscribing!";
      setTimeout(() => {
        msg.innerHTML = "";
      }, 4000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
