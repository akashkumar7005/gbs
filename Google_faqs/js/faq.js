const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");
const sectionImage = document.querySelector('#image-section');
const accordionSection = document.querySelector('#accordion-section');

/* Hiding and Showing the accordian */
accordionItemHeaders.forEach(accordionItemHeaders => {
  accordionItemHeaders.addEventListener("click", event => {
    accordionItemHeaders.classList.toggle("active");
  });
});


/* Opening the Sidebar */
openNav = () => {
  document.getElementById("mySidebar").style.width = "310px";
  document.getElementById("main").style.marginLeft = "310px";
  document.querySelector(".brand-logo-desktop").classList.add("hide");
  document.querySelector(".sidebar-openbtn").classList.add("hide");
  sectionImage.addEventListener('click', reset);
  accordionSection.addEventListener('click', reset);
}

/* Closing the Sidebar */
closeNav = () => {

  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

/* Resetting the Header logo when sidebar is closed */
reset = () => {
  closeNav();
  document.querySelector(".brand-logo-desktop").classList.remove("hide");
  document.querySelector(".sidebar-openbtn").classList.remove("hide");
}