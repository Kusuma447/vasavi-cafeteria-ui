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

       const icebtn=document.getElementById("icebtn");
        const cakebtn=document.getElementById("cakesbtn");
        const pizzabtn=document.getElementById("pizzabtn");
        const sandbtn=document.getElementById("sandbtn");
        const shabtn=document.getElementById("shabtn");
        const chocobtn=document.getElementById("chocobtn");
        const bakerybtn=document.getElementById("bakerybtn");
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
          ${food.name}  (${food.quantity})
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
     
          icebtn.addEventListener("click",function(){
            
             document.getElementById("message").innerText="Added";
              message.style.display="block";
               setTimeout(function(){
      message.style.display="none";
    },2000);
        
            const exitFood=
            cart.find(function(item){
              return item.name === "Ice Creams"
            });
            if(exitFood){
              exitFood.quantity++;
            }
            else{ 
        cart.push({
          name:"Ice Creams",
          price:20,
          quantity:1
        });
      }
       updateCart();
        console.log(cart);
       
      });

      cakebtn.addEventListener("click",function(){
          message.innerText=" Added";
              message.style.display="block";
               setTimeout(function(){
      message.style.display="none";
    },2000);
        
        const exitFood=
            cart.find(function(item){
              return item.name === "Cakes"
            });
            if(exitFood){
              exitFood.quantity++;
            }
            else{ 
        cart.push({
          name:"Cakes",
          price:250,
          quantity:1
        });
      }
       updateCart();
        console.log(cart);
       
      });
      
      pizzabtn.addEventListener("click",function(){
          message.innerText=" Added";
              message.style.display="block";
               setTimeout(function(){
      message.style.display="none";
    },2000);
        
        const exitFood=
            cart.find(function(item){
              return item.name === "Pizza"
            });
            if(exitFood){
              exitFood.quantity++;
            }
            else{ 
         cart.push({
          name:"Pizza",
          price:100,
          quantity:1
        });
      }
       updateCart();
        console.log(cart);
      });
      
      sandbtn.addEventListener("click",function(){
          message.innerText=" Added";
              message.style.display="block";
               setTimeout(function(){
      message.style.display="none";
    },2000);
        
        const exitFood=
            cart.find(function(item){
              return item.name === "Sandwitch"
            });
            if(exitFood){
              exitFood.quantity++;
            }
            else{ 
         cart.push({
          name:"Sandwitch",
          price:120,
          quantity:1
        });
      }
       updateCart();
        console.log(cart);
      });
      shabtn.addEventListener("click",function(){
          message.innerText=" Added";
              message.style.display="block";
               setTimeout(function(){
      message.style.display="none";
    },2000);
        
        const exitFood=
            cart.find(function(item){
              return item.name === "Shawarma"
            });
            if(exitFood){
              exitFood.quantity++;
            }
            else{ 
         cart.push({
          name:"Shawarma",
          price:120,
          quantity:1
        });
      }
       updateCart();
        console.log(cart);
      });
      chocobtn.addEventListener("click",function(){
          message.innerText=" Added";
              message.style.display="block";
               setTimeout(function(){
      message.style.display="none";
    },2000);
        
        const exitFood=
            cart.find(function(item){
              return item.name === "Chocolates"
            });
            if(exitFood){
              exitFood.quantity++;
            }
            else{ 
         cart.push({
          name:"Chocolates",
          price:20,
          quantity:1
        });
      }
       updateCart();
        console.log(cart);
      });
      bakerybtn.addEventListener("click",function(){
          message.innerText=" Added";
              message.style.display="block";
               setTimeout(function(){
      message.style.display="none";
    },2000);
        
        const exitFood=
            cart.find(function(item){
              return item.name === "Bakery Items"
            });
            if(exitFood){
              exitFood.quantity++;
            }
            else{ 
         cart.push({
          name:"Bakery Items",
          price:15,
          quantity:1
        });
      }
       updateCart();
        console.log(cart);
      });
      updateCart();
      
     
