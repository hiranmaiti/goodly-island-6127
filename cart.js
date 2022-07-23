let productsCount=document.getElementById("container_hiru");
let cartLS = JSON.parse(localStorage.getItem("cart-page"))||[];
let totalPrice = document.getElementById("total-price");


function displayProducts(productData){
    productsCount.innerHTML="";
    let total = 0;
    productData.forEach(function(el,index){
        total+=Number(el.price);
        let product = document.createElement("div")
        let img=document.createElement("img")
        img.src=el.img;

        let name=document.createElement("h3")
        name.innerText=el.name

        let catagory=document.createElement("p")
        catagory.innerText=el.catagory

        let price=document.createElement("p")
        price.innerText=el.price
        
        let deletebtn=document.createElement("button")
        deletebtn.innerText="Delete"
        deletebtn.addEventListener("click", function(){
          deleteCart(el.productID);
        })

        product.append(img,name,catagory,price,deletebtn);
        productsCount.append(product)
    })
    totalPrice.innerText = total;
}
displayProducts(cartLS)

function deleteCart(index) {
    let deletedCart = cartLS.filter(function(el) {
        return el.productID != index;
    })
    displayProducts(deletedCart);
    localStorage.setItem("cart-page",JSON.stringify(deletedCart));
}