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
      let cart= JSON.parse(localStorage.getItem("cart")) || [];
      const cartCount=document.getElementById("cartCount");
       const cartItems=document.getElementById("cartItems");

       const dosabtn=document.getElementById("dosabtn");
        const idlybtn=document.getElementById("idlybtn");
        const puribtn=document.getElementById("puribtn");
        const upmabtn=document.getElementById("upmabtn");
        const cartOverlay = document.getElementById("cartOverlay");
         const message=document.getElementById("message");

const closeCart = document.getElementById("closeCart");
openCartBtn.addEventListener("click", function(){

    cartOverlay.style.display = "flex";

});
closeCart.addEventListener("click", function(){

    cartOverlay.style.display = "none";

});

        function updateCart(){ 
          let total=0;
        cartItems.innerHTML="";
        cart.forEach(function(food,index){
          total+=food.price;
          
          cartItems.innerHTML+=`<p>
          ${food.name} (${food.quantity})
          <button onclick="removeItem(${index})">
          ❌ </button> 
          </p>`;
        });
         localStorage.setItem("cart",JSON.stringify(cart));
        document.getElementById("totalPrice").textContent=`Total :₹${total}`;
        cartCount.textContent=`(${cart.length})`;
      };

       function removeItem(index){
          cart.splice(index,1);
          updateCart();
        };
     
          dosabtn.addEventListener("click",function(){
              message.innerText=" Added";
              message.style.display="block";
               setTimeout(function(){
      message.style.display="none";
    },1000);
        
            const exitFood=
            cart.find(function(item){
              return item.name === "Dosa"
            });
            if(exitFood){
              exitFood.quantity++;
            }
            else{ 
        cart.push({
          name:"Dosa",
          price:30,
        quantity:1
        });
      }
       updateCart();
        console.log(cart);
       
      });

      idlybtn.addEventListener("click",function(){
          message.innerText=" Added";
              message.style.display="block";
               setTimeout(function(){
      message.style.display="none";
    },1000);
        
        const exitFood=
            cart.find(function(item){
              return item.name === "Idly"
            });
            if(exitFood){
              exitFood.quantity++;
            }
            else{ 
        cart.push({
          name:"Idly",
          price:30,
          quantity:1
        });
      }
       updateCart();
        console.log(cart);
       
      });
      
      puribtn.addEventListener("click",function(){
          message.innerText=" Added";
              message.style.display="block";
               setTimeout(function(){
      message.style.display="none";
    },1000);
        
        const exitFood=
            cart.find(function(item){
              return item.name === "Puri"
            });
            if(exitFood){
              exitFood.quantity++;
            }
            else{ 
         cart.push({
          name:"Puri",
          price:40,
          quantity:1
        });
      }
       updateCart();
        console.log(cart);
      });
      
      upmabtn.addEventListener("click",function(){
          message.innerText=" Added";
              message.style.display="block";
               setTimeout(function(){
      message.style.display="none";
    },1000);
        
        const exitFood=
            cart.find(function(item){
              return item.name === "Upma"
            });
            if(exitFood){
              exitFood.quantity++;
            }
            else{ 
         cart.push({
          name:"Upma",
          price:30,
          quantity:1
        });
      }
       updateCart();
        console.log(cart);
      });
      updateCart();
      
      
      
     
