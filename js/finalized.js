const getAddressFinalized = () => {
    const finalize = "@finalize";

    const address = JSON.parse(localStorage.getItem(finalize));

    if (!address) {
        window.location.href = "./index.html";
    }

    const textAddress = document.getElementById('text-address');
    const infosAddress = `
        ${address.street}, ${address.number} - ${address.zipcode}<br />
        ${address.neighborhood}, ${address.city} - ${address.uf}
    `;

    const timeToDelivery = document.getElementById('subtitle');

    const timeRandom = Math.floor(Math.random() * 10) + 1;
    const infoTime = `O seu pedido já está sendo separado e em <strong>${timeRandom} dias</strong>  chega para você.`;

    textAddress.innerHTML = infosAddress;
    timeToDelivery.innerHTML = infoTime;
}

const backToShopping = () => {
    const finalize = "@finalize";
    const shoppingCart = '@shopping_cart';

    localStorage.removeItem(finalize);
    localStorage.removeItem(shoppingCart);

    window.location.href = "./index.html";
}

window.addEventListener('load', () => {
    getAddressFinalized();
});