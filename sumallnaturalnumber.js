

// sum of all natural number from 1-n 

function sumofnaturalnumber(n){
    let ans = 0;

    for(let i = 1; i<=n; i++){
        ans +=i    
    }
    return ans
}
console.log(sumofnaturalnumber(10));
