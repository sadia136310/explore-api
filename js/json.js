const shop = {
    owner: 'Alia',
    Address: {
        Road: 'Ranbir',
        location: 'kochukhet'
    },
    Products: ['phone', 'laptop', 'cpu', 'monitor'],
    isNew: false,
    isGood: true
}
console.log(shop);
const jsonShop = JSON.stringify(shop);
console.log(jsonShop);
const jsonObj = JSON.parse(jsonShop);
console.log(jsonObj);