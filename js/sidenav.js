let sidenav = document.getElementById("side-nav");
let closeButton = document.getElementById("close-button");
let openButton = document.getElementById("open-sidenav-button");

let closeSideMenu = () => {
  sidenav.style.marginLeft = "-250px";
  sidenav.style.transition = "0.8s";
  openButton.style.display = "block";
};

let openSideMenu = () => {
  sidenav.style.marginLeft = "0px";
  sidenav.style.transition = "0.8s";
  openButton.style.display = "none";
};

closeButton.addEventListener("click", closeSideMenu);
openButton.addEventListener("click", openSideMenu);
