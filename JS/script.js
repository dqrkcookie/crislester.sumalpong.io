function spanString(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += `<span>${str[i]}</span>`;
  }
  return result;
}

const string = document.querySelector("#string").textContent.trim();
locationTag = document.querySelector("#string");
console.log(string);
locationTag.innerHTML = spanString(string);

function seeNav() {
  const nav = document.querySelector("#ul");
  const checkbox = document.querySelector("#checkbox");

  if (checkbox.checked) {
    nav.style.left = "0";
  } else {
    nav.style.left = "100%";
  }
}

function mobileNavBehavior() {
  const nav = document.querySelector("#ul");
  const checkbox = document.querySelector("#checkbox");
  const home = document.querySelector("#h");
  const about = document.querySelector("#a");
  const education = document.querySelector("#e");
  const skills = document.querySelector("#s");
  const projects = document.querySelector("#p");
  const contact = document.querySelector("#c");

  function closeNav() {
    nav.style.left = "100%";
    checkbox.checked = false;
  }

  home.onclick = closeNav;
  about.onclick = closeNav;
  education.onclick = closeNav;
  skills.onclick = closeNav;
  projects.onclick = closeNav;
  contact.onclick = closeNav;

  checkbox.onchange = seeNav;
}

function activeNav() {
  const home = document.querySelector("#h");
  const about = document.querySelector("#a");
  const education = document.querySelector("#e");
  const skills = document.querySelector("#s");
  const projects = document.querySelector("#p");
  const contact = document.querySelector("#c");

  let currActive = null;

  function clicked(event) {
    let currActiveNav = event.target;
    if (currActive) {
      currActive.style.borderBottom = "none";
      currActive.style.color = "#f1f1f1";
    }
    currActiveNav.style.borderBottom = "1px solid #f1f1f1";
    currActiveNav.style.color = "#FF0000";
    currActive = currActiveNav;
  }

  function sizeChanged() {
    if (window.innerWidth <= 600) {
      if (!localStorage.getItem("hasReloaded")) {
        localStorage.setItem("hasReloaded", "true");
        window.location.reload();
      }
    } else {
      localStorage.removeItem("hasReloaded");

      home.onclick = clicked;
      about.onclick = clicked;
      education.onclick = clicked;
      skills.onclick = clicked;
      projects.onclick = clicked;
      contact.onclick = clicked;
    }
  }

  sizeChanged();

  window.addEventListener("resize", sizeChanged);
}

mobileNavBehavior();
activeNav();
