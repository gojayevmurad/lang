let langEn = {};
let langEnNavigation = [];

fetch("http://localhost:3000/langEn")
  .then((res) => res.json())
  .then((data) => {
    langEn = { ...data };
    langEnNavigation = [...langEn.navigation];
  });

document.querySelector("#lang").addEventListener("change", (e) => {
  if (e.target.value == "en") {
    changeToEn();
  } else {
    document.body.style.display = "none";
  }
});

function changeToEn() {
  document.querySelectorAll(".navigation-item").forEach((item) => {
    let turn = item.getAttribute("data-lang");
    item.innerHTML = langEnNavigation[turn];
  });
}
