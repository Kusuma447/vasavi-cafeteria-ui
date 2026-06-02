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

       const abcbtn=document.getElementById("abcbtn");
        const milkbtn=document.getElementById("milkbtn");
        const badhambtn=document.getElementById("badhambtn");
        const karbujabtn=document.getElementById("karbujabtn");
        const applebtn=document.getElementById("applebtn");
        const bananabtn=document.getElementById("bananabtn");
        const beetrootbtn=document.getElementById("beetrootbtn");
        const pistabtn=document.getElementById("pistabtn");
        

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
     
          abcbtn.addEventListener("click",function(){
        cart.push({
          name:"ABC Juice",
          price:80
        });
       updateCart();
        console.log(cart);
       
      });

      milkbtn.addEventListener("click",function(){
        cart.push({
          name:"Chocolate Milk Shake",
          price:80
        });
       updateCart();
        console.log(cart);
       
      });
      
      badhambtn.addEventListener("click",function(){
         cart.push({
          name:"Badham",
          price:80
        });
       updateCart();
        console.log(cart);
      });
      
      karbujabtn.addEventListener("click",function(){
         cart.push({
          name:"Karbuja",
          price:80
        });
       updateCart();
        console.log(cart);
      });
      bananabtn.addEventListener("click",function(){
         cart.push({
          name:"Banana",
          price:80
        });
       updateCart();
        console.log(cart);
      });
      beetrootbtn.addEventListener("click",function(){
         cart.push({
          name:"Beetroot Juice",
          price:80
        });
       updateCart();
        console.log(cart);
      });
      applebtn.addEventListener("click",function(){
         cart.push({
          name:"Apple Juice",
          price:80
        });
       updateCart();
        console.log(cart);
      });
      pistabtn.addEventListener("click",function(){
         cart.push({
          name:"Pista",
          price:80
        });
       updateCart();
        console.log(cart);
      });
      
      
     
