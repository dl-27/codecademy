var text = "qwerty Daria,gjhjg Daria hghjng Daria";
var myName = "Daria";
var hits = [];
for (i = 0; i <= text.length; i++){
    if (text[i]==="D"){
        for (var j=i; j<i+myName.length; j++){
          hits.push(text[j]);
        }
    }
}
if (hits.length === 0){
    console.log("Your name wasn't found!");
} else {
    console.log(hits);
}