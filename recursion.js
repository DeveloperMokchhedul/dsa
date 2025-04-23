



// greet()


// function greet() {
//     console.log("he this is recursion practice");
//     enjoy()
//     console.log("greet end");
    

// }



// function enjoy(){
//     console.log("enjoy");
//     temp()
//     console.log('Enjoy end');
    
// }

// function temp(){
//     console.log("temp function end")
    
// }


// recursion: বড় সমস্যা কে ছোট ছোট সমস্যায় পরিনত করে সমস্যা সমাধান করার পক্রিয়াই হলো recursion

// for(let i=1; i<=5; i++){
//     console.log(i);
    
    
// }

// function recursion(n){
//     if (n==0)  return
//     console.log(n);
//     recursion(n-1) 

// }
// recursion(5)


// n theke 1 porjonto number print korte hbe


function recursion(n){
    if (n==0) return
    console.log(n);
    recursion(n-1);

    
}

recursion(10)