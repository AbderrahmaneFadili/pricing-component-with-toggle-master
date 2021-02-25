/* Toggle Annully and monthly */
const toggle = document.querySelector("input[type=checkbox]");
const monthly = document.querySelector(".monthly");
const annually = document.querySelector(".annually");

annually.style.display = "block";
monthly.style.display = "none";

toggle.addEventListener("change", (e) => {
  if (e.target.checked) {
    annually.style.display = "none";
    monthly.style.display = "block";
  } else {
    annually.style.display = "block";
    monthly.style.display = "none";
  }
});
