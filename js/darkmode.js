let darkMode = document.getElementById("dark-mode");
let darkToggleTop = document.getElementById("dark-toggle-top");
let darkToggleSide = document.getElementById("dark-toggle-side");
let bulbSide = document.getElementById("bulb-side");
let bulbTop = document.getElementById("bulb-top");

let applyStyle = () => {
  let href = darkMode.getAttribute("href");

  if (href == "./style/style.css" || href == "none" || href == "") {
    darkMode.href = "./style/dark.css";
    bulbSide.classList.add("fas");
    bulbSide.classList.remove("far");
    bulbSide.classList.add("sun-flower");

    bulbTop.classList.add("fas");
    bulbTop.classList.remove("far");
    bulbTop.classList.add("sun-flower");
  } else {
    darkMode.href = "";
    bulbSide.classList.remove("fas");
    bulbSide.classList.add("far");
    bulbSide.classList.remove("sun-flower");

    bulbTop.classList.remove("fas");
    bulbTop.classList.add("far");
    bulbTop.classList.remove("sun-flower");
  }
};

darkToggleTop.addEventListener("click", applyStyle);
darkToggleSide.addEventListener("click", applyStyle);
