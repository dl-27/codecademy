var friends = {
    bill: {firstName: "Bill",
            lastName: "Bill",
            number: "1111",
            address: ['address1', 'address2']},
    steve: {firstName: "Steve",
            lastName: "Steve",
            number: "2222",
            address: ['address3', 'address4']}
};
var list = function(friends){
    for (var key in friends){
        console.log(key);
    }
}

list(friends);

var search = function(name){
    for (var key in friends){
        if (friends[key].firstName===name){
            console.log(friends[key]);
            return (friends[key]);
        }
    }
}
search("Steve");