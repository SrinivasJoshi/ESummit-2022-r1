const menuBtn = document.getElementById("menuBtn");
const cancelBtn = document.getElementById("cancelBtn");
const navContent = document.getElementById("navContent");

menuBtn.addEventListener("click",()=>{
    menuBtn.classList.add("notVisible");
    cancelBtn.classList.remove("notVisible");
    navContent.classList.remove("notVisible");
})
cancelBtn.addEventListener("click",()=>{
    cancelBtn.classList.add("notVisible");
    navContent.classList.add("notVisible");
    menuBtn.classList.remove("notVisible");
})