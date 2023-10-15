// Get tabLinks & tabContents
var tabLinks = document.getElementsByClassName("tab-links"),
  tabContents = document.getElementsByClassName("tab-contents");

// On openTab fucntion call
function openTab(tabname) {
  for (item of tabLinks) {
    item.classList.remove("active-link");
  }
  for (item of tabContents) {
    item.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// Get SideMenu
var sideMenu = document.getElementById("sidemenu");

// On openTab fucntion call
function openMenu() {
  sideMenu.style.right = "0";
}

function closeMenu() {
  sideMenu.style.right = "-200px";
}


//using selectors inside the element

const questions = document.querySelectorAll('.question');
questions.forEach(function (question) {
    // questions.log(question);
    const btn = question.querySelector(".question-btn");
    // console.log(btn);
    btn.addEventListener("click", function() {

        questions.forEach(function(item) {
            if(item !== question) {
                item.classList.remove("show-text");
            }
        });

        question.classList.toggle("show-text");
    });
});