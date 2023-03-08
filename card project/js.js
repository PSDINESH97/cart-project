


//cart
let btnCart = document.querySelector(".fa-shopping-cart");
let Carts = document.querySelector(".cart");
let CartClose = document.querySelector(".total-remove");

// cart open

btnCart.addEventListener("click", ()=>{
    Carts.classList.add("cart-active")
}) 
// cart close

CartClose.addEventListener("click", ()=>{
    Carts.classList.remove("cart-active")
})
//loading full document

document.addEventListener("DOMContentLoaded",loadedCars);
function loadedCars(){

}
function  cartremove(){
    //remove cart element
  let firstEle = document.getElementById("rem1");
  firstEle.remove(); 

}


function removeItems(){
    var secondElE =document.getElementById("rem2")
    secondElE.remove();  
}



let cartRe = document.getElementById("cart-quantity")

cartRe.addEventListener("change",cR);

 let remo =document.getElementById("cart0-quantity")

 remo.addEventListener("change",cR);

//cart count remove

function cR()
{
    if(this.value<1)
    {
        this.value=1
    }
}

// procuct shopping add

// Image, value,

let shop = document.querySelectorAll("#shopping");
shop.forEach((btn)=>{
    btn.addEventListener("click",addshopping)
})
function addshopping(){

    let cars = this.parentElement;
 let title = cars.querySelector(".car-name").innerHTML;
 let price = cars.querySelector(".car-price").innerHTML;
 let getImg = cars.querySelector(".audi-car").src;
   console.log(title,price,getImg);


    // add new div

   let newProductElement = createCartProduct(title,price,getImg)
 // get new element
 let ele = document.createElement("div");
 ele.innerHTML= newProductElement;

   let contant = document.querySelector("cart-contant");
   contant.append(ele)

  
}

function createItems(title,price,getImg){
    return `
    <div id="rem1" class="yy cart-box">
    <img src="${getImg}" class="cart-image" alt="">
    <div class="details-box">

       <div class="cart-cars-title">${title}</div>
       <div class="price-box">

           <div class="cart-price">${price}</div>
           <div class="cart-amount">${price} </div>
       </div>
       <input type="number" name="number" value="1"  id="cart-quantity">
    </div>
    <i class="fa fa-trash" onclick="cartremove()"  aria-hidden="true"></i>
   </div>
`

}