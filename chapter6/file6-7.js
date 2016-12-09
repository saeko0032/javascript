var friends = new Object();
friends = {
    bill: {
        firstName: 'Bill',
        lastName: 'Gates',
        number: "(206) 555-5555",
        address: ['One Microsoft Way','Redmond','WA','98052']
    },
    steve: {
        firstName: 'Steve',
        lastName: 'Jobs',
        number: "(206) 444-4444",
        address: ['One Apple Way','Redmond','WA','98052']
    }
};
var list = function(obj) {
    for (var key in obj) {
        console.log(key);
    }
}
list(friends);

var search = function(name) {
    for (var key in friends) {
        if (friends[key].firstName == name) {
            console.log(friends[key]);
            return friends[key];
        }
    }
}
search("steve");
