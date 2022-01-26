const pop = 10;
for(let i = 1; i <= pop; i++) {
    console.log(i);
    prov = i % 2 == 0;
    if (prov == true) {
        console.log("Число парне");
    }
    else if (prov == false) {
        console.log("Число не парне");
    }
}
let num = 20; 
while (num <= 28){
    console.log(num);
    num += 1;
}
let name;
do {
   name= prompt('Введіть імя вашого улюбленого героя');
} while (name.length > 6);
console.log(name);