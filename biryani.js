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

       const panibtn=document.getElementById("panibtn");
        const chatbtn=document.getElementById("chatbtn");
        const samosabtn=document.getElementById("samosabtn");
        const noodlesbtn=document.getElementById("noodlesbtn");





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
        cartCount.textContent=`Cart(${cart.length})`;
      };

       function removeItem(index){
          cart.splice(index,1);
          updateCart();
        };
     
          panibtn.addEventListener("click",function(){
        cart.push({
          name:"pani puri",
          price:30
        });
       updateCart();
        console.log(cart);
       
      });

      chatbtn.addEventListener("click",function(){
        cart.push({
          name:"chat masala",
          price:25
        });
       updateCart();
        console.log(cart);
       
      });
      
      samosabtn.addEventListener("click",function(){
         cart.push({
          name:"samosa",
          price:20
        });
       updateCart();
        console.log(cart);
      });
      
      noodlesbtn.addEventListener("click",function(){
         cart.push({
          name:"Noodles",
          price:80
        });
       updateCart();
        console.log(cart);
      });
      
      
      
     
