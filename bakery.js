const searchInput=document.getElementById("searchInput");
const foodItems=document.querySelectorAll(".food-item");
console.log("working");
searchInput.addEventListener("input",function(){
    const searchValue=searchInput.value.toLowerCase();
    foodItems.forEach(function(item){
        console.log("working");
        const foodName=item.querySelector("h2").textContent.toLowerCase();
        if(foodName.includes(searchValue)){
            item.style.display="flex";
        }
        else{
            item.style.display="none";
        }
    });
});


      