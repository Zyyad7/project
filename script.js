// Sample product data
const products = [
    {
      id: 1,
      name: "Pharaonic Sofa",
      price: 500,
      image: "https://via.placeholder.com/200",
    },
    {
      id: 2,
      name: "Luxury Bed",
      price: 800,
      image: "https://via.placeholder.com/200",
    },
    {
      id: 3,
      name: "Modern Dining Table",
      price: 600,
      image: "https://via.placeholder.com/200",
    },
  ];
  
  // Shopping cart data
  let cart = [];
  let total = 0;
  
  // Function to display products
  function displayProducts() {
    const productList = document.querySelector(".product-list");
    productList.innerHTML = "";
  
    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
  
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
  
      productList.appendChild(productCard);
    });
  }
  
  // Function to add a product to the cart
  function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    if (product) {
      cart.push(product);
      total += product.price;
      updateCart();
    }
  }
  
  // Function to update the cart
  function updateCart() {
    const cartItems = document.querySelector(".cart-items");
    const cartTotal = document.querySelector("#cart-total");
  
    cartItems.innerHTML = "";
    cart.forEach((item) => {
      const cartItem = document.createElement("li");
      cartItem.textContent = `${item.name} - $${item.price}`;
      cartItems.appendChild(cartItem);
    });
  
    cartTotal.textContent = total;
  }
  
  // Initialize the page
  displayProducts();