const rockets = [
    {country:"Russia", launches: 32},
    {country:"USA", launches: 23},
    {country: "China", launches: 16}
];

const totalLaunches = rockets.reduce((prevVal, elem) => prevVal + elem.launches, 0);

console.log(`Total rocket launching: ${totalLaunches}`);