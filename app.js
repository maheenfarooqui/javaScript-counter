var myDisplay= document.getElementById("display");
var price = Number(document.getElementById("price").innerHTML);
var totalPrice = document.getElementById("totalPrice");
function sumPrice(){
    var quantity =Number( myDisplay.innerHTML);
    var finalPrice = quantity * price;
    totalPrice.innerHTML = `Total: ${finalPrice}$`;
}
function decreaseNum(){
   
   var decre =Number(myDisplay.innerHTML);
   if(decre > 0){
    myDisplay.innerHTML = --decre
   }
   else{
     myDisplay.innerHTML = 0;
   }

   sumPrice();

}
function increaseNum(){
 var incre =Number(myDisplay.innerHTML);
    myDisplay.innerHTML = ++incre;  
    sumPrice(); 
}
function resetNum(){
    myDisplay.innerHTML = 0;
    totalPrice.innerHTML ="";
}