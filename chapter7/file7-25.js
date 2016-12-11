function Rabbit(adjective) {
    this.adjective = adjective;
    this.describeMyself = function() {
        console.log("I am a " + this.adjective + " rabbit");
    };
}

// now we can easily make all of our rabbits
var rabbit1 = new Rabbit("fluffy");
rabbit1.describeMyself();
var rabbit2 = new Rabbit("happy");
rabbit2.describeMyself();
var rabbit3 = new Rabbit("sleepy");
rabbit3.describeMyself();
