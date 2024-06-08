var imageIndex = 0;
var slideInterval = setInterval(slideImage, 3000); 

function slideImage() {
    var images = document.querySelectorAll('.image-slider img');
    var numImages = images.length;
    imageIndex = (imageIndex + 1) % numImages;
    var slideWidth = -imageIndex * 100 + '%';
    document.querySelector('.image-slider').style.transform = 'translateX(' + slideWidth + ')';
}
document.addEventListener('DOMContentLoaded', function () {

var cartCountElement = document.getElementById('cartCount');

var cartCount = 0;

var cartItems = [];


var bottomDiv = document.getElementById('contentArea');

function displayItems(category) {
    bottomDiv.innerHTML = ''; 

    jsonData.categories.forEach(function (cat) {
        if (category === 'all' || cat.name === category) {
            cat.items.forEach(function (item) {
                displayItem(item);
            });
        }
    });
}

function displayItem(item) {
    var itemDiv = document.createElement('div');
    itemDiv.classList.add('item');

    var img = document.createElement('img');
    img.src = item.image;
    itemDiv.appendChild(img);

    var itemDetailsDiv = document.createElement('div');
    itemDetailsDiv.classList.add('item-details');

    var nameDiv = document.createElement('div');
    nameDiv.textContent = item.name;
    itemDetailsDiv.appendChild(nameDiv);

    var priceDiv = document.createElement('div');
    priceDiv.textContent = 'R' + item.price.toFixed(2);
    itemDetailsDiv.appendChild(priceDiv);

    var buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('buttons');

    var addToCartBtn = document.createElement('button');
    addToCartBtn.textContent = 'Add to Cart';
    addToCartBtn.classList.add('add-to-cart-btn'); 
    addToCartBtn.dataset.itemName = item.name;
    addToCartBtn.dataset.itemImage = item.image;
    addToCartBtn.dataset.price = item.price;
    buttonsDiv.appendChild(addToCartBtn);

    var buyNowBtn = document.createElement('button');
    buyNowBtn.textContent = 'Buy Now';
    buyNowBtn.classList.add('btn-buy');
    buttonsDiv.appendChild(buyNowBtn);

    itemDetailsDiv.appendChild(buttonsDiv);
    itemDiv.appendChild(itemDetailsDiv);

    bottomDiv.appendChild(itemDiv);
}


var jsonData = {
    "categories": [
        {
            "name": "shoes",
            "items": [
                {
                    "name": "Running Shoes",
                    "price": 49.99,
                    "image": "running_shoes.jpg"
                },
                {
                    "name": "Casual Shoes",
                    "price": 39.99,
                    "image": "casual_shoes.jpg"
                }
            ]
        },
        {
            "name": "electronics",
            "items": [
                {
                    "name": "Smartphone",
                    "price": 299.99,
                    "image": "smartphone.jpg"
                },
                {
                    "name": "Laptop",
                    "price": 699.99,
                    "image": "laptop.jpg"
                }
            ]
        },
        {
            "name": "clothes",
            "items": [
                {
                    "name": "T-Shirt",
                    "price": 19.99,
                    "image": "tshirt.jpg"
                },
                {
                    "name": "Jeans",
                    "price": 29.99,
                    "image": "jeans.jpg"
                }
            ]
        }
    ]
};


cartCountElement.textContent = cartCount;


displayItems('all');


var categoryButtons = document.querySelectorAll('.top-div button');
categoryButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var category = button.id.slice(0, -6); 
        displayItems(category);
    });
});


bottomDiv.addEventListener('click', function (event) {
    if (event.target.classList.contains('add-to-cart-btn')) {
     
        cartCount++;
    
        cartCountElement.textContent = cartCount;

      
        var itemName = event.target.dataset.itemName;
        var itemImage = event.target.dataset.itemImage;
        var itemPrice = parseFloat(event.target.dataset.price);
        cartItems.push({ name: itemName, price: itemPrice, image: itemImage });
    }
});
});
