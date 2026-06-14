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
const gallerybtn=document.getElementById("gallerybtn");
const gallerypopup=document.getElementById("gallerypopup");
const closegallery=document.getElementById("galleryclose");
gallerybtn.addEventListener("click",function(){
    gallerypopup.style.display="block";
});
closegallery.addEventListener("click",function(){
    gallerypopup.style.display="none";
});
