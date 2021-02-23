const loadPromotionalProducts = () =>{
  const promotionalProducts = document.getElementById('promotional');
  const filteredProducts = dataProducts.filter(promotional=>
      promotional.promotion
    )
  let promotional = '';
  filteredProducts.forEach((product) => {
      promotional += `
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
  promotionalProducts.innerHTML+= promotional;
}



const loadFeaturedProducts = () => {
  const featuredProducts = document.getElementById('featured');

  const filteredProducts = dataProducts.filter(product =>
      product.featuredProduct
    )

  let featured = '';
  filteredProducts.forEach((product) => {    
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
});
featuredProducts.innerHTML += featured;
}