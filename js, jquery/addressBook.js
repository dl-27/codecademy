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
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

function search(lastName){
    var contactsLength = contacts.length;
    for (var i = 0; i < contactsLength; i++){
        if (lastName === contacts[i].lastName){
            printPerson(contacts[i]);
        }
    }
}

function add(firstName, lastName, email, phoneNumber){
    var newObj = new Object();
    newObj.firstName = firstName;
    newObj.lastName = lastName;
    newObj.email = email;
    newObj.phoneNumber = phoneNumber;
    return newObj;
};

contacts[contacts.length] = add("name1", "surname1", "000@00.0", "0000");

list();