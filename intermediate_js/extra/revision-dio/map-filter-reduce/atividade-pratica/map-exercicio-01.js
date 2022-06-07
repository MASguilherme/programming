const initialNumber = {
    value: 2,
}

const orange = {
    value: 4,
}

function mapWithThis(arr, thisArg) {

    return arr.map(function(item){
        return item * this.value;
    }, thisArg);
}

const num = [1,2];

console.log(mapWithThis(num, initialNumber));