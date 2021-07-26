let carts = document.querySelectorAll(".add-cart");



let products = [
    {
        name: 'Glass Bottle',
        code: 'DHS2020',
        price: 50,
        inCart: 0
    },
    {
        name: 'BOOZE BOTTLE',
        code: 'ABC2020',
        price: 60,
        inCart: 0
    },
    {
        name: 'WATTER BOTTLE',
        code: 'XYZ2020',
        price: 70,
        inCart: 0
    },
    {
        name: 'FOOD BOTTLE ',
        code: 'PKL2020',
        price: 80,
        inCart: 0
    }
];




for (let i=0; i< carts.length; i++){
    carts[i].addEventListener('click',() => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}


function onLoadCartNumbers() {
    let  productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }

}


function cartNumbers(product) {

    let  productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);


    if (productNumbers) {
        localStorage.setItem('cartNumbers',productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1 ;
    }else{
        localStorage.setItem('cartNumbers',1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItems(product);

}

function setItems(product) {
    let cartItems = localStorage.getItem('productInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {

        if (cartItems[product.code] == undefined){
            cartItems = {
                ...cartItems,
                [product.code]:product
            }
        }
        cartItems[product.code].inCart += 1;
    }else {
        product.inCart =1;
        cartItems = {
            [product.code]:product
        }
    }


    localStorage.setItem("productsInCart",JSON.stringify(cartItems));

}






onLoadCartNumbers();

