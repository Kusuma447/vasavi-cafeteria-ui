 const searchInput=document.getElementById("searchInput");
  
  const foodItems=document.querySelectorAll(".food-item");
   searchInput.addEventListener("input",function(){
            const searchValue = searchInput.value.toLowerCase();
            console.log("searchValue");
            foodItems.forEach(function(item){
                const foodName=item.querySelector("h2").textContent.toLowerCase();
                if(foodName.includes(searchValue)){
                    item.style.display="flex";
                }
                else{
                    item.style.display="none";
                }
            });
        });
      