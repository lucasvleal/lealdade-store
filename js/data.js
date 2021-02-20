let dataCategories = [
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
        "description": "As melhores bermudas das melhores marcas estão aqui. Qualidade e valores incomparáveis!,
    },
]

let dataProducts = [
    {
        "id": Math.random(),
        "description": "Camisa branca atual",
        "name": "Camisa SPFC 1 2020",
        "categoryId": 1,
        "price": 250,
        "image": "https://imgcentauro-a.akamaihd.net/900x900/94496149/camisa-do-sao-paulo-i-2020-adidas-masculina-img.jpg",
        "promotion": false,
        "priceWithDiscount": undefined,
    },
    {
        "id": Math.random(),
        "description": "Camisa vermelha atual",
        "name": "Camisa Bayern 1 2020",
        "categoryId": 2,
        "price": 250,
        "image": "https://99importados.com.br/wp-content/uploads/2020/10/bayern-1-2020-1.jpg",
        "promotion": true,
        "priceWithDiscount": 225.90,
    },
    {
        "id": Math.random(),
        "description": "Regata NBA preta",
        "name": "Regata Lakers Black Mamba",
        "categoryId": 3,
        "price": 249.90,
        "image": "http://d26lpennugtm8s.cloudfront.net/stores/001/199/617/products/regata-nba-nike-swingman-los-angeles-lakers-mamba-edition-bryant-241-7a19722af154e46c0815913118187497-640-0.jpeg",
        "promotion": false,
        "priceWithDiscount": undefined,
    },
    {
        "id": Math.random(),
        "description": "Bermuda Moletom preta e branca",
        "name": "Bermuda Adidas",
        "categoryId": 4,
        "price": 79.90,
        "image": "https://imgcentauro-a.akamaihd.net/1300x1300/93820702/bermuda-adidas-3g-speed-x-masculina-img.jpg",
        "promotion": true,
        "priceWithDiscount": 70.99,
    },
];

let dataUsers = [
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