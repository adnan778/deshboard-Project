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
function sidebarhidden() {
  const x = document.querySelector(".Mainli");
  x.classList.add("hidenLiText");
}
