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

const loadProducts = () => {
  const featuredProducts = document.getElementById('featured-product');
  const promotionalProducts = document.getElementById('promotional')

  let featured = '';
  let promotional = '';

  dataProducts.forEach((product) => {
    if(product.featuredProduct){
      featured += `
        <div class="product-card">
          <div class="box-image-product">
            <img src="${product.image}" alt="Imagem de perfil da pessoa">
          </div>
          
          <div class="box-infos-product">
            <div class="box-textual">
              <span class="name-product">${product.name}</span>
              <span class="description-product">
              ${product.description}
              </span>
            </div>
          
            <div class="box-price">
            ${
              product.promotion ? `
              <span class="price-product-has-discount"><span class="monetary-text">R$</span> ${product.price}</span>
              <span class="price-product-discount"><span class="monetary-text">R$</span> ${product.priceWithDiscount}</span>
              ` : `
              <span class="price-product"><span class="monetary-text">R$</span> ${product.price}</span>
              `
            }            
            </div>
          </div>
          
          <div onclick=addProductToShoppingCart("${product.id}") class="box-add-cart">
            <i class="icon-add-cart fas fa-cart-plus"></i>
          </div>
        </div>
      `;
    }

    promotional = `
    <div class="product-card">
      <div class="box-image-product">
        <img src="${product.image}" alt="Imagem de perfil da pessoa">
      </div>

      <div class="box-infos-product">
        <div class="box-textual">
          <span class="name-product">${product.name}</span>
          <span class="description-product">
            ${product.description}
          </span>
        </div>

        <div class="box-price">
          <span class="price-product-has-discount"><span class="monetary-text">R$</span> ${product.price}</span>
          <span class="price-product-discount"><span class="monetary-text">R$</span> ${product.priceWithDiscount}</span>
        </div>
      </div>

      <div onclick=addProductToShoppingCart("${product.id}") class="box-add-cart">
        <i class="icon-add-cart fas fa-cart-plus"></i>
      </div>
    </div>
    `;

  });

  featuredProducts.innerHTML += featured;
  promotionalProducts.innerHTML+= promotional;
};

window.addEventListener('load', () => {
  const shoppingCart = '@shopping_cart';
  loadCategories();
  loadProducts();
  const products = JSON.parse(localStorage.getItem(shoppingCart) || '[]');
  document.getElementById('count-cart-item').innerHTML = products.length;
});


const addProductToShoppingCart = (id) =>{
  const shoppingCart = '@shopping_cart';
  const products = JSON.parse(localStorage.getItem(shoppingCart) || '[]');
  products.push(dataProducts.find(dataProduct => dataProduct.id === id));
  document.getElementById('count-cart-item').innerHTML = products.length;
  localStorage.setItem(shoppingCart, JSON.stringify(products));
}