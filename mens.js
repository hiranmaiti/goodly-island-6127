let productData = [
    {
        brand: "Fundamental Coast",
        name: "Sunset Hoodie",
        price: "98.00",
        size: "MD,LG,XL,2XL",
        productID: "men1",
        catagory: "Hoodie",
        img: "https://m.media-amazon.com/images/I/715JnQE4xlL._AC_SX255_.jpg",
      },
      {
        brand: "Fundamental Coast",
        name: "Westport Shorts",
        price: "70.99",
        size: "30,31,32,33,34,35,36,38,40",
        productID: "men2",
        catagory: "Shorts",
        img: "https://m.media-amazon.com/images/I/716+GTs4+oL._AC_SX255_.jpg",
      },
      {
        brand: "Fundamental Coast",
        name: "Westport Shorts",
        price: "70.99",
        size: "30,31,32,33,34,35,36,38,40",
        productID: "men3",
        catagory: "Shorts",
        img: "https://m.media-amazon.com/images/I/71UMRhSi64L._AC_SX255_.jpg",
      },
      {
        brand: "Fundamental Coast",
        name: "Westport Print",
        price: "110.00",
        size: "SM,MD,LG,XL,2XL",
        productID: "men4",
        catagory: "Shirts",
        img: "https://m.media-amazon.com/images/I/71jp-FaBpaL._AC_SX255_.jpg",
      },
      {
        brand: "Fundamental Coast",
        name: "Westport Stripe",
        price: "110.00",
        size: "MD,LG,XL,2XL",
        productID: "men5",
        catagory: "Shirts",
        img: "https://m.media-amazon.com/images/I/71tMhWOhrlL._AC_SX255_.jpg",
      },
      {
        brand: "Fundamental Coast",
        name: "Westport Shorts",
        price: "54.99",
        size: "30,31,32,33,34,35,36,38,40",
        productID: "men6",
        catagory: "Shorts",
        img: "https://m.media-amazon.com/images/I/611lWRFjuaL._AC_SX255_.jpg",
      },
      {
        brand: "Fundamental Coast",
        name: "Manny Crew",
        price: "59.00",
        size: "MD,LG,XL,2XL",
        productID: "men7",
        catagory: "Hoodie",
        img: "https://m.media-amazon.com/images/I/61yhEDdcb-L._AC_SX255_.jpg",
      },
      {
        brand: "Fundamental Coast",
        name: "Manny Crew",
        price: "59.00",
        size: "MD,LG,XL,2XL",
        productID: "men8",
        catagory: "Hoodie",
        img: "https://m.media-amazon.com/images/I/61594PpY33L._AC_SX255_.jpg",
      },
      {
        brand: "Tyndale FRC",
        name: "Versa Regular Fit Jeans",
        price: "73.00",
        size: "30,31,32,33,34,35,36,38,40",
        productID: "men9",
        catagory: "Jeans",
        img: "https://m.media-amazon.com/images/I/81H5nzufajL._AC_SX255_.jpg",
      },
      {
        brand: "balega",
        name: "Silver",
        price: "19.00",
        size: "SM,MD,LG,XL",
        productID: "men10",
        catagory: "Socks",
        img: "https://m.media-amazon.com/images/I/71Z1RXQYMlL._AC_SX255_.jpg",
      },
      {
        brand: "Feetures",
        name: "Elite Max Cushion No Show Tab",
        price: "18.00",
        size: "SM,MD,LG,XL",
        productID: "men11",
        catagory: "Socks",
        img: "https://m.media-amazon.com/images/I/711mV-Htc2L._AC_SX255_.jpg",
      },
      {
        brand: "Vans",
        name: "Classic Super No Show 3 Pair Pack",
        price: "10.14",
        size: "SM,MD,LG,XL",
        productID: "men12",
        catagory: "Socks",
        img: "https://m.media-amazon.com/images/I/71B6L9H16uL._AC_SX255_.jpg",
      },
      {
        brand: "Fundamental Coast",
        name: "Westport Print",
        price: "111.00",
        size: "SM,MD,LG,XL,2XL",
        productID: "men13",
        catagory: "Shirts",
        img: "https://m.media-amazon.com/images/I/71jp-FaBpaL._AC_SX255_.jpg",
      },
      {
        brand: "Fundamental Coast",
        name: "Westport Shorts",
        price: "71.99",
        size: "30,31,32,33,34,35,36,38,40",
        productID: "men14",
        catagory: "Shorts",
        img: "https://m.media-amazon.com/images/I/716+GTs4+oL._AC_SX255_.jpg",
      },
      {
        brand: "Fundamental Coast",
        name: "Sunset Hoodie",
        price: "98.00",
        size: "SM,MD,LG,XL,2XL",
        productID: "men15",
        catagory: "Hoodie",
        img: "https://m.media-amazon.com/images/I/71wruU0rcBL._AC_SX255_.jpg",
      },
      {
        brand: "Carhartt",
        name: "Midweight Signature Sleeve Logo Hooded Sweatshirt",
        price: "54.99",
        size: "SM,MD,LG,XL,2XL",
        productID: "men16",
        catagory: "Hoodie",
        img: "https://m.media-amazon.com/images/I/61Oqe85NueL._AC_SX255_.jpg",
      },
]
let productsCount=document.getElementById("container_hiru");
let filter=document.getElementById("filter");
let cartLS = JSON.parse(localStorage.getItem("cart-page"))||[];


function displayProducts(productData){
    productsCount.innerHTML="";
    productData.forEach(function(el){
        let product = document.createElement("div")
        let img=document.createElement("img")
        img.src=el.img;

        let name=document.createElement("h3")
        name.innerText=el.name

        let catagory=document.createElement("p")
        catagory.innerText=el.catagory

        let price=document.createElement("p")
        price.innerText=el.price
        
        let addToCart=document.createElement("button")
        addToCart.innerText="Add"
        addToCart.addEventListener("click", function(){
          AddToCart(el)
        })

        product.append(img,name,catagory,price,addToCart);
        productsCount.append(product)
    })
}
displayProducts(productData)


filter.addEventListener("change",function(){
    if(filter.value==="All"){
        displayProducts(productData);
       }else{
        let filtered= productData.filter(function(el){
            return el.catagory===filter.value;
        })
        displayProducts(filtered);
    }
})

function AddToCart(product){
  for ( let i = 0; i < cartLS.length; i++ ) {
    if ( cartLS[i].productID === product.productID ) {
      alert("Product already in the Cart");
      return;
    }
  }
  cartLS.push(product);
  alert("Product Added Successfully");
  //console.log(cartLS)
  localStorage.setItem("cart-page", JSON.stringify(cartLS));
}