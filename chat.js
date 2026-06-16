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

       const panibtn=document.getElementById("panibtn");
        const chatbtn=document.getElementById("chatbtn");
        const samosabtn=document.getElementById("samosabtn");
        const noodlesbtn=document.getElementById("noodlesbtn");
      
const cartOverlay = document.getElementById("cartOverlay");

const closeCart = document.getElementById("closeCart");
 const message=document.getElementById("message");
  
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
          total+=food.price * food.quantity;
          
          cartItems.innerHTML+=`<p>
          ${food.name} (${food.quantity})
          <button onclick="removeItem(${index})">
          ❌ </button> 
          </p>`;
         
        });
        localStorage.setItem("cart",JSON.stringify(cart));
        document.getElementById("totalPrice").textContent=`Total:₹${total}`;
        cartCount.textContent=`(${cart.length})`;
       
      };

       function removeItem(index){
          cart.splice(index,1);
          updateCart();
        };
     
          panibtn.addEventListener("click",function(){
              message.innerText=" Added";
              message.style.display="block";
               setTimeout(function(){
      message.style.display="none";
    },1000);
        
        const exitFood=
        cart.find(function(item){
          return item.name ==="pani puri";
        });
        if(exitFood){
          exitFood.quantity++;
        }
        else{ 
        cart.push({
          name:"pani puri",
          price:30,
          quantity:1
        });
      }
       updateCart();
        console.log(cart);
       
      });

      chatbtn.addEventListener("click",function(){
        message.innerText=" Added";
              message.style.display="block";
               setTimeout(function(){
      message.style.display="none";
    },1000);
         const exitFood=
        cart.find(function(item){
          return item.name ==="chat masala";
        });
        if(exitFood){
          exitFood.quantity++;
        }
        else{ 
        cart.push({
          name:"chat masala",
          price:25,
          quantity:1
        });
      }
       updateCart();
        console.log(cart);
       
      });
      
      samosabtn.addEventListener("click",function(){
        message.innerText=" Added";
              message.style.display="block";
               setTimeout(function(){
      message.style.display="none";
    },1000);
         const exitFood=
        cart.find(function(item){
          return item.name ==="samosa";
        });
        if(exitFood){
          exitFood.quantity++;
        }
        else{ 
         cart.push({
          name:"samosa",
          price:20,
          quantity:1
        });
      }
       updateCart();
        console.log(cart);
      });
      
      noodlesbtn.addEventListener("click",function(){
        message.innerText=" Added";
              message.style.display="block";
               setTimeout(function(){
      message.style.display="none";
    },1000);
         const exitFood=
        cart.find(function(item){
          return item.name ==="Noodles";
        });
        if(exitFood){
          exitFood.quantity++;
        }
        else{ 
         cart.push({
          name:"Noodles",
          price:80,
          quantity:1
        });
      }
       updateCart();
        console.log(cart);
      });
       updateCart();

   
   
      
      
      
     
