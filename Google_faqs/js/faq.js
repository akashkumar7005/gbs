const accordionItemHeaders=document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeaders=>{
    accordionItemHeaders.addEventListener("click",event=>{
        accordionItemHeaders.classList.toggle("active");
    });
});


const sectionImage=document.querySelector('#image-section');
const accordionSection=document.querySelector('#accordion-section');


 openNav=()=> {
    document.getElementById("mySidebar").style.width = "300px";
    document.getElementById("main").style.marginLeft = "300px";
    document.querySelector(".brand-logo-desktop").classList.add("hide");
    document.querySelector(".openbtn").classList.add("hide");
    sectionImage.addEventListener('click',reset);
    accordionSection.addEventListener('click',reset);
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
closeNav=()=> {

    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
   
  }

  reset=()=>
  {
    closeNav();  
    document.querySelector(".brand-logo-desktop").classList.remove("hide");
    document.querySelector(".openbtn").classList.remove("hide");
  }