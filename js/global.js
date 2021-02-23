const loadCategories = () => {
  const menu = document.getElementById('box-categories-items-nav');
  let menuLoaded = "";
  dataCategories.forEach((dataCategorie) => {
    menuLoaded += `
      <div title="${dataCategorie.description}" class="category-item-nav"> 
        <a href="./category.html?categoryId=${dataCategorie.id}" class="name-category-item">${dataCategorie.name}</a> 
      </div>
    `;
  });

  menu.innerHTML += menuLoaded;
};

const loadShoppingCart = () =>{
  const shoppingCart = '@shopping_cart';

  const products = JSON.parse(localStorage.getItem(shoppingCart) || '[]');

  document.getElementById('count-cart-item').innerHTML = products.length;
}

const openModal = () => {
  var modal = document.getElementById("modal-login");

  modal.style.display = "block";

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

const closeModal = () => {
  var modal = document.getElementById("modal-login");
  var span = document.getElementsByClassName("close")[0];

  span.onclick = function() {
    modal.style.display = "none";
  }
}

const handleLogin = () => {
  const profile = '@profile';
  const user = JSON.parse(localStorage.getItem(profile));

  if (!user) {
    openModal();
  } else {
    logout();
  }
}

const login = () => {
  const profile = '@profile';
  const modal = document.getElementById("modal-login");

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // console.log(email, password);

  const user = dataUsers.find((user) => user.email === email && user.password === password);

  console.log(user);

  if (!user) {
    alert("Nenhum usário encontrado com essas credenciais!");
  } else {
    localStorage.setItem(profile, JSON.stringify(user));
  }

  modal.style.display = "none";
  window.location.reload();
}

const logout = () => {
  const profile = '@profile';

  localStorage.removeItem(profile);

  window.location.reload();
}

const getProfile = () => {
  const profile = '@profile';
  const user = JSON.parse(localStorage.getItem(profile));

  // console.log(user);

  const welcomeText = document.getElementById('name-user-profile');
  const actionButton = document.getElementById('login-profile');
  const avatarImage = document.getElementById('avatar-profile');

  let welcome = "Olá, visitante!";
  let action = " Entrar no perfil";
  let linkAvatar = "https://merics.org/sites/default/files/styles/ct_team_member_default/public/2020-04/avatar-placeholder.png?itok=Vhm0RCa3";

  if (user) {  
    welcome = `Olá, ${user.nickname}!`;
    action = 'Sair do perfil';
    linkAvatar = user.avatar;
  }

  welcomeText.innerHTML = welcome;
  actionButton.innerHTML = action;
  avatarImage.src = linkAvatar;
}

window.addEventListener('load', () => {
  const cart = document.getElementById('box-cart');
  cart.addEventListener('click', () => {
    window.location.href = "./checkout.html";
  });

  const checkoutButton = document.getElementById('checkout-button');
  checkoutButton.addEventListener('click', () => {
    window.location.href = "./checkout.html";
  });

  const storeName = document.getElementById('store-name');
  storeName.addEventListener('click', () => {
    window.location.href = "./index.html";
  });
  loadShoppingCart();
  loadCategories();
  getProfile();

  const location =  window.location.search.replace('?', '');
  
  if(location === ''){
    
    loadFeaturedProducts();
    loadPromotionalProducts();
  } else{
    const [, id] = location.split('=');
    loadProductsWithCategorized(id);
  }
  
  
});

const addProductToShoppingCart = (id) =>{
  const shoppingCart = '@shopping_cart';

  const productToAdd = dataProducts.find(dataProduct => dataProduct.id === id);
  
  const productsOnCart = JSON.parse(localStorage.getItem(shoppingCart) || '[]');
  const alreadyInCart = productsOnCart.findIndex((product) => product.id === productToAdd.id);

  const dataProduct = {
    id: productToAdd.id,
    image: productToAdd.image,
    name: productToAdd.name,
    description: productToAdd.description,
    price: productToAdd.promotion ? productToAdd.priceWithDiscount : productToAdd.price,
  }

  if (alreadyInCart !== -1) {
    productsOnCart[alreadyInCart].quantity += 1;
  } else {
    Object.assign(dataProduct, { quantity: 1 });
  
    productsOnCart.push(dataProduct);
  }

  // console.log('to add formatted: ', dataProduct);
  // console.log('on cart after: ', productsOnCart);

  const counter = document.getElementById('count-cart-item');
  counter.innerHTML = String(parseInt(counter.innerHTML) + 1);

  localStorage.setItem(shoppingCart, JSON.stringify(productsOnCart));
}