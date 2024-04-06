document.addEventListener('DOMContentLoaded', function () {
  
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

 
    function displayCartItems() {
        var cartItemsContainer = document.getElementById('cartItems');
        var totalPriceElement = document.getElementById('totalPrice');
        var totalPrice = 0;

     
        cartItemsContainer.innerHTML = '';

        
        cartItems.forEach(function (item) {
            var itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');

            var itemNameElement = document.createElement('img');
            itemImageElement.textContent = item.image;
            itemElement.appendChild(itemImageElement);

            var itemNameElement = document.createElement('span');
            itemNameElement.textContent = item.name;
            itemElement.appendChild(itemNameElement);

            var itemPriceElement = document.createElement('span');
            var itemPriceWithTax = item.price * 1.15; 
            itemPriceElement.textContent = 'R' + itemPriceWithTax.toFixed(2);
            itemElement.appendChild(itemPriceElement);

           
            totalPrice += itemPriceWithTax;

            cartItemsContainer.appendChild(itemElement);
        });

       
        totalPriceElement.textContent = 'R' + totalPrice.toFixed(2);
    }

   
    displayCartItems();

   
    function saveCartItems() {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }

  
    function addItemToCart(itemName, itemPrice, itemImage) {
        cartItems.push({ name: itemName, price: itemPrice, image: itemImage });
        saveCartItems();
        displayCartItems();
    }

 
    function clearCart() {
        cartItems = [];
        saveCartItems();
        displayCartItems();
    }

   
     clearCart();

   
});
