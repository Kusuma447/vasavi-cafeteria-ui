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

       const vegbtn=document.getElementById("vegbtn");
        const chickenbtn=document.getElementById("chickenbtn");
        const dumbtn=document.getElementById("dumbtn");
        const noodlesbtn=document.getElementById("chicken-noodlesbtn");
        const fishbtn=document.getElementById("fishbtn");
         const friedbtn=document.getElementById("friedbtn");
          const chi65btn=document.getElementById("65btn");
           const chillibtn=document.getElementById("chillibtn");




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
     
          vegbtn.addEventListener("click",function(){
        cart.push({
          name:"Veg Biryani",
          price:90
        });
       updateCart();
        console.log(cart);
       
      });

      chickenbtn.addEventListener("click",function(){
        cart.push({
          name:"Chicken Biryani",
          price:120
          
        });
       updateCart();
        console.log(cart);
       
      });
      
      dumbtn.addEventListener("click",function(){
         cart.push({
          name:"Dum Biryani",
          price:120
        });
       updateCart();
        console.log(cart);
      });
      
      noodlesbtn.addEventListener("click",function(){
         cart.push({
          name:" chicken Noodles",
          price:80
        });
       updateCart();
        console.log(cart);
      });
      fishbtn.addEventListener("click",function(){
         cart.push({
          name:"Fish Curry",
          price:80
        });
       updateCart();
        console.log(cart);
      });
     
      friedbtn.addEventListener("click",function(){
         cart.push({
          name:"Fried Piece Biryani",
          price:125
        });
       updateCart();
        console.log(cart);
      });
      chi65btn.addEventListener("click",function(){
         cart.push({
          name:" chicken 65",
          price:80
        });
       updateCart();
        console.log(cart);
      });
      chillibtn.addEventListener("click",function(){
         cart.push({
          name:"Chilli Chicken",
          price:80
        });
       updateCart();
        console.log(cart);
      });
      
      
      
     
