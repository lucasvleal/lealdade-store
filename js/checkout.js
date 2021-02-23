var products;

const getProfileCheckout = () => {
    const profile = '@profile';
    const user = JSON.parse(localStorage.getItem(profile));
  
    // console.log(user);
  
    const textHasAccount = document.getElementsByClassName('text-has-account');  
    let hasAccount = "Tem uma conta? <strong id='login-text'>Entre aqui</strong>";
  
    if (user) {
        hasAccount = `<strong>${user.nickname}</strong>, caso queira deslogar clique aqui.`;

        const streetInput = document.getElementsByName('street')[0];
        const numberInput = document.getElementsByName('number')[0];

        streetInput.value = user.address.street;
        numberInput.value = user.address.number;

        const neighborhoodInput = document.getElementsByName('neighborhood')[0];
        const cityInput = document.getElementsByName('city')[0];

        neighborhoodInput.value = user.address.neighborhood;
        cityInput.value = user.address.city;

        const ufInput = document.getElementsByName('uf')[0];
        const zipcodeInput = document.getElementsByName('zipcode')[0];

        ufInput.value = user.address.uf;
        zipcodeInput.value = user.address.zipcode;
    }
  
    textHasAccount[0].innerHTML = hasAccount;
}

const handleLoginCheckout = () => {
    const profile = '@profile';
    const user = JSON.parse(localStorage.getItem(profile));
  
    if (!user) {
      openModal();
    } else {
      logout();
    }
}

const handleFinalizeShop = () => {
    const shoppingCart = '@shopping_cart';
    products = JSON.parse(localStorage.getItem(shoppingCart) || '[]');

    if (products.length === 0) {
        alert("Adicione algum produto ao carrinho para finalizar uma compra!");
        return;
    }

    const finalize = "@finalize";

    const streetInput = document.getElementsByName('street')[0];
    const numberInput = document.getElementsByName('number')[0];
    const neighborhoodInput = document.getElementsByName('neighborhood')[0];
    const cityInput = document.getElementsByName('city')[0];
    const ufInput = document.getElementsByName('uf')[0];
    const zipcodeInput = document.getElementsByName('zipcode')[0];

    const dataAddress = {
        street: streetInput.value,
        number: numberInput.value,
        neighborhood: neighborhoodInput.value,
        city: cityInput.value,
        uf: ufInput.value,
        zipcode: zipcodeInput.value,
    }

    if (
        !streetInput.value || !numberInput.value || !neighborhoodInput.value ||
        !cityInput.value || !ufInput.value || !zipcodeInput.value
    ) {
        alert("Por favor, insira TODOS os dados de endereço!");
    } else {
        localStorage.setItem(finalize, JSON.stringify(dataAddress));

        window.location.href = "./finalized.html";
    }
}

const getPriceTotalProduct = (id) => {
    const index = products.findIndex((productSearch) => productSearch.id === id);

    const total = products[index].quantity * products[index].price;

    return Number(total.toFixed(2));
}

const removeItem = (id) => {
    console.log('add item: ', id);

    const shoppingCart = '@shopping_cart';
    const products = JSON.parse(localStorage.getItem(shoppingCart || '[]'));

    const index = products.findIndex(product => product.id === id);

    products[index].quantity--;

    if(products[index].quantity === 0){
        deleteItem(id);
    }

    localStorage.setItem(shoppingCart, JSON.stringify(products));
    window.location.reload();
}

const addItem = (id) => {
    console.log('add item: ', id);

    const shoppingCart = '@shopping_cart';
    const products = JSON.parse(localStorage.getItem(shoppingCart || '[]'));

    const index = products.findIndex(product => product.id === id);

    products[index].quantity++;

    localStorage.setItem(shoppingCart, JSON.stringify(products));
    window.location.reload();
}

const deleteItem = (id) => {
    console.log('delete item: ', id);

    const shoppingCart = '@shopping_cart';
    const products = JSON.parse(localStorage.getItem(shoppingCart) || '[]');
    
    const index = products.findIndex((productSearch) => productSearch.id === id);

    products.splice(index, 1);

    localStorage.setItem(shoppingCart, JSON.stringify(products));
    window.location.reload();
}

const getCartProducts = () => {
    const shoppingCart = '@shopping_cart';
    products = JSON.parse(localStorage.getItem(shoppingCart) || '[]');

    // console.log("produtos: ", products);

    const boxToPutCards = document.getElementsByClassName('box-infos')[0];
    const textTotalShop = document.getElementsByClassName('text-total')[0];

    let productCards = '';
    let total = 0;

    if (products.length > 0) {
        products.forEach((product) => {
            productCards += `
                <div class="container-product">
                    <div class="box-infos-product-card">
                        <div class="box-image-product-card">
                            <img src="${product.image}">
                        </div>

                        <div class="box-text-product-card">
                            <span class="name-product">${product.name}</span>
                            <span class="description-product">
                                ${product.description}
                            </span>
                        </div>
                    </div>

                    <div class="box-quantity">
                        ${product.quantity>1 ? 
                            `<button onclick="removeItem('${product.id}')" class="button-quantity"> 
                            <i class="icon-quantity fas fa-minus"></i>
                        </button>`:
                         ``
                        }                        

                        <span class="text-quantity">${product.quantity}</span>

                        <button onclick="addItem('${product.id}')" class="button-quantity">
                            <i class="icon-quantity fas fa-plus"></i>    
                        </button>                        
                    </div>

                    <div class="box-price-total">
                        <span class="monetary-text">R$</span>
                        <span class="price-product">${getPriceTotalProduct(product.id)}</span>
                    </div>

                    <div class="box-trash" onclick="deleteItem('${product.id}')">
                        <i class="icon-delete fas fa-trash-alt"></i>
                    </div>
                </div>
            `;

            total += getPriceTotalProduct(product.id);
        });
    } else {
        productCards = `
            <div class="box-no-products">
                <h1 class="title-no-products">Ainda sem produtos!</h1>
                <h2 class="subtitle-no-products">Volte a nossa loja e garanta produtos de grande qualidade a preços baixos.</h2>
            </div>
        `;
    }


    boxToPutCards.innerHTML = productCards;
    textTotalShop.innerHTML = `<span class="monetary-text">R$</span> ${Number(total.toFixed(2))}`;
}

window.addEventListener('load', () => {
    getProfileCheckout();
    getCartProducts();
});