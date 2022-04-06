function calc(){
    var n1 = document.querySelector('#number1').value;
    var n2 = document.querySelector('#number2').value;
    var mult = n1 * n2;
    var calculo = document.querySelector('#resultado');

        calculo.innerHTML = `<strong>${n1} X ${n2}</strong> = ${mult}`;

}

var getAtt = document.querySelector('a').setAttribute('href','www.bing.com');
var a = document.querySelector('a');
a.innerHTML = getAtt;