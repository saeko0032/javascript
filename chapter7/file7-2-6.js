var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

/*Create a search function
then call it passing "Jones"*/
var search = function(lastName) {
	for (var i = 0; i < contactsLength; i++) {
		if(contacts[i].lastName === lastName) {
		    printPerson(contacts[i]);
		}
	}
}
//search("Jones");
// add
var add = function(firstName, lastName, email, phoneNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    contacts.push(this);
}
add("tanaka","taro","tanaka@example.com",123-456-789);
var contactsLength = contacts.length;

list();
