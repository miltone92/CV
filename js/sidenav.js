/**
 * Open and close side nav
 */

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

/**
 * Highlight nav section when on section
 */

let sections = document.getElementsByClassName("portfolio-section");
let navLinks = document.getElementsByClassName("nav-link");
console.log(sections);

let highlightSectionLinkOnMouseOver = section => {
  let id = section.id;
  console.log(section);
  console.log(id);

  for (const link of navLinks) {
    link.classList.remove("active-link");
    if (link.getAttribute("href") == `#${id}`) {
      link.classList += " active-link";
    }
  }
};

let highlightSectionLinkOnClick = link$ => {
  for (const link of navLinks) {
    link.classList.remove("active-link");
    if (link.getAttribute("href") == link$.getAttribute("href")) {
      link.classList += " active-link";
    }
  }
};

for (const section of sections) {
  section.addEventListener("mouseenter", () => {
    highlightSectionLinkOnMouseOver(section);
  });
}

for (const link of navLinks) {
  link.addEventListener("click", () => {
    highlightSectionLinkOnClick(link);
  });
}
