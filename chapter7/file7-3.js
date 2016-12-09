// 3,6,9,12,18 -> disable
// 5,10,20 -> fizz
// 15-> buzz

for (var i = 1; i < 21; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");    
    } else {
        if (i % 3 === 0) {
            console.log("Fizz");
        } else if(i % 5 === 0) {
            // print Fizz
            console.log("Buzz");
        } else {
            // print mynumber
            console.log(i);
        }
    } 
}
