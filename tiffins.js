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
       const cartItems=document.getElementById("cartItems");

       const dosabtn=document.getElementById("dosabtn");
        const idlybtn=document.getElementById("idlybtn");
        const puribtn=document.getElementById("puribtn");
        const upmabtn=document.getElementById("upmabtn");





        function updateCart(){ 
          let total=0;
        cartItems.innerHTML="";
        cart.forEach(function(food,index){
          total+=food.price;
          
          cartItems.innerHTML+=`<p>
          ${food.name}
          <button onclick="removeItem(${index})">
          ❌ </button> 
          </p>`;
        });
        document.getElementById("totalPrice").textContent=`Total :₹${total}`;
        cartCount.textContent=`(${cart.length})`;
      };

       function removeItem(index){
          cart.splice(index,1);
          updateCart();
        };
     
          dosabtn.addEventListener("click",function(){
        cart.push({
          name:"Dosa",
          price:30
        });
       updateCart();
        console.log(cart);
       
      });

      idlybtn.addEventListener("click",function(){
        cart.push({
          name:"Idly",
          price:30
        });
       updateCart();
        console.log(cart);
       
      });
      
      puribtn.addEventListener("click",function(){
         cart.push({
          name:"Puri",
          price:40
        });
       updateCart();
        console.log(cart);
      });
      
      upmabtn.addEventListener("click",function(){
         cart.push({
          name:"Upma",
          price:30
        });
       updateCart();
        console.log(cart);
      });
      
      
      
     
