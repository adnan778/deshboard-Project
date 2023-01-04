// signout code
function signOut() {
  const signoutContainer = document.querySelector(".signoutDiv");
  signoutContainer.classList.add("V_signout");
  signoutContainer.classList.remove("H_signout");
  const downarrow = document.querySelector(".downicon");
  downarrow.classList.add("downiconDisplay");
  const hiddenarrowIcon = document.querySelector(".downiconUp");
  hiddenarrowIcon.classList.remove("hDisplay");
}
function iconUp() {
  const signoutContainer2 = document.querySelector(".signoutDiv");
  signoutContainer2.classList.remove("V_signout");
  signoutContainer2.classList.add("H_signout");
  const downarrow2 = document.querySelector(".downicon");
  downarrow2.classList.remove("downiconDisplay");
  const hiddenarrowIcon2 = document.querySelector(".downiconUp");
  hiddenarrowIcon2.classList.add("hDisplay");
}
//  end code of signOut div

// code for sidebar
let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector(".CloseSide");
let searchBtn = document.querySelector(".bx-search");

sidebar.classList.toggle("open");
closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange();
});

searchBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange();
});
function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    document.getElementById(
      "p1"
    ).innerHTML = `<img src="img/logo.png" class="w-28 h-auto mx-8" alt="">`;
    const newlogoremove = document.querySelector(".logo_name");
    newlogoremove.classList.remove("new_logo");
  } else {
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    document.getElementById(
      "p1"
    ).innerHTML = `<img src="img/logo-mini.png" class="w-28 h-8 mt-2 m-auto px-4" alt="">`;
    const newlogo = document.querySelector(".logo_name");
    newlogo.classList.add("new_logo");
  }
}
function sidebarRemove() {
  document.querySelector(".sidebar_hidden").style.display = "none";
}
function show_min_sidebar() {
  document.querySelector(".sidebar_hidden").style.display = "inline";
}
var adnan = "adnan";
// end code of sidebar
