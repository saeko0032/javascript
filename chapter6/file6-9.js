var array = [2, 3, 4];
array[0];
array.length;
for(var i = 0; i < array.length; i++) {
    console.log(array[i]);
}
var newArray = [["1st", false],["2nd", true],["3ed", false]];
console.log(newArray[0][1]);
newArray.length;
 for (var j = 0; j < newArray.length; j++) {
     for(var k = 0; k <newArray[j].length; k++) {
         console.log(newArray[j][k]);
     }
}
