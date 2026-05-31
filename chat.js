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
      let cart=[];
      const cartCount=document.getElementById("cartCount");
      const panibtn=document.getElementById("panibtn");
      panibtn.addEventListener("click",function(){
        cart.push("Pani Puri");
        console.log(cart);
        cartCount.textContent=`Cart(${cart.length})`;
      });
      const chatbtn=document.getElementById("chatbtn");
      chatbtn.addEventListener("click",function(){
        cart.push("Chat Masala");
        console.log(cart);
        cartCount.textContent=`Cart(${cart.length})`;
      });
      const samosabtn=document.getElementById("samosabtn");
      samosabtn.addEventListener("click",function(){
        cart.push("Samosa");
        console.log(cart);
        cartCount.textContent=`Cart(${cart.length})`;
      });
      const noodlesbtn=document.getElementById("noodlesbtn");
      noodlesbtn.addEventListener("click",function(){
        cart.push("Noodles");
        console.log(cart);
        cartCount.textContent=`Cart(${cart.length})`;
      });
      
      
     
