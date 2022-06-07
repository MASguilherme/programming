const prices = [
    {item: "Doll", price: 20},
    {item: "Puppet", price: 30},
    {item: "Remote Cart", price: 50}
];

const balance = 150;

function purchasedToys(price, balance){

    return price.reduce((prev, current) => prev - current.price, balance);
}

console.log(`I have $${purchasedToys(prices, balance)} of available balance.`);
