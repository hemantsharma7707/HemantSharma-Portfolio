// Typing Effect
const text = ["Frontend Developer", "JavaScript Learner", "Future Full Stack Dev 🚀"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === text.length) {
        count = 0;
    }
    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }

    setTimeout(type, 120);
})();

// Scroll Button
function scrollToProjects() {
    document.getElementById("projects").scrollIntoView();
}

// Contact Form Validation
const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if(name === "" || email === "" || message === "") {
        msg.textContent = "Please fill all fields!";
        msg.style.color = "red";
    } else {
        msg.textContent = "Message Sent Successfully 🚀";
        msg.style.color = "#00f7ff";
        form.reset();
    }
});