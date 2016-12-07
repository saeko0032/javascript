var slaying = true;
var youHit = Math.floor(Math.random() * 2); // 0 or 1
var damageDragonThisRound = Math.floor(Math.random() * 5 + 1); // 1 to 5
var totalDamage = 0;
while (slaying) {
    if (youHit) {
        totalDamage += damageDragonThisRound;
        console.log("you Hit dragon!");
        
        if (totalDamage >= 4) {
            console.log("congratulation!");
            slaying = false;
        } else {
            youHit = Math.floor(Math.random() * 2);
        }
    } else {
        console.log("you lose");
        slaying = false;
    }
}
