const loadCategories = () => {
  const menu = document.getElementById('box-categories-items-nav');
  let menuLoaded = "";
  dataCategories.forEach((dataCategorie) => {
    menuLoaded += `<div title="${dataCategorie.description}" class="category-item-nav"> 
        <a href="./category.html?categoryId=${dataCategorie.id}" class="name-category-item">${dataCategorie.name}</a> 
      </div>`;
  });

  menu.innerHTML += menuLoaded;
};

const loadShoppingCart = () =>{
  const shoppingCart = '@shopping_cart';
  const products = JSON.parse(localStorage.getItem(shoppingCart) || '[]');
  document.getElementById('count-cart-item').innerHTML = products.length;
}


window.addEventListener('load', () => {
 
  loadCategories();
  const location =  window.location.search.replace('?', '');
  
  if(location === ''){
    loadProducts();
  }else{
    const [, id] = location.split('=');
    loadProductsWithCategorized(id);
  }
  loadShoppingCart();
});


const addProductToShoppingCart = (id) =>{
  const shoppingCart = '@shopping_cart';
  const products = JSON.parse(localStorage.getItem(shoppingCart) || '[]');
  products.push(dataProducts.find(dataProduct => dataProduct.id === id));
  document.getElementById('count-cart-item').innerHTML = products.length;
  localStorage.setItem(shoppingCart, JSON.stringify(products));
}