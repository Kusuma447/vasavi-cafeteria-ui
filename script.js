//this created for popup messages
const servicesbtn=document.getElementById("servicesbtn");
const servicespopup=document.getElementById("servicespopup");
const closepopup=document.getElementById("closePopup");

servicesbtn.addEventListener("click",function(){
    servicespopup.style.display="block";
});
closepopup.addEventListener("click",function(){
    servicespopup.style.display="none";
    
});
const aboutbtn=document.getElementById("aboutbtn");
const aboutpopup=document.getElementById("aboutpopup");
const closebtn=document.getElementById("aboutclose");

aboutbtn.addEventListener("click",function(){
    aboutpopup.style.display="block";
});
closebtn.addEventListener("click",function(){
    aboutpopup.style.display="none";
});
const contactbtn=document.getElementById("contactbtn");
const contactpopup=document.getElementById("contactpopup");
const closecontact=document.getElementById("contactclose");

contactbtn.addEventListener("click",function(){
    contactpopup.style.display="block";
});
closecontact.addEventListener("click",function(){
    contactpopup.style.display="none";
});

const homeBtn=document.getElementById("homebtn");
homeBtn.addEventListener("click",function(){
    window.scrollTo(0,0);
});
const menuBtn=document.getElementById("menuBtn");
menuBtn.addEventListener("click",function(event){
    event.preventDefault();
    
    document.getElementById("menu").scrollIntoView({
        behavior:"smooth"
    });
});
