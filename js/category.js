const loadProductsWithCategorized = (categoryId) => {
  const featuredProducts = document.getElementById('featured-product');

  const titleCategory = document.getElementById('title-page');
  const descriptionCategory = document.getElementById('description-category');

  const category = dataCategories.find(categoryFind => categoryFind.id === parseInt(categoryId));

  const filteredCategories = dataProducts.filter(dataProduct => 
      dataProduct.categoryId === parseInt(categoryId)
  );

  let categoryProducts = '';

  filteredCategories.forEach(filtered => {
    categoryProducts += `
    <div class="product-card">
    <div class="box-image-product">
      <img src="${filtered.image}" alt="Imagem de perfil da pessoa">
    </div>
    
    <div class="box-infos-product">
      <div class="box-textual">
        <span class="name-product">${filtered.name}</span>
        <span class="description-product">
        ${filtered.description}
        </span>
      </div>
    
      <div class="box-price">
      ${
        filtered.promotion ? `
        <span class="price-product-has-discount"><span class="monetary-text">R$</span> ${filtered.price}</span>
        <span class="price-product-discount"><span class="monetary-text">R$</span> ${filtered.priceWithDiscount}</span>
        ` : `
        <span class="price-product"><span class="monetary-text">R$</span> ${filtered.price}</span>
        `
      }            
      </div>
    </div>
    
    <div onclick=addProductToShoppingCart("${filtered.id}") class="box-add-cart">
      <i class="icon-add-cart fas fa-cart-plus"></i>
    </div>
  </div>
    `  
  });

  featuredProducts.innerHTML = categoryProducts;

  titleCategory.innerHTML = category.name;
  descriptionCategory.innerHTML = category.description;
}