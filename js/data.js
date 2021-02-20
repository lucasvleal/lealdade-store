const dataCategories = [
    {
        "id": 1,
        "name": "Camisas Nacionais",
        "description": "As melhores camisas do futebol brasileiro estão aqui. Qualidade e valores incomparáveis!",
    },
    {
        "id": 2,
        "name": "Camisas Internacionais",
        "description": "As melhores camisas do futebol internacional estão aqui. Qualidade e valores incomparáveis!",
    },
    {
        "id": 3,
        "name": "Regatas NBA",
        "description": "As melhores regatas do melhor basquete mundial estão aqui. Qualidade e valores incomparáveis!",
    },
    {
        "id": 4,
        "name": "Bermudas",
        "description": "As melhores bermudas das melhores marcas estão aqui. Qualidade e valores incomparáveis!",
    },
]

const dataProducts = [
    {
        "id": "fa8d5d1873bf11eb94390242ac130002",
        "description": "Camisa branca atual",
        "name": "Camisa SPFC 1 2020",
        "categoryId": 1,
        "price": 250,
        "image": "https://imgcentauro-a.akamaihd.net/900x900/94496149/camisa-do-sao-paulo-i-2020-adidas-masculina-img.jpg",
        "promotion": false,
        "priceWithDiscount": undefined,
        "featuredProduct":true,
    },
    {
        "id": "05444f1473c011eb94390242ac130002",
        "description": "Camisa vermelha atual",
        "name": "Camisa Bayern 1 2020",
        "categoryId": 2,
        "price": 250,
        "image": "https://99importados.com.br/wp-content/uploads/2020/10/bayern-1-2020-1.jpg",
        "promotion": true,
        "priceWithDiscount": 225.90,
    },
    {
        "id": "11e531de73c011eb94390242ac130002",
        "description": "Regata NBA preta",
        "name": "Regata Lakers Black Mamba",
        "categoryId": 3,
        "price": 249.90,
        "image": "https://cdn.shopify.com/s/files/1/0336/9032/1035/products/1_7878da6a-9f3c-4f02-b13a-f408c562b8e6_500x.jpg?v=1602088480",
        "promotion": false,
        "priceWithDiscount": undefined,
        "featuredProduct":true,
    },
    {
        "id": "1c9af9b073c011eb94390242ac130002",
        "description": "Bermuda Moletom preta e branca",
        "name": "Bermuda Adidas",
        "categoryId": 4,
        "price": 79.90,
        "image": "https://imgcentauro-a.akamaihd.net/1300x1300/93820702/bermuda-adidas-3g-speed-x-masculina-img.jpg",
        "promotion": true,
        "priceWithDiscount": 70.99,
        "featuredProduct":true,
    },
];

const dataUsers = [
    {
        "id": Math.random(),
        "fullName": "Lucas Viani Leal",
        "nickname": "Luquinha",
        "email": "lucas@gmail.com",
        "avatar": "https://avatars.githubusercontent.com/u/42481884?s=460&u=32dc019daa63f4e2dd764b41800bbab261f6f5e4&v=4",
        "password": "123456",
        "birthdate": new Date('1998-03-27'),
        "address": {
            "street": "Rua José Kempe",
            "number": "50",
            "neighborhood": "Jd. Jequitibás II",
            "city": "Presidente Prudente",
            "uf": "SP",
            "zipcode": "19067-790"
        }
    },
    {
        "id": Math.random(),
        "fullName": "Wilson Marcílio Junior",
        "nickname": "Wilson",
        "avatar": "https://avatars.githubusercontent.com/u/42481884?s=460&u=32dc019daa63f4e2dd764b41800bbab261f6f5e4&v=4",
        "email": "wilson@gmail.com",
        "password": "123456",
        "birthdate": new Date('1990-03-27'),
        "address": {
            "street": "R. Roberto Símonsen",
            "number": "305",
            "neighborhood": "Centro Educacional",
            "city": "Presidente Prudente",
            "uf": "SP",
            "zipcode": "19060-900"
        }
    },
]

