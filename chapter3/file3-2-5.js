/*jshint multistr:true */

var text ="Hey, how are you? I'm Saeko.\
Saeko Fukui from Japan.";
var myName = "Saeko";
var hits = [];

for(var i = 0; i< text.length; i++){
    if(text[i] === myName[0]) {
        for ( var j = i; j < (myName.length + i); j++) {
            hits.push(text[j]);
        }
    }
}
