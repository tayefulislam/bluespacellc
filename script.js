// JavaScript to handle form submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Form submitted!");
  });

function switchLanguage(language) {
  if (language === "en") {
    // Redirect to the English version of the website
    window.location.href = "/en";
  } else if (language === "ja") {
    // Redirect to the Japanese version of the website
    window.location.href = "/";
  }
}

function goChibaWebsite() {
  window.location.href = "https://chibapcmart.com/";
}
