
// 1. find GCD  from two number like 32 and 20

let a = 32, b = 20


while(a!=b){
    if(a>b) a = a-b
    else b = b-a
}
console.log(a);
